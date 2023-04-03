// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TfmSubgraphMumbaiTypes } from './sources/tfm-subgraph-mumbai/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Action: ResolversTypes['Annihilated'] | ResolversTypes['Combined'] | ResolversTypes['Liquidated'] | ResolversTypes['Novated'] | ResolversTypes['Transferred'];
  Action_filter: Action_filter;
  Action_orderBy: Action_orderBy;
  AllocatedCollateral: ResolverTypeWrapper<AllocatedCollateral>;
  AllocatedCollateral_filter: AllocatedCollateral_filter;
  AllocatedCollateral_orderBy: AllocatedCollateral_orderBy;
  Annihilated: ResolverTypeWrapper<Annihilated>;
  Annihilated_filter: Annihilated_filter;
  Annihilated_orderBy: Annihilated_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  CallPut: CallPut;
  CollateralLock: ResolverTypeWrapper<CollateralLock>;
  CollateralLock_filter: CollateralLock_filter;
  CollateralLock_orderBy: CollateralLock_orderBy;
  Combined: ResolverTypeWrapper<Combined>;
  Combined_filter: Combined_filter;
  Combined_orderBy: Combined_orderBy;
  Direction: Direction;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GlobalData: ResolverTypeWrapper<GlobalData>;
  GlobalDataCM: ResolverTypeWrapper<GlobalDataCM>;
  GlobalDataCM_filter: GlobalDataCM_filter;
  GlobalDataCM_orderBy: GlobalDataCM_orderBy;
  GlobalData_filter: GlobalData_filter;
  GlobalData_orderBy: GlobalData_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Liquidated: ResolverTypeWrapper<Liquidated>;
  Liquidated_filter: Liquidated_filter;
  Liquidated_orderBy: Liquidated_orderBy;
  Novated: ResolverTypeWrapper<Novated>;
  Novated_filter: Novated_filter;
  Novated_orderBy: Novated_orderBy;
  Option: ResolverTypeWrapper<Option>;
  Option_filter: Option_filter;
  Option_orderBy: Option_orderBy;
  OrderDirection: OrderDirection;
  Photon: ResolverTypeWrapper<Photon>;
  Photon_filter: Photon_filter;
  Photon_orderBy: Photon_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Strategy: ResolverTypeWrapper<Strategy>;
  Strategy_filter: Strategy_filter;
  Strategy_orderBy: Strategy_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Transferred: ResolverTypeWrapper<Transferred>;
  Transferred_filter: Transferred_filter;
  Transferred_orderBy: Transferred_orderBy;
  TrustedLocker: ResolverTypeWrapper<TrustedLocker>;
  TrustedLocker_filter: TrustedLocker_filter;
  TrustedLocker_orderBy: TrustedLocker_orderBy;
  UnallocatedCollateral: ResolverTypeWrapper<UnallocatedCollateral>;
  UnallocatedCollateral_filter: UnallocatedCollateral_filter;
  UnallocatedCollateral_orderBy: UnallocatedCollateral_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Action: ResolversParentTypes['Annihilated'] | ResolversParentTypes['Combined'] | ResolversParentTypes['Liquidated'] | ResolversParentTypes['Novated'] | ResolversParentTypes['Transferred'];
  Action_filter: Action_filter;
  AllocatedCollateral: AllocatedCollateral;
  AllocatedCollateral_filter: AllocatedCollateral_filter;
  Annihilated: Annihilated;
  Annihilated_filter: Annihilated_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  CollateralLock: CollateralLock;
  CollateralLock_filter: CollateralLock_filter;
  Combined: Combined;
  Combined_filter: Combined_filter;
  Float: Scalars['Float'];
  GlobalData: GlobalData;
  GlobalDataCM: GlobalDataCM;
  GlobalDataCM_filter: GlobalDataCM_filter;
  GlobalData_filter: GlobalData_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Liquidated: Liquidated;
  Liquidated_filter: Liquidated_filter;
  Novated: Novated;
  Novated_filter: Novated_filter;
  Option: Option;
  Option_filter: Option_filter;
  Photon: Photon;
  Photon_filter: Photon_filter;
  Query: {};
  Strategy: Strategy;
  Strategy_filter: Strategy_filter;
  String: Scalars['String'];
  Subscription: {};
  Token: Token;
  Token_filter: Token_filter;
  Transferred: Transferred;
  Transferred_filter: Transferred_filter;
  TrustedLocker: TrustedLocker;
  TrustedLocker_filter: TrustedLocker_filter;
  UnallocatedCollateral: UnallocatedCollateral;
  UnallocatedCollateral_filter: UnallocatedCollateral_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Annihilated' | 'Combined' | 'Liquidated' | 'Novated' | 'Transferred', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type AllocatedCollateralResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AllocatedCollateral'] = ResolversParentTypes['AllocatedCollateral']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  strategyID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  basis?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnnihilatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Annihilated'] = ResolversParentTypes['Annihilated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollateralLockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralLock'] = ResolversParentTypes['CollateralLock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  locker?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  basis?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiry?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CombinedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Combined'] = ResolversParentTypes['Combined']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GlobalDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GlobalData'] = ResolversParentTypes['GlobalData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralManager?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  polaron?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proton?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  electron?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  neutron?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GlobalDataCMResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GlobalDataCM'] = ResolversParentTypes['GlobalDataCM']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tfm?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralNonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  treasury?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  insuranceFund?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  web2?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  relay?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Liquidated'] = ResolversParentTypes['Liquidated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NovatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Novated'] = ResolversParentTypes['Novated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  direction?: Resolver<ResolversTypes['Direction'], ParentType, ContextType>;
  notional?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bra?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ket?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiry?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  strike?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  callput?: Resolver<ResolversTypes['CallPut'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PhotonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Photon'] = ResolversParentTypes['Photon']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  mass?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  photon?: Resolver<Maybe<ResolversTypes['Photon']>, ParentType, ContextType, RequireFields<QueryphotonArgs, 'id' | 'subgraphError'>>;
  photons?: Resolver<Array<ResolversTypes['Photon']>, ParentType, ContextType, RequireFields<QueryphotonsArgs, 'skip' | 'first' | 'subgraphError'>>;
  allocatedCollateral?: Resolver<Maybe<ResolversTypes['AllocatedCollateral']>, ParentType, ContextType, RequireFields<QueryallocatedCollateralArgs, 'id' | 'subgraphError'>>;
  allocatedCollaterals?: Resolver<Array<ResolversTypes['AllocatedCollateral']>, ParentType, ContextType, RequireFields<QueryallocatedCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unallocatedCollateral?: Resolver<Maybe<ResolversTypes['UnallocatedCollateral']>, ParentType, ContextType, RequireFields<QueryunallocatedCollateralArgs, 'id' | 'subgraphError'>>;
  unallocatedCollaterals?: Resolver<Array<ResolversTypes['UnallocatedCollateral']>, ParentType, ContextType, RequireFields<QueryunallocatedCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  globalData?: Resolver<Maybe<ResolversTypes['GlobalData']>, ParentType, ContextType, RequireFields<QueryglobalDataArgs, 'id' | 'subgraphError'>>;
  globalDatas?: Resolver<Array<ResolversTypes['GlobalData']>, ParentType, ContextType, RequireFields<QueryglobalDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  globalDataCM?: Resolver<Maybe<ResolversTypes['GlobalDataCM']>, ParentType, ContextType, RequireFields<QueryglobalDataCMArgs, 'id' | 'subgraphError'>>;
  globalDataCMs?: Resolver<Array<ResolversTypes['GlobalDataCM']>, ParentType, ContextType, RequireFields<QueryglobalDataCMsArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategy?: Resolver<Maybe<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<QuerystrategyArgs, 'id' | 'subgraphError'>>;
  strategies?: Resolver<Array<ResolversTypes['Strategy']>, ParentType, ContextType, RequireFields<QuerystrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<QueryoptionArgs, 'id' | 'subgraphError'>>;
  options?: Resolver<Array<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<QueryoptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trustedLocker?: Resolver<Maybe<ResolversTypes['TrustedLocker']>, ParentType, ContextType, RequireFields<QuerytrustedLockerArgs, 'id' | 'subgraphError'>>;
  trustedLockers?: Resolver<Array<ResolversTypes['TrustedLocker']>, ParentType, ContextType, RequireFields<QuerytrustedLockersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralLock?: Resolver<Maybe<ResolversTypes['CollateralLock']>, ParentType, ContextType, RequireFields<QuerycollateralLockArgs, 'id' | 'subgraphError'>>;
  collateralLocks?: Resolver<Array<ResolversTypes['CollateralLock']>, ParentType, ContextType, RequireFields<QuerycollateralLocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidated?: Resolver<Maybe<ResolversTypes['Liquidated']>, ParentType, ContextType, RequireFields<QueryliquidatedArgs, 'id' | 'subgraphError'>>;
  liquidateds?: Resolver<Array<ResolversTypes['Liquidated']>, ParentType, ContextType, RequireFields<QueryliquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferred?: Resolver<Maybe<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<QuerytransferredArgs, 'id' | 'subgraphError'>>;
  transferreds?: Resolver<Array<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<QuerytransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  combined?: Resolver<Maybe<ResolversTypes['Combined']>, ParentType, ContextType, RequireFields<QuerycombinedArgs, 'id' | 'subgraphError'>>;
  combineds?: Resolver<Array<ResolversTypes['Combined']>, ParentType, ContextType, RequireFields<QuerycombinedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  novated?: Resolver<Maybe<ResolversTypes['Novated']>, ParentType, ContextType, RequireFields<QuerynovatedArgs, 'id' | 'subgraphError'>>;
  novateds?: Resolver<Array<ResolversTypes['Novated']>, ParentType, ContextType, RequireFields<QuerynovatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  annihilated?: Resolver<Maybe<ResolversTypes['Annihilated']>, ParentType, ContextType, RequireFields<QueryannihilatedArgs, 'id' | 'subgraphError'>>;
  annihilateds?: Resolver<Array<ResolversTypes['Annihilated']>, ParentType, ContextType, RequireFields<QueryannihilatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionArgs, 'id' | 'subgraphError'>>;
  actions?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type StrategyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Strategy'] = ResolversParentTypes['Strategy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transferable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  bra?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ket?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  basis?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  alpha?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  omega?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiry?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wavefn?: Resolver<Maybe<Array<ResolversTypes['Option']>>, ParentType, ContextType, RequireFields<StrategywavefnArgs, 'skip' | 'first'>>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  photon?: SubscriptionResolver<Maybe<ResolversTypes['Photon']>, "photon", ParentType, ContextType, RequireFields<SubscriptionphotonArgs, 'id' | 'subgraphError'>>;
  photons?: SubscriptionResolver<Array<ResolversTypes['Photon']>, "photons", ParentType, ContextType, RequireFields<SubscriptionphotonsArgs, 'skip' | 'first' | 'subgraphError'>>;
  allocatedCollateral?: SubscriptionResolver<Maybe<ResolversTypes['AllocatedCollateral']>, "allocatedCollateral", ParentType, ContextType, RequireFields<SubscriptionallocatedCollateralArgs, 'id' | 'subgraphError'>>;
  allocatedCollaterals?: SubscriptionResolver<Array<ResolversTypes['AllocatedCollateral']>, "allocatedCollaterals", ParentType, ContextType, RequireFields<SubscriptionallocatedCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unallocatedCollateral?: SubscriptionResolver<Maybe<ResolversTypes['UnallocatedCollateral']>, "unallocatedCollateral", ParentType, ContextType, RequireFields<SubscriptionunallocatedCollateralArgs, 'id' | 'subgraphError'>>;
  unallocatedCollaterals?: SubscriptionResolver<Array<ResolversTypes['UnallocatedCollateral']>, "unallocatedCollaterals", ParentType, ContextType, RequireFields<SubscriptionunallocatedCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  globalData?: SubscriptionResolver<Maybe<ResolversTypes['GlobalData']>, "globalData", ParentType, ContextType, RequireFields<SubscriptionglobalDataArgs, 'id' | 'subgraphError'>>;
  globalDatas?: SubscriptionResolver<Array<ResolversTypes['GlobalData']>, "globalDatas", ParentType, ContextType, RequireFields<SubscriptionglobalDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  globalDataCM?: SubscriptionResolver<Maybe<ResolversTypes['GlobalDataCM']>, "globalDataCM", ParentType, ContextType, RequireFields<SubscriptionglobalDataCMArgs, 'id' | 'subgraphError'>>;
  globalDataCMs?: SubscriptionResolver<Array<ResolversTypes['GlobalDataCM']>, "globalDataCMs", ParentType, ContextType, RequireFields<SubscriptionglobalDataCMsArgs, 'skip' | 'first' | 'subgraphError'>>;
  strategy?: SubscriptionResolver<Maybe<ResolversTypes['Strategy']>, "strategy", ParentType, ContextType, RequireFields<SubscriptionstrategyArgs, 'id' | 'subgraphError'>>;
  strategies?: SubscriptionResolver<Array<ResolversTypes['Strategy']>, "strategies", ParentType, ContextType, RequireFields<SubscriptionstrategiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  option?: SubscriptionResolver<Maybe<ResolversTypes['Option']>, "option", ParentType, ContextType, RequireFields<SubscriptionoptionArgs, 'id' | 'subgraphError'>>;
  options?: SubscriptionResolver<Array<ResolversTypes['Option']>, "options", ParentType, ContextType, RequireFields<SubscriptionoptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trustedLocker?: SubscriptionResolver<Maybe<ResolversTypes['TrustedLocker']>, "trustedLocker", ParentType, ContextType, RequireFields<SubscriptiontrustedLockerArgs, 'id' | 'subgraphError'>>;
  trustedLockers?: SubscriptionResolver<Array<ResolversTypes['TrustedLocker']>, "trustedLockers", ParentType, ContextType, RequireFields<SubscriptiontrustedLockersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralLock?: SubscriptionResolver<Maybe<ResolversTypes['CollateralLock']>, "collateralLock", ParentType, ContextType, RequireFields<SubscriptioncollateralLockArgs, 'id' | 'subgraphError'>>;
  collateralLocks?: SubscriptionResolver<Array<ResolversTypes['CollateralLock']>, "collateralLocks", ParentType, ContextType, RequireFields<SubscriptioncollateralLocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidated?: SubscriptionResolver<Maybe<ResolversTypes['Liquidated']>, "liquidated", ParentType, ContextType, RequireFields<SubscriptionliquidatedArgs, 'id' | 'subgraphError'>>;
  liquidateds?: SubscriptionResolver<Array<ResolversTypes['Liquidated']>, "liquidateds", ParentType, ContextType, RequireFields<SubscriptionliquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transferred?: SubscriptionResolver<Maybe<ResolversTypes['Transferred']>, "transferred", ParentType, ContextType, RequireFields<SubscriptiontransferredArgs, 'id' | 'subgraphError'>>;
  transferreds?: SubscriptionResolver<Array<ResolversTypes['Transferred']>, "transferreds", ParentType, ContextType, RequireFields<SubscriptiontransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  combined?: SubscriptionResolver<Maybe<ResolversTypes['Combined']>, "combined", ParentType, ContextType, RequireFields<SubscriptioncombinedArgs, 'id' | 'subgraphError'>>;
  combineds?: SubscriptionResolver<Array<ResolversTypes['Combined']>, "combineds", ParentType, ContextType, RequireFields<SubscriptioncombinedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  novated?: SubscriptionResolver<Maybe<ResolversTypes['Novated']>, "novated", ParentType, ContextType, RequireFields<SubscriptionnovatedArgs, 'id' | 'subgraphError'>>;
  novateds?: SubscriptionResolver<Array<ResolversTypes['Novated']>, "novateds", ParentType, ContextType, RequireFields<SubscriptionnovatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  annihilated?: SubscriptionResolver<Maybe<ResolversTypes['Annihilated']>, "annihilated", ParentType, ContextType, RequireFields<SubscriptionannihilatedArgs, 'id' | 'subgraphError'>>;
  annihilateds?: SubscriptionResolver<Array<ResolversTypes['Annihilated']>, "annihilateds", ParentType, ContextType, RequireFields<SubscriptionannihilatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: SubscriptionResolver<Maybe<ResolversTypes['Action']>, "action", ParentType, ContextType, RequireFields<SubscriptionactionArgs, 'id' | 'subgraphError'>>;
  actions?: SubscriptionResolver<Array<ResolversTypes['Action']>, "actions", ParentType, ContextType, RequireFields<SubscriptionactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transferred'] = ResolversParentTypes['Transferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TrustedLockerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TrustedLocker'] = ResolversParentTypes['TrustedLocker']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  locker?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  trusted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnallocatedCollateralResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnallocatedCollateral'] = ResolversParentTypes['UnallocatedCollateral']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  basis?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Action?: ActionResolvers<ContextType>;
  AllocatedCollateral?: AllocatedCollateralResolvers<ContextType>;
  Annihilated?: AnnihilatedResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  CollateralLock?: CollateralLockResolvers<ContextType>;
  Combined?: CombinedResolvers<ContextType>;
  GlobalData?: GlobalDataResolvers<ContextType>;
  GlobalDataCM?: GlobalDataCMResolvers<ContextType>;
  Liquidated?: LiquidatedResolvers<ContextType>;
  Novated?: NovatedResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  Photon?: PhotonResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Strategy?: StrategyResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Transferred?: TransferredResolvers<ContextType>;
  TrustedLocker?: TrustedLockerResolvers<ContextType>;
  UnallocatedCollateral?: UnallocatedCollateralResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TfmSubgraphMumbaiTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/tfm-subgraph-mumbai/introspectionSchema":
      return import("./sources/tfm-subgraph-mumbai/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const tfmSubgraphMumbaiTransforms = [];
const additionalTypeDefs = [] as any[];
const tfmSubgraphMumbaiHandler = new GraphqlHandler({
              name: "tfm-subgraph-mumbai",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/pdemicheli/tfm-subgraph"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("tfm-subgraph-mumbai"),
              logger: logger.child("tfm-subgraph-mumbai"),
              importFn,
            });
sources[0] = {
          name: 'tfm-subgraph-mumbai',
          handler: tfmSubgraphMumbaiHandler,
          transforms: tfmSubgraphMumbaiTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: PositionsDocument,
        get rawSDL() {
          return printWithCache(PositionsDocument);
        },
        location: 'PositionsDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type positionsQueryVariables = Exact<{
  userAddress?: InputMaybe<Scalars['Bytes']>;
}>;


export type positionsQuery = { strategies: Array<(
    Pick<Strategy, 'bra' | 'ket' | 'basis' | 'expiry'>
    & { wavefn?: Maybe<Array<Pick<Option, 'id'>>> }
  )> };


export const positionsDocument = gql`
    query positions($userAddress: Bytes) {
  strategies(
    where: {and: [{deleted: false}, {or: [{alpha: $userAddress}, {omega: $userAddress}]}]}
    orderBy: expiry
    orderDirection: desc
    first: 1000
  ) {
    bra
    ket
    basis
    expiry
    wavefn {
      id
    }
  }
}
    ` as unknown as DocumentNode<positionsQuery, positionsQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    positions(variables?: positionsQueryVariables, options?: C): Promise<positionsQuery> {
      return requester<positionsQuery, positionsQueryVariables>(positionsDocument, variables, options) as Promise<positionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;