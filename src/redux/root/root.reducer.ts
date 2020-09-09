import { combineReducers, Reducer } from 'redux';

import { RootState } from './root.types';
import { persistsRootReducer } from './root.utils';
import explorerReducer from '../ducks/explorer/explorer.reducer';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  explorer: explorerReducer,
});

export default persistsRootReducer(rootReducer);
