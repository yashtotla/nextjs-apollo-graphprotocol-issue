// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TfmSubgraphMumbaiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Action = {
  id: Scalars['String'];
};

export type Action_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Action_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Action_filter>>>;
};

export type Action_orderBy =
  | 'id';

export type AllocatedCollateral = {
  id: Scalars['String'];
  user: Scalars['Bytes'];
  strategyID: Scalars['BigInt'];
  basis: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type AllocatedCollateral_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  strategyID?: InputMaybe<Scalars['BigInt']>;
  strategyID_not?: InputMaybe<Scalars['BigInt']>;
  strategyID_gt?: InputMaybe<Scalars['BigInt']>;
  strategyID_lt?: InputMaybe<Scalars['BigInt']>;
  strategyID_gte?: InputMaybe<Scalars['BigInt']>;
  strategyID_lte?: InputMaybe<Scalars['BigInt']>;
  strategyID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strategyID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basis?: InputMaybe<Scalars['Bytes']>;
  basis_not?: InputMaybe<Scalars['Bytes']>;
  basis_gt?: InputMaybe<Scalars['Bytes']>;
  basis_lt?: InputMaybe<Scalars['Bytes']>;
  basis_gte?: InputMaybe<Scalars['Bytes']>;
  basis_lte?: InputMaybe<Scalars['Bytes']>;
  basis_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_contains?: InputMaybe<Scalars['Bytes']>;
  basis_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AllocatedCollateral_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AllocatedCollateral_filter>>>;
};

export type AllocatedCollateral_orderBy =
  | 'id'
  | 'user'
  | 'strategyID'
  | 'basis'
  | 'amount';

export type Annihilated = Action & {
  id: Scalars['String'];
};

export type Annihilated_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Annihilated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Annihilated_filter>>>;
};

export type Annihilated_orderBy =
  | 'id';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CallPut =
  | 'C'
  | 'P';

export type CollateralLock = {
  id: Scalars['String'];
  user: Scalars['Bytes'];
  locker: Scalars['Bytes'];
  basis: Scalars['Bytes'];
  expiry: Scalars['BigInt'];
  amount: Scalars['BigInt'];
};

export type CollateralLock_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  locker?: InputMaybe<Scalars['Bytes']>;
  locker_not?: InputMaybe<Scalars['Bytes']>;
  locker_gt?: InputMaybe<Scalars['Bytes']>;
  locker_lt?: InputMaybe<Scalars['Bytes']>;
  locker_gte?: InputMaybe<Scalars['Bytes']>;
  locker_lte?: InputMaybe<Scalars['Bytes']>;
  locker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  locker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  locker_contains?: InputMaybe<Scalars['Bytes']>;
  locker_not_contains?: InputMaybe<Scalars['Bytes']>;
  basis?: InputMaybe<Scalars['Bytes']>;
  basis_not?: InputMaybe<Scalars['Bytes']>;
  basis_gt?: InputMaybe<Scalars['Bytes']>;
  basis_lt?: InputMaybe<Scalars['Bytes']>;
  basis_gte?: InputMaybe<Scalars['Bytes']>;
  basis_lte?: InputMaybe<Scalars['Bytes']>;
  basis_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_contains?: InputMaybe<Scalars['Bytes']>;
  basis_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiry?: InputMaybe<Scalars['BigInt']>;
  expiry_not?: InputMaybe<Scalars['BigInt']>;
  expiry_gt?: InputMaybe<Scalars['BigInt']>;
  expiry_lt?: InputMaybe<Scalars['BigInt']>;
  expiry_gte?: InputMaybe<Scalars['BigInt']>;
  expiry_lte?: InputMaybe<Scalars['BigInt']>;
  expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralLock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralLock_filter>>>;
};

export type CollateralLock_orderBy =
  | 'id'
  | 'user'
  | 'locker'
  | 'basis'
  | 'expiry'
  | 'amount';

export type Combined = Action & {
  id: Scalars['String'];
};

export type Combined_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Combined_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Combined_filter>>>;
};

export type Combined_orderBy =
  | 'id';

export type Direction =
  | 'LONG'
  | 'SHORT';

export type GlobalData = {
  id: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  liquidator: Scalars['Bytes'];
  collateralManager: Scalars['Bytes'];
  polaron: Scalars['BigInt'];
  proton: Scalars['BigInt'];
  electron: Scalars['BigInt'];
  neutron: Scalars['BigInt'];
};

export type GlobalDataCM = {
  id: Scalars['Bytes'];
  tfm: Scalars['Bytes'];
  collateralNonce: Scalars['BigInt'];
  treasury: Scalars['Bytes'];
  insuranceFund: Scalars['Bytes'];
  web2: Scalars['Bytes'];
  relay: Scalars['Bytes'];
};

export type GlobalDataCM_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  tfm?: InputMaybe<Scalars['Bytes']>;
  tfm_not?: InputMaybe<Scalars['Bytes']>;
  tfm_gt?: InputMaybe<Scalars['Bytes']>;
  tfm_lt?: InputMaybe<Scalars['Bytes']>;
  tfm_gte?: InputMaybe<Scalars['Bytes']>;
  tfm_lte?: InputMaybe<Scalars['Bytes']>;
  tfm_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tfm_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tfm_contains?: InputMaybe<Scalars['Bytes']>;
  tfm_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateralNonce?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_not?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_gt?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_lt?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_gte?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_lte?: InputMaybe<Scalars['BigInt']>;
  collateralNonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralNonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treasury?: InputMaybe<Scalars['Bytes']>;
  treasury_not?: InputMaybe<Scalars['Bytes']>;
  treasury_gt?: InputMaybe<Scalars['Bytes']>;
  treasury_lt?: InputMaybe<Scalars['Bytes']>;
  treasury_gte?: InputMaybe<Scalars['Bytes']>;
  treasury_lte?: InputMaybe<Scalars['Bytes']>;
  treasury_in?: InputMaybe<Array<Scalars['Bytes']>>;
  treasury_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  treasury_contains?: InputMaybe<Scalars['Bytes']>;
  treasury_not_contains?: InputMaybe<Scalars['Bytes']>;
  insuranceFund?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_not?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_gt?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_lt?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_gte?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_lte?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_in?: InputMaybe<Array<Scalars['Bytes']>>;
  insuranceFund_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  insuranceFund_contains?: InputMaybe<Scalars['Bytes']>;
  insuranceFund_not_contains?: InputMaybe<Scalars['Bytes']>;
  web2?: InputMaybe<Scalars['Bytes']>;
  web2_not?: InputMaybe<Scalars['Bytes']>;
  web2_gt?: InputMaybe<Scalars['Bytes']>;
  web2_lt?: InputMaybe<Scalars['Bytes']>;
  web2_gte?: InputMaybe<Scalars['Bytes']>;
  web2_lte?: InputMaybe<Scalars['Bytes']>;
  web2_in?: InputMaybe<Array<Scalars['Bytes']>>;
  web2_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  web2_contains?: InputMaybe<Scalars['Bytes']>;
  web2_not_contains?: InputMaybe<Scalars['Bytes']>;
  relay?: InputMaybe<Scalars['Bytes']>;
  relay_not?: InputMaybe<Scalars['Bytes']>;
  relay_gt?: InputMaybe<Scalars['Bytes']>;
  relay_lt?: InputMaybe<Scalars['Bytes']>;
  relay_gte?: InputMaybe<Scalars['Bytes']>;
  relay_lte?: InputMaybe<Scalars['Bytes']>;
  relay_in?: InputMaybe<Array<Scalars['Bytes']>>;
  relay_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  relay_contains?: InputMaybe<Scalars['Bytes']>;
  relay_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalDataCM_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalDataCM_filter>>>;
};

export type GlobalDataCM_orderBy =
  | 'id'
  | 'tfm'
  | 'collateralNonce'
  | 'treasury'
  | 'insuranceFund'
  | 'web2'
  | 'relay';

export type GlobalData_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator?: InputMaybe<Scalars['Bytes']>;
  liquidator_not?: InputMaybe<Scalars['Bytes']>;
  liquidator_gt?: InputMaybe<Scalars['Bytes']>;
  liquidator_lt?: InputMaybe<Scalars['Bytes']>;
  liquidator_gte?: InputMaybe<Scalars['Bytes']>;
  liquidator_lte?: InputMaybe<Scalars['Bytes']>;
  liquidator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateralManager?: InputMaybe<Scalars['Bytes']>;
  collateralManager_not?: InputMaybe<Scalars['Bytes']>;
  collateralManager_gt?: InputMaybe<Scalars['Bytes']>;
  collateralManager_lt?: InputMaybe<Scalars['Bytes']>;
  collateralManager_gte?: InputMaybe<Scalars['Bytes']>;
  collateralManager_lte?: InputMaybe<Scalars['Bytes']>;
  collateralManager_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralManager_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralManager_contains?: InputMaybe<Scalars['Bytes']>;
  collateralManager_not_contains?: InputMaybe<Scalars['Bytes']>;
  polaron?: InputMaybe<Scalars['BigInt']>;
  polaron_not?: InputMaybe<Scalars['BigInt']>;
  polaron_gt?: InputMaybe<Scalars['BigInt']>;
  polaron_lt?: InputMaybe<Scalars['BigInt']>;
  polaron_gte?: InputMaybe<Scalars['BigInt']>;
  polaron_lte?: InputMaybe<Scalars['BigInt']>;
  polaron_in?: InputMaybe<Array<Scalars['BigInt']>>;
  polaron_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proton?: InputMaybe<Scalars['BigInt']>;
  proton_not?: InputMaybe<Scalars['BigInt']>;
  proton_gt?: InputMaybe<Scalars['BigInt']>;
  proton_lt?: InputMaybe<Scalars['BigInt']>;
  proton_gte?: InputMaybe<Scalars['BigInt']>;
  proton_lte?: InputMaybe<Scalars['BigInt']>;
  proton_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proton_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  electron?: InputMaybe<Scalars['BigInt']>;
  electron_not?: InputMaybe<Scalars['BigInt']>;
  electron_gt?: InputMaybe<Scalars['BigInt']>;
  electron_lt?: InputMaybe<Scalars['BigInt']>;
  electron_gte?: InputMaybe<Scalars['BigInt']>;
  electron_lte?: InputMaybe<Scalars['BigInt']>;
  electron_in?: InputMaybe<Array<Scalars['BigInt']>>;
  electron_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  neutron?: InputMaybe<Scalars['BigInt']>;
  neutron_not?: InputMaybe<Scalars['BigInt']>;
  neutron_gt?: InputMaybe<Scalars['BigInt']>;
  neutron_lt?: InputMaybe<Scalars['BigInt']>;
  neutron_gte?: InputMaybe<Scalars['BigInt']>;
  neutron_lte?: InputMaybe<Scalars['BigInt']>;
  neutron_in?: InputMaybe<Array<Scalars['BigInt']>>;
  neutron_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalData_filter>>>;
};

export type GlobalData_orderBy =
  | 'id'
  | 'owner'
  | 'liquidator'
  | 'collateralManager'
  | 'polaron'
  | 'proton'
  | 'electron'
  | 'neutron';

export type Liquidated = Action & {
  id: Scalars['String'];
};

export type Liquidated_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidated_filter>>>;
};

export type Liquidated_orderBy =
  | 'id';

export type Novated = Action & {
  id: Scalars['String'];
};

export type Novated_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Novated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Novated_filter>>>;
};

export type Novated_orderBy =
  | 'id';

export type Option = {
  id: Scalars['String'];
  direction: Direction;
  notional: Scalars['BigInt'];
  bra: Scalars['Bytes'];
  ket: Scalars['Bytes'];
  expiry: Scalars['BigInt'];
  strike: Scalars['BigInt'];
  callput: CallPut;
};

export type Option_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Direction>;
  direction_not?: InputMaybe<Direction>;
  direction_in?: InputMaybe<Array<Direction>>;
  direction_not_in?: InputMaybe<Array<Direction>>;
  notional?: InputMaybe<Scalars['BigInt']>;
  notional_not?: InputMaybe<Scalars['BigInt']>;
  notional_gt?: InputMaybe<Scalars['BigInt']>;
  notional_lt?: InputMaybe<Scalars['BigInt']>;
  notional_gte?: InputMaybe<Scalars['BigInt']>;
  notional_lte?: InputMaybe<Scalars['BigInt']>;
  notional_in?: InputMaybe<Array<Scalars['BigInt']>>;
  notional_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bra?: InputMaybe<Scalars['Bytes']>;
  bra_not?: InputMaybe<Scalars['Bytes']>;
  bra_gt?: InputMaybe<Scalars['Bytes']>;
  bra_lt?: InputMaybe<Scalars['Bytes']>;
  bra_gte?: InputMaybe<Scalars['Bytes']>;
  bra_lte?: InputMaybe<Scalars['Bytes']>;
  bra_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bra_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bra_contains?: InputMaybe<Scalars['Bytes']>;
  bra_not_contains?: InputMaybe<Scalars['Bytes']>;
  ket?: InputMaybe<Scalars['Bytes']>;
  ket_not?: InputMaybe<Scalars['Bytes']>;
  ket_gt?: InputMaybe<Scalars['Bytes']>;
  ket_lt?: InputMaybe<Scalars['Bytes']>;
  ket_gte?: InputMaybe<Scalars['Bytes']>;
  ket_lte?: InputMaybe<Scalars['Bytes']>;
  ket_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ket_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ket_contains?: InputMaybe<Scalars['Bytes']>;
  ket_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiry?: InputMaybe<Scalars['BigInt']>;
  expiry_not?: InputMaybe<Scalars['BigInt']>;
  expiry_gt?: InputMaybe<Scalars['BigInt']>;
  expiry_lt?: InputMaybe<Scalars['BigInt']>;
  expiry_gte?: InputMaybe<Scalars['BigInt']>;
  expiry_lte?: InputMaybe<Scalars['BigInt']>;
  expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strike?: InputMaybe<Scalars['BigInt']>;
  strike_not?: InputMaybe<Scalars['BigInt']>;
  strike_gt?: InputMaybe<Scalars['BigInt']>;
  strike_lt?: InputMaybe<Scalars['BigInt']>;
  strike_gte?: InputMaybe<Scalars['BigInt']>;
  strike_lte?: InputMaybe<Scalars['BigInt']>;
  strike_in?: InputMaybe<Array<Scalars['BigInt']>>;
  strike_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callput?: InputMaybe<CallPut>;
  callput_not?: InputMaybe<CallPut>;
  callput_in?: InputMaybe<Array<CallPut>>;
  callput_not_in?: InputMaybe<Array<CallPut>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Option_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Option_filter>>>;
};

export type Option_orderBy =
  | 'id'
  | 'direction'
  | 'notional'
  | 'bra'
  | 'ket'
  | 'expiry'
  | 'strike'
  | 'callput';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Photon = {
  id: Scalars['Bytes'];
  mass: Scalars['BigInt'];
};

export type Photon_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  mass?: InputMaybe<Scalars['BigInt']>;
  mass_not?: InputMaybe<Scalars['BigInt']>;
  mass_gt?: InputMaybe<Scalars['BigInt']>;
  mass_lt?: InputMaybe<Scalars['BigInt']>;
  mass_gte?: InputMaybe<Scalars['BigInt']>;
  mass_lte?: InputMaybe<Scalars['BigInt']>;
  mass_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mass_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Photon_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Photon_filter>>>;
};

export type Photon_orderBy =
  | 'id'
  | 'mass';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  photon?: Maybe<Photon>;
  photons: Array<Photon>;
  allocatedCollateral?: Maybe<AllocatedCollateral>;
  allocatedCollaterals: Array<AllocatedCollateral>;
  unallocatedCollateral?: Maybe<UnallocatedCollateral>;
  unallocatedCollaterals: Array<UnallocatedCollateral>;
  globalData?: Maybe<GlobalData>;
  globalDatas: Array<GlobalData>;
  globalDataCM?: Maybe<GlobalDataCM>;
  globalDataCMs: Array<GlobalDataCM>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  option?: Maybe<Option>;
  options: Array<Option>;
  trustedLocker?: Maybe<TrustedLocker>;
  trustedLockers: Array<TrustedLocker>;
  collateralLock?: Maybe<CollateralLock>;
  collateralLocks: Array<CollateralLock>;
  liquidated?: Maybe<Liquidated>;
  liquidateds: Array<Liquidated>;
  transferred?: Maybe<Transferred>;
  transferreds: Array<Transferred>;
  combined?: Maybe<Combined>;
  combineds: Array<Combined>;
  novated?: Maybe<Novated>;
  novateds: Array<Novated>;
  annihilated?: Maybe<Annihilated>;
  annihilateds: Array<Annihilated>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryphotonArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryphotonsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Photon_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Photon_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryallocatedCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryallocatedCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AllocatedCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AllocatedCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunallocatedCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunallocatedCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnallocatedCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnallocatedCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalDataCMArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalDataCMsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalDataCM_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalDataCM_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryoptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryoptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Option_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Option_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedLockerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytrustedLockersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedLocker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedLocker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralLockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralLocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralLock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycombinedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycombinedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Combined_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Combined_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynovatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynovatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Novated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Novated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryannihilatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryannihilatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Annihilated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Annihilated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Strategy = {
  id: Scalars['String'];
  transferable: Scalars['Boolean'];
  bra: Scalars['Bytes'];
  ket: Scalars['Bytes'];
  basis: Scalars['Bytes'];
  alpha: Scalars['Bytes'];
  omega: Scalars['Bytes'];
  expiry: Scalars['BigInt'];
  wavefn?: Maybe<Array<Option>>;
  deleted: Scalars['Boolean'];
};


export type StrategywavefnArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Option_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Option_filter>;
};

export type Strategy_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transferable?: InputMaybe<Scalars['Boolean']>;
  transferable_not?: InputMaybe<Scalars['Boolean']>;
  transferable_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transferable_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  bra?: InputMaybe<Scalars['Bytes']>;
  bra_not?: InputMaybe<Scalars['Bytes']>;
  bra_gt?: InputMaybe<Scalars['Bytes']>;
  bra_lt?: InputMaybe<Scalars['Bytes']>;
  bra_gte?: InputMaybe<Scalars['Bytes']>;
  bra_lte?: InputMaybe<Scalars['Bytes']>;
  bra_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bra_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bra_contains?: InputMaybe<Scalars['Bytes']>;
  bra_not_contains?: InputMaybe<Scalars['Bytes']>;
  ket?: InputMaybe<Scalars['Bytes']>;
  ket_not?: InputMaybe<Scalars['Bytes']>;
  ket_gt?: InputMaybe<Scalars['Bytes']>;
  ket_lt?: InputMaybe<Scalars['Bytes']>;
  ket_gte?: InputMaybe<Scalars['Bytes']>;
  ket_lte?: InputMaybe<Scalars['Bytes']>;
  ket_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ket_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ket_contains?: InputMaybe<Scalars['Bytes']>;
  ket_not_contains?: InputMaybe<Scalars['Bytes']>;
  basis?: InputMaybe<Scalars['Bytes']>;
  basis_not?: InputMaybe<Scalars['Bytes']>;
  basis_gt?: InputMaybe<Scalars['Bytes']>;
  basis_lt?: InputMaybe<Scalars['Bytes']>;
  basis_gte?: InputMaybe<Scalars['Bytes']>;
  basis_lte?: InputMaybe<Scalars['Bytes']>;
  basis_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_contains?: InputMaybe<Scalars['Bytes']>;
  basis_not_contains?: InputMaybe<Scalars['Bytes']>;
  alpha?: InputMaybe<Scalars['Bytes']>;
  alpha_not?: InputMaybe<Scalars['Bytes']>;
  alpha_gt?: InputMaybe<Scalars['Bytes']>;
  alpha_lt?: InputMaybe<Scalars['Bytes']>;
  alpha_gte?: InputMaybe<Scalars['Bytes']>;
  alpha_lte?: InputMaybe<Scalars['Bytes']>;
  alpha_in?: InputMaybe<Array<Scalars['Bytes']>>;
  alpha_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  alpha_contains?: InputMaybe<Scalars['Bytes']>;
  alpha_not_contains?: InputMaybe<Scalars['Bytes']>;
  omega?: InputMaybe<Scalars['Bytes']>;
  omega_not?: InputMaybe<Scalars['Bytes']>;
  omega_gt?: InputMaybe<Scalars['Bytes']>;
  omega_lt?: InputMaybe<Scalars['Bytes']>;
  omega_gte?: InputMaybe<Scalars['Bytes']>;
  omega_lte?: InputMaybe<Scalars['Bytes']>;
  omega_in?: InputMaybe<Array<Scalars['Bytes']>>;
  omega_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  omega_contains?: InputMaybe<Scalars['Bytes']>;
  omega_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiry?: InputMaybe<Scalars['BigInt']>;
  expiry_not?: InputMaybe<Scalars['BigInt']>;
  expiry_gt?: InputMaybe<Scalars['BigInt']>;
  expiry_lt?: InputMaybe<Scalars['BigInt']>;
  expiry_gte?: InputMaybe<Scalars['BigInt']>;
  expiry_lte?: InputMaybe<Scalars['BigInt']>;
  expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  wavefn?: InputMaybe<Array<Scalars['String']>>;
  wavefn_not?: InputMaybe<Array<Scalars['String']>>;
  wavefn_contains?: InputMaybe<Array<Scalars['String']>>;
  wavefn_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  wavefn_not_contains?: InputMaybe<Array<Scalars['String']>>;
  wavefn_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  wavefn_?: InputMaybe<Option_filter>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  deleted_not?: InputMaybe<Scalars['Boolean']>;
  deleted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  deleted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Strategy_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Strategy_filter>>>;
};

export type Strategy_orderBy =
  | 'id'
  | 'transferable'
  | 'bra'
  | 'ket'
  | 'basis'
  | 'alpha'
  | 'omega'
  | 'expiry'
  | 'wavefn'
  | 'deleted';

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  photon?: Maybe<Photon>;
  photons: Array<Photon>;
  allocatedCollateral?: Maybe<AllocatedCollateral>;
  allocatedCollaterals: Array<AllocatedCollateral>;
  unallocatedCollateral?: Maybe<UnallocatedCollateral>;
  unallocatedCollaterals: Array<UnallocatedCollateral>;
  globalData?: Maybe<GlobalData>;
  globalDatas: Array<GlobalData>;
  globalDataCM?: Maybe<GlobalDataCM>;
  globalDataCMs: Array<GlobalDataCM>;
  strategy?: Maybe<Strategy>;
  strategies: Array<Strategy>;
  option?: Maybe<Option>;
  options: Array<Option>;
  trustedLocker?: Maybe<TrustedLocker>;
  trustedLockers: Array<TrustedLocker>;
  collateralLock?: Maybe<CollateralLock>;
  collateralLocks: Array<CollateralLock>;
  liquidated?: Maybe<Liquidated>;
  liquidateds: Array<Liquidated>;
  transferred?: Maybe<Transferred>;
  transferreds: Array<Transferred>;
  combined?: Maybe<Combined>;
  combineds: Array<Combined>;
  novated?: Maybe<Novated>;
  novateds: Array<Novated>;
  annihilated?: Maybe<Annihilated>;
  annihilateds: Array<Annihilated>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionphotonArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionphotonsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Photon_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Photon_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionallocatedCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionallocatedCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AllocatedCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AllocatedCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunallocatedCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunallocatedCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnallocatedCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnallocatedCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalDataCMArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalDataCMsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlobalDataCM_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalDataCM_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstrategiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Strategy_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Strategy_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionoptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionoptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Option_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Option_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontrustedLockerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontrustedLockersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrustedLocker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TrustedLocker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralLockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralLocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollateralLock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncombinedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncombinedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Combined_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Combined_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnovatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnovatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Novated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Novated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionannihilatedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionannihilatedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Annihilated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Annihilated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['Bytes'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['BigInt'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals';

export type Transferred = Action & {
  id: Scalars['String'];
};

export type Transferred_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transferred_filter>>>;
};

export type Transferred_orderBy =
  | 'id';

export type TrustedLocker = {
  id: Scalars['String'];
  user: Scalars['Bytes'];
  locker: Scalars['Bytes'];
  trusted: Scalars['Boolean'];
};

export type TrustedLocker_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  locker?: InputMaybe<Scalars['Bytes']>;
  locker_not?: InputMaybe<Scalars['Bytes']>;
  locker_gt?: InputMaybe<Scalars['Bytes']>;
  locker_lt?: InputMaybe<Scalars['Bytes']>;
  locker_gte?: InputMaybe<Scalars['Bytes']>;
  locker_lte?: InputMaybe<Scalars['Bytes']>;
  locker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  locker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  locker_contains?: InputMaybe<Scalars['Bytes']>;
  locker_not_contains?: InputMaybe<Scalars['Bytes']>;
  trusted?: InputMaybe<Scalars['Boolean']>;
  trusted_not?: InputMaybe<Scalars['Boolean']>;
  trusted_in?: InputMaybe<Array<Scalars['Boolean']>>;
  trusted_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TrustedLocker_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TrustedLocker_filter>>>;
};

export type TrustedLocker_orderBy =
  | 'id'
  | 'user'
  | 'locker'
  | 'trusted';

export type UnallocatedCollateral = {
  id: Scalars['String'];
  user: Scalars['Bytes'];
  basis: Scalars['Bytes'];
  amount: Scalars['BigInt'];
};

export type UnallocatedCollateral_filter = {
  id?: InputMaybe<Scalars['String']>;
  id_not?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_contains_nocase?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']>;
  id_starts_with?: InputMaybe<Scalars['String']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_starts_with?: InputMaybe<Scalars['String']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id_ends_with?: InputMaybe<Scalars['String']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']>;
  id_not_ends_with?: InputMaybe<Scalars['String']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['Bytes']>;
  user_not?: InputMaybe<Scalars['Bytes']>;
  user_gt?: InputMaybe<Scalars['Bytes']>;
  user_lt?: InputMaybe<Scalars['Bytes']>;
  user_gte?: InputMaybe<Scalars['Bytes']>;
  user_lte?: InputMaybe<Scalars['Bytes']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  user_contains?: InputMaybe<Scalars['Bytes']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']>;
  basis?: InputMaybe<Scalars['Bytes']>;
  basis_not?: InputMaybe<Scalars['Bytes']>;
  basis_gt?: InputMaybe<Scalars['Bytes']>;
  basis_lt?: InputMaybe<Scalars['Bytes']>;
  basis_gte?: InputMaybe<Scalars['Bytes']>;
  basis_lte?: InputMaybe<Scalars['Bytes']>;
  basis_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  basis_contains?: InputMaybe<Scalars['Bytes']>;
  basis_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnallocatedCollateral_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnallocatedCollateral_filter>>>;
};

export type UnallocatedCollateral_orderBy =
  | 'id'
  | 'user'
  | 'basis'
  | 'amount';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  photon: InContextSdkMethod<Query['photon'], QueryphotonArgs, MeshContext>,
  /** null **/
  photons: InContextSdkMethod<Query['photons'], QueryphotonsArgs, MeshContext>,
  /** null **/
  allocatedCollateral: InContextSdkMethod<Query['allocatedCollateral'], QueryallocatedCollateralArgs, MeshContext>,
  /** null **/
  allocatedCollaterals: InContextSdkMethod<Query['allocatedCollaterals'], QueryallocatedCollateralsArgs, MeshContext>,
  /** null **/
  unallocatedCollateral: InContextSdkMethod<Query['unallocatedCollateral'], QueryunallocatedCollateralArgs, MeshContext>,
  /** null **/
  unallocatedCollaterals: InContextSdkMethod<Query['unallocatedCollaterals'], QueryunallocatedCollateralsArgs, MeshContext>,
  /** null **/
  globalData: InContextSdkMethod<Query['globalData'], QueryglobalDataArgs, MeshContext>,
  /** null **/
  globalDatas: InContextSdkMethod<Query['globalDatas'], QueryglobalDatasArgs, MeshContext>,
  /** null **/
  globalDataCM: InContextSdkMethod<Query['globalDataCM'], QueryglobalDataCMArgs, MeshContext>,
  /** null **/
  globalDataCMs: InContextSdkMethod<Query['globalDataCMs'], QueryglobalDataCMsArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<Query['strategy'], QuerystrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<Query['strategies'], QuerystrategiesArgs, MeshContext>,
  /** null **/
  option: InContextSdkMethod<Query['option'], QueryoptionArgs, MeshContext>,
  /** null **/
  options: InContextSdkMethod<Query['options'], QueryoptionsArgs, MeshContext>,
  /** null **/
  trustedLocker: InContextSdkMethod<Query['trustedLocker'], QuerytrustedLockerArgs, MeshContext>,
  /** null **/
  trustedLockers: InContextSdkMethod<Query['trustedLockers'], QuerytrustedLockersArgs, MeshContext>,
  /** null **/
  collateralLock: InContextSdkMethod<Query['collateralLock'], QuerycollateralLockArgs, MeshContext>,
  /** null **/
  collateralLocks: InContextSdkMethod<Query['collateralLocks'], QuerycollateralLocksArgs, MeshContext>,
  /** null **/
  liquidated: InContextSdkMethod<Query['liquidated'], QueryliquidatedArgs, MeshContext>,
  /** null **/
  liquidateds: InContextSdkMethod<Query['liquidateds'], QueryliquidatedsArgs, MeshContext>,
  /** null **/
  transferred: InContextSdkMethod<Query['transferred'], QuerytransferredArgs, MeshContext>,
  /** null **/
  transferreds: InContextSdkMethod<Query['transferreds'], QuerytransferredsArgs, MeshContext>,
  /** null **/
  combined: InContextSdkMethod<Query['combined'], QuerycombinedArgs, MeshContext>,
  /** null **/
  combineds: InContextSdkMethod<Query['combineds'], QuerycombinedsArgs, MeshContext>,
  /** null **/
  novated: InContextSdkMethod<Query['novated'], QuerynovatedArgs, MeshContext>,
  /** null **/
  novateds: InContextSdkMethod<Query['novateds'], QuerynovatedsArgs, MeshContext>,
  /** null **/
  annihilated: InContextSdkMethod<Query['annihilated'], QueryannihilatedArgs, MeshContext>,
  /** null **/
  annihilateds: InContextSdkMethod<Query['annihilateds'], QueryannihilatedsArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Query['action'], QueryactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Query['actions'], QueryactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  photon: InContextSdkMethod<Subscription['photon'], SubscriptionphotonArgs, MeshContext>,
  /** null **/
  photons: InContextSdkMethod<Subscription['photons'], SubscriptionphotonsArgs, MeshContext>,
  /** null **/
  allocatedCollateral: InContextSdkMethod<Subscription['allocatedCollateral'], SubscriptionallocatedCollateralArgs, MeshContext>,
  /** null **/
  allocatedCollaterals: InContextSdkMethod<Subscription['allocatedCollaterals'], SubscriptionallocatedCollateralsArgs, MeshContext>,
  /** null **/
  unallocatedCollateral: InContextSdkMethod<Subscription['unallocatedCollateral'], SubscriptionunallocatedCollateralArgs, MeshContext>,
  /** null **/
  unallocatedCollaterals: InContextSdkMethod<Subscription['unallocatedCollaterals'], SubscriptionunallocatedCollateralsArgs, MeshContext>,
  /** null **/
  globalData: InContextSdkMethod<Subscription['globalData'], SubscriptionglobalDataArgs, MeshContext>,
  /** null **/
  globalDatas: InContextSdkMethod<Subscription['globalDatas'], SubscriptionglobalDatasArgs, MeshContext>,
  /** null **/
  globalDataCM: InContextSdkMethod<Subscription['globalDataCM'], SubscriptionglobalDataCMArgs, MeshContext>,
  /** null **/
  globalDataCMs: InContextSdkMethod<Subscription['globalDataCMs'], SubscriptionglobalDataCMsArgs, MeshContext>,
  /** null **/
  strategy: InContextSdkMethod<Subscription['strategy'], SubscriptionstrategyArgs, MeshContext>,
  /** null **/
  strategies: InContextSdkMethod<Subscription['strategies'], SubscriptionstrategiesArgs, MeshContext>,
  /** null **/
  option: InContextSdkMethod<Subscription['option'], SubscriptionoptionArgs, MeshContext>,
  /** null **/
  options: InContextSdkMethod<Subscription['options'], SubscriptionoptionsArgs, MeshContext>,
  /** null **/
  trustedLocker: InContextSdkMethod<Subscription['trustedLocker'], SubscriptiontrustedLockerArgs, MeshContext>,
  /** null **/
  trustedLockers: InContextSdkMethod<Subscription['trustedLockers'], SubscriptiontrustedLockersArgs, MeshContext>,
  /** null **/
  collateralLock: InContextSdkMethod<Subscription['collateralLock'], SubscriptioncollateralLockArgs, MeshContext>,
  /** null **/
  collateralLocks: InContextSdkMethod<Subscription['collateralLocks'], SubscriptioncollateralLocksArgs, MeshContext>,
  /** null **/
  liquidated: InContextSdkMethod<Subscription['liquidated'], SubscriptionliquidatedArgs, MeshContext>,
  /** null **/
  liquidateds: InContextSdkMethod<Subscription['liquidateds'], SubscriptionliquidatedsArgs, MeshContext>,
  /** null **/
  transferred: InContextSdkMethod<Subscription['transferred'], SubscriptiontransferredArgs, MeshContext>,
  /** null **/
  transferreds: InContextSdkMethod<Subscription['transferreds'], SubscriptiontransferredsArgs, MeshContext>,
  /** null **/
  combined: InContextSdkMethod<Subscription['combined'], SubscriptioncombinedArgs, MeshContext>,
  /** null **/
  combineds: InContextSdkMethod<Subscription['combineds'], SubscriptioncombinedsArgs, MeshContext>,
  /** null **/
  novated: InContextSdkMethod<Subscription['novated'], SubscriptionnovatedArgs, MeshContext>,
  /** null **/
  novateds: InContextSdkMethod<Subscription['novateds'], SubscriptionnovatedsArgs, MeshContext>,
  /** null **/
  annihilated: InContextSdkMethod<Subscription['annihilated'], SubscriptionannihilatedArgs, MeshContext>,
  /** null **/
  annihilateds: InContextSdkMethod<Subscription['annihilateds'], SubscriptionannihilatedsArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Subscription['action'], SubscriptionactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Subscription['actions'], SubscriptionactionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["tfm-subgraph-mumbai"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
