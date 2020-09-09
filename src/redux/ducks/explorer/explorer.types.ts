import { Action } from 'redux';

// Data Types
export interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// State Type
export interface ExplorerState {
  readonly tmpRepositories: Repository[];
  readonly isFetching: boolean;
  readonly errorMessage?: string | null;
}

// Action Types
// eslint-disable-next-line no-shadow
enum ExplorerActionTypes {
  FETCH_REPOSITORY_START = '@@explorer/FETCH_REPOSITORY_START',
  FETCH_REPOSITORY_SUCCESS = '@@explorer/FETCH_REPOSITORY_SUCCESS',
  FETCH_REPOSITORY_FAILURE = '@@explorer/FETCH_REPOSITORY_FAILURE',
  ADD_REPOSITORY = '@@explorer/ADD_REPOSITORY',
  ADD_REPOSITORY_FAILURE = '@@explorer/ADD_REPOSITORY_FAILURE',
}

// Fetch Repository
// export const FETCH_REPOSITORY_START = '@@explorer/FETCH_REPOSITORY_START';
// export const FETCH_REPOSITORY_SUCCESS = '@@explorer/FETCH_REPOSITORY_SUCCESS';
// export const FETCH_REPOSITORY_FAILURE = '@@explorer/FETCH_REPOSITORY_FAILURE';

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
// export const ADD_REPOSITORY = '@@explorer/ADD_REPOSITORY';
// export const ADD_REPOSITORY_FAILURE = '@@explorer/ADD_REPOSITORY_FAILURE';

export interface AddRepositoryAction extends Action {
  type: typeof ExplorerActionTypes.ADD_REPOSITORY;
  payload: Repository;
}

export interface AddRepositoryFailureAction extends Action {
  type: typeof ExplorerActionTypes.ADD_REPOSITORY_FAILURE;
  payload: string;
}

// All Actions Types
export type ExplorerActions =
  | FetchRepositoryStartAction
  | FetchRepositorySuccessAction
  | FetchRepositoryFailureAction
  | AddRepositoryAction
  | AddRepositoryFailureAction;

export default ExplorerActionTypes;
