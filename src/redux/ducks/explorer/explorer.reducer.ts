import { Reducer } from 'redux';

import ExplorerActionTypes, { ExplorerState } from './explorer.types';
import { persistTmpRepositories } from './explorer.utils';

const INITIAL_STATE: ExplorerState = {
  tmpRepositories: [],
  isFetching: false,
  errorMessage: null,
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
    default:
      return state;
  }
};

export default persistTmpRepositories(explorerReducer);
