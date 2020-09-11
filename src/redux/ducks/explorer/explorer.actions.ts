import { ActionCreator } from 'redux';

import { Repository } from '../common/common.types';

import ExplorerActionTypes, {
  FetchRepositoryStartAction,
  FetchRepositorySuccessAction,
  FetchRepositoryFailureAction,
  AddRepositoryAction,
  AddRepositoryFailureAction,
  RemoveRepositoryAction,
} from './explorer.types';

// Fetch Repository Action Creators
export const fetchRepositoryStart: ActionCreator<FetchRepositoryStartAction> = (
  repoFullName: string,
) => ({
  type: ExplorerActionTypes.FETCH_REPOSITORY_START,
  payload: repoFullName,
});

export const fetchRepositorySuccess: ActionCreator<FetchRepositorySuccessAction> = (
  repository: Repository,
) => ({
  type: ExplorerActionTypes.FETCH_REPOSITORY_SUCCESS,
  payload: repository,
});

export const fetchRepositoryFailure: ActionCreator<FetchRepositoryFailureAction> = (
  errorMessage: string,
) => ({
  type: ExplorerActionTypes.FETCH_REPOSITORY_FAILURE,
  payload: errorMessage,
});

// Add Repository Action Creators
export const addRepository: ActionCreator<AddRepositoryAction> = (
  repository: Repository,
) => ({
  type: ExplorerActionTypes.ADD_REPOSITORY,
  payload: repository,
});

export const addRepositoryFailure: ActionCreator<AddRepositoryFailureAction> = (
  errorMessage: string,
) => ({
  type: ExplorerActionTypes.ADD_REPOSITORY_FAILURE,
  payload: errorMessage,
});

// Remove Repository Action Creator
export const removeRepository: ActionCreator<RemoveRepositoryAction> = (
  repositoryId: number,
) => ({
  type: ExplorerActionTypes.REMOVE_REPOSITORY,
  payload: repositoryId,
});
