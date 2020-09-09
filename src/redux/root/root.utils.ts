import { Reducer, Action } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { RootState, RootAction } from './root.types';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export function persistsRootReducer(
  rootReducer: Reducer<RootState>,
): Reducer<RootState & PersistPartial, Action<RootAction>> {
  return persistReducer<RootState>(rootPersistConfig, rootReducer);
}
