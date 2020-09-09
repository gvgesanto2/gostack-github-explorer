import { Reducer, Action } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { Repository, ExplorerState, ExplorerActions } from './explorer.types';

const explorerPersistConfig = {
  key: 'explorer',
  storage,
  whitelist: ['tmpRepositories'],
};

export function persistTmpRepositories(
  explorerReducer: Reducer<ExplorerState>,
): Reducer<ExplorerState & PersistPartial, Action<ExplorerActions>> {
  return persistReducer<ExplorerState>(explorerPersistConfig, explorerReducer);
}

export function inRepositories(
  repositories: Repository[],
  { id }: Repository,
): boolean {
  const reposIds = repositories.map(repo => repo.id);

  return reposIds.includes(id);
}
