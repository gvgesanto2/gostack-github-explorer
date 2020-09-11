import { createSelector } from 'reselect';

import { RootState } from '../../root/root.types';
import { ExplorerState } from './explorer.types';

const selectExplorer = (state: RootState) => state.explorer;

export const selectTmpRepositories = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.tmpRepositories,
);

export const selectTmpRepository = (fullName: string) =>
  createSelector([selectTmpRepositories], repositories =>
    repositories.find(repository => repository.full_name === fullName),
  );

export const selectIsRepositoryFetching = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.isFetching,
);

export const selectExplorerErrorMessage = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.errorMessage,
);

export const selectExplorerHasError = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => !!explorer.errorMessage,
);

export const selectExplorerData = createSelector(
  [selectExplorer],
  (explorer: ExplorerState) => explorer.explorerData,
);

export const selectExplorerTitle = createSelector(
  [selectExplorerData],
  explorerData => explorerData.title,
);

export const selectExplorerSearchBarData = createSelector(
  [selectExplorerData],
  explorerData => explorerData.searchBar,
);

export const selectExplorerRepositoryListData = createSelector(
  [selectExplorerData],
  explorerData => explorerData.repositoryList,
);
