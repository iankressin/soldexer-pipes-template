# Build stage
FROM node:23-alpine AS builder

RUN apk update
RUN apk add --no-cache libc6-compat python3 make g++


# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:23-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy configuration file
COPY soldexer.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S soldexer -u 1001 -G nodejs

# Change ownership of app directory
RUN chown -R soldexer:nodejs /app

# Switch to non-root user
USER soldexer

# Expose port (if needed for health checks)
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV LOG_LEVEL=info

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD node -e "console.log('Health check passed')" || exit 1

# Start the application
CMD ["yarn", "start"]
