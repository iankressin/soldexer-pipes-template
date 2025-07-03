import { event } from '../abi.support'
import {
  AddLiquidity as AddLiquidity_,
  ClaimFee as ClaimFee_,
  ClaimReward as ClaimReward_,
  CompositionFee as CompositionFee_,
  DecreasePositionLength as DecreasePositionLength_,
  DynamicFeeParameterUpdate as DynamicFeeParameterUpdate_,
  FeeParameterUpdate as FeeParameterUpdate_,
  FundReward as FundReward_,
  GoToABin as GoToABin_,
  IncreaseObservation as IncreaseObservation_,
  IncreasePositionLength as IncreasePositionLength_,
  InitializeReward as InitializeReward_,
  LbPairCreate as LbPairCreate_,
  PositionClose as PositionClose_,
  PositionCreate as PositionCreate_,
  RemoveLiquidity as RemoveLiquidity_,
  Swap as Swap_,
  UpdatePositionLockReleasePoint as UpdatePositionLockReleasePoint_,
  UpdatePositionOperator as UpdatePositionOperator_,
  UpdateRewardDuration as UpdateRewardDuration_,
  UpdateRewardFunder as UpdateRewardFunder_,
  WithdrawIneligibleReward as WithdrawIneligibleReward_,
} from './types'

export type CompositionFee = CompositionFee_

export const CompositionFee = event(
  {
    d8: '0x80977b6a1166718e',
  },
  CompositionFee_,
)

export type AddLiquidity = AddLiquidity_

export const AddLiquidity = event(
  {
    d8: '0x1f5e7d5ae3343dba',
  },
  AddLiquidity_,
)

export type RemoveLiquidity = RemoveLiquidity_

export const RemoveLiquidity = event(
  {
    d8: '0x74f461e8671f983a',
  },
  RemoveLiquidity_,
)

export type Swap = Swap_

export const Swap = event(
  {
    d8: '0x516ce3becdd00ac4',
  },
  Swap_,
)

export type ClaimReward = ClaimReward_

export const ClaimReward = event(
  {
    d8: '0x947486cc16ab555f',
  },
  ClaimReward_,
)

export type FundReward = FundReward_

export const FundReward = event(
  {
    d8: '0xf6e43a8291aa4fcc',
  },
  FundReward_,
)

export type InitializeReward = InitializeReward_

export const InitializeReward = event(
  {
    d8: '0xd399583e953cb146',
  },
  InitializeReward_,
)

export type UpdateRewardDuration = UpdateRewardDuration_

export const UpdateRewardDuration = event(
  {
    d8: '0xdff5e099311da3ac',
  },
  UpdateRewardDuration_,
)

export type UpdateRewardFunder = UpdateRewardFunder_

export const UpdateRewardFunder = event(
  {
    d8: '0xe0b2ae4afca555b4',
  },
  UpdateRewardFunder_,
)

export type PositionClose = PositionClose_

export const PositionClose = event(
  {
    d8: '0xffc4106b1cca3580',
  },
  PositionClose_,
)

export type ClaimFee = ClaimFee_

export const ClaimFee = event(
  {
    d8: '0x4b7a9a308c4a7ba3',
  },
  ClaimFee_,
)

export type LbPairCreate = LbPairCreate_

export const LbPairCreate = event(
  {
    d8: '0xb94afc7d1bd7bc6f',
  },
  LbPairCreate_,
)

export type PositionCreate = PositionCreate_

export const PositionCreate = event(
  {
    d8: '0x908efc549d352579',
  },
  PositionCreate_,
)

export type IncreasePositionLength = IncreasePositionLength_

export const IncreasePositionLength = event(
  {
    d8: '0x9def2acc1e38df2e',
  },
  IncreasePositionLength_,
)

export type DecreasePositionLength = DecreasePositionLength_

export const DecreasePositionLength = event(
  {
    d8: '0x3476eb55aca90f80',
  },
  DecreasePositionLength_,
)

export type FeeParameterUpdate = FeeParameterUpdate_

export const FeeParameterUpdate = event(
  {
    d8: '0x304cf17590d7f22c',
  },
  FeeParameterUpdate_,
)

export type DynamicFeeParameterUpdate = DynamicFeeParameterUpdate_

export const DynamicFeeParameterUpdate = event(
  {
    d8: '0x5858b287c2925bf3',
  },
  DynamicFeeParameterUpdate_,
)

export type IncreaseObservation = IncreaseObservation_

export const IncreaseObservation = event(
  {
    d8: '0x63f91179a69ccfd7',
  },
  IncreaseObservation_,
)

export type WithdrawIneligibleReward = WithdrawIneligibleReward_

export const WithdrawIneligibleReward = event(
  {
    d8: '0xe7bd419566d79af4',
  },
  WithdrawIneligibleReward_,
)

export type UpdatePositionOperator = UpdatePositionOperator_

export const UpdatePositionOperator = event(
  {
    d8: '0x277330ccf62f4239',
  },
  UpdatePositionOperator_,
)

export type UpdatePositionLockReleasePoint = UpdatePositionLockReleasePoint_

export const UpdatePositionLockReleasePoint = event(
  {
    d8: '0x85d642e0400c07bf',
  },
  UpdatePositionLockReleasePoint_,
)

export type GoToABin = GoToABin_

export const GoToABin = event(
  {
    d8: '0x3b8a4c448a83b043',
  },
  GoToABin_,
)
