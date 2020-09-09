import { createSelector } from 'reselect';

import { RootState } from '../../root/root.types';
import { ExplorerState } from './explorer.types';

const selectExplorer = (state: RootState) => state.explorer;

export const selectTmpRepositories = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.tmpRepositories,
);

export const selectIsRepositoryFetching = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.isFetching,
);

export const selectExplorerErrorMessage = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.errorMessage,
);
