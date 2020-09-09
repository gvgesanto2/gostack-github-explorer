import { PersistPartial } from 'redux-persist/es/persistReducer';

import {
  ExplorerState,
  ExplorerActions,
} from '../ducks/explorer/explorer.types';

// Root State Type
export interface RootState {
  explorer: ExplorerState & PersistPartial;
}

// Root Action Type
export type RootAction = ExplorerActions;
