import { NodeClickHouseClient } from '@clickhouse/client/dist/client'
import { createClickhouseClient } from './db/clickhouse'
import { swapsIndexer } from './indexers/swaps'
import { logger } from './utils'
import { retry } from './utils/retry'
import { config } from 'dotenv'

config()

type Pipes = 'swaps' | 'metaplex' | 'pumpfun.token-creation' | 'pumpfun.bonding-curve-swaps'

export interface PipeConfig {
  fromBlock: number
  toBlock?: number
}

export interface ClickhouseConfig {
  database: string
  url: string
  username: string
  password: string
}

export interface SoldexerConfig {
  portalUrl: string
  pipes: Record<Pipes, PipeConfig>
  clickhouse?: ClickhouseConfig
}

export type IndexerFunction = (portalUrl: string, clickhouse: NodeClickHouseClient, config: PipeConfig) => Promise<void>

async function main() {
  const config = getConfig()

  console.log(config)

  const clickhouse = createClickhouseClient({
    url: config.clickhouse?.url || 'http://localhost:8123',
    database: config.clickhouse?.database || 'default',
    username: config.clickhouse?.username || 'default',
    password: config.clickhouse?.password || '',
  })

  await retry(() =>
    swapsIndexer(config.portalUrl, clickhouse, { fromBlock: config.fromBlock, toBlock: config.toBlock }),
  )
}

function getConfig() {
  const clickhouse: ClickhouseConfig = {
    database: process.env.CLICKHOUSE_DATABASE || 'default',
    url: process.env.CLICKHOUSE_URL || 'http://localhost:8123',
    username: process.env.CLICKHOUSE_USERNAME || 'default',
    password: process.env.CLICKHOUSE_PASSWORD || '',
  }

  const portalUrl = process.env.PORTAL_URL || 'https://portal.sqd.dev'

  const fromBlock = process.env.FROM_BLOCK ? parseInt(process.env.FROM_BLOCK) : undefined

  if (!fromBlock) {
    logger.error('FROM_BLOCK is not set')
    process.exit(1)
  }

  const toBlock = process.env.TO_BLOCK ? parseInt(process.env.TO_BLOCK) : undefined

  return {
    clickhouse,
    portalUrl,
    fromBlock,
    toBlock,
  }
}

void main()
