import { Reducer } from 'redux';

import explorerData from './explorer.data';
import ExplorerActionTypes, { ExplorerState } from './explorer.types';

import {
  persistTmpRepositories,
  removeRepositoryFromList,
} from './explorer.utils';

const INITIAL_STATE: ExplorerState = {
  tmpRepositories: [],
  isFetching: false,
  errorMessage: null,
  explorerData,
};

const explorerReducer: Reducer<ExplorerState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ExplorerActionTypes.FETCH_REPOSITORY_START:
      return {
        ...state,
        isFetching: true,
      };
    case ExplorerActionTypes.FETCH_REPOSITORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ExplorerActionTypes.ADD_REPOSITORY:
      return {
        ...state,
        isFetching: false,
        tmpRepositories: [...state.tmpRepositories, action.payload],
        errorMessage: null,
      };
    case ExplorerActionTypes.FETCH_REPOSITORY_FAILURE:
    case ExplorerActionTypes.ADD_REPOSITORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ExplorerActionTypes.REMOVE_REPOSITORY:
      return {
        ...state,
        errorMessage: null,
        tmpRepositories: removeRepositoryFromList(
          state.tmpRepositories,
          action.payload,
        ),
      };
    default:
      return state;
  }
};

export default persistTmpRepositories(explorerReducer);
