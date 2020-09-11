import { Action } from 'redux';

// Import common data types
import { Repository } from '../common/common.types';

// Data Types
export interface SearchBarData {
  searchButtonText: string;
  placeholder: string;
}

export interface RepositoryListData {
  emptyListMsg: string;
  baseLinkUrl: string;
}

export interface ExplorerData {
  title: string;
  searchBar: SearchBarData;
  repositoryList: RepositoryListData;
}

// State Type
export interface ExplorerState {
  readonly tmpRepositories: Repository[];
  readonly isFetching: boolean;
  readonly errorMessage?: string | null;
  readonly explorerData: ExplorerData;
}

// Action Types
// eslint-disable-next-line no-shadow
enum ExplorerActionTypes {
  FETCH_REPOSITORY_START = '@@explorer/FETCH_REPOSITORY_START',
  FETCH_REPOSITORY_SUCCESS = '@@explorer/FETCH_REPOSITORY_SUCCESS',
  FETCH_REPOSITORY_FAILURE = '@@explorer/FETCH_REPOSITORY_FAILURE',
  ADD_REPOSITORY = '@@explorer/ADD_REPOSITORY',
  ADD_REPOSITORY_FAILURE = '@@explorer/ADD_REPOSITORY_FAILURE',
  REMOVE_REPOSITORY = '@@explorer/REMOVE_REPOSITORY',
}

// Fetch Repository
export interface FetchRepositoryStartAction extends Action {
  type: typeof ExplorerActionTypes.FETCH_REPOSITORY_START;
  payload: string;
}

export interface FetchRepositorySuccessAction extends Action {
  type: typeof ExplorerActionTypes.FETCH_REPOSITORY_SUCCESS;
  payload: Repository;
}

export interface FetchRepositoryFailureAction extends Action {
  type: typeof ExplorerActionTypes.FETCH_REPOSITORY_FAILURE;
  payload: string;
}

// Add Repository
export interface AddRepositoryAction extends Action {
  type: typeof ExplorerActionTypes.ADD_REPOSITORY;
  payload: Repository;
}

export interface AddRepositoryFailureAction extends Action {
  type: typeof ExplorerActionTypes.ADD_REPOSITORY_FAILURE;
  payload: string;
}

// Remove Repository
export interface RemoveRepositoryAction extends Action {
  type: typeof ExplorerActionTypes.REMOVE_REPOSITORY;
  payload: number;
}

// All Actions
export type ExplorerActions =
  | FetchRepositoryStartAction
  | FetchRepositorySuccessAction
  | FetchRepositoryFailureAction
  | AddRepositoryAction
  | AddRepositoryFailureAction;

export default ExplorerActionTypes;
