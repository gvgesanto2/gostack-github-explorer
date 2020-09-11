import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../services/api';

// Import common data types
import { Repository } from '../common/common.types';

import {
  fetchRepositorySuccess,
  fetchRepositoryFailure,
  addRepository,
  addRepositoryFailure,
} from './explorer.actions';

import ExplorerActionTypes, {
  FetchRepositoryStartAction,
  FetchRepositorySuccessAction,
} from './explorer.types';

import { selectTmpRepositories } from './explorer.selectors';
import { inRepositories } from './explorer.utils';

export function* fetchRepositoryAsync({
  payload,
}: FetchRepositoryStartAction): Generator {
  try {
    if (!payload.includes('/')) {
      yield put(
        fetchRepositoryFailure(
          'Enter the repository in this format: "author/name".',
        ),
      );
      return;
    }

    const response: AxiosResponse<Repository> | any = yield api.get<Repository>(
      `repos/${payload}`,
    );

    const repository = response.data;

    yield put(fetchRepositorySuccess(repository));
  } catch (error) {
    const { status } = error.response ? error.response : null;

    if (status === 404) {
      yield put(fetchRepositoryFailure('Repository not found.'));
    } else {
      yield put(fetchRepositoryFailure('Error searching for this repository.'));
    }
  }
}

export function* addRepositoryStart({
  payload,
}: FetchRepositorySuccessAction): Generator {
  const repoToAdd = payload;

  const tmpRepositories: Repository[] | any = yield select(
    selectTmpRepositories,
  );

  if (inRepositories(tmpRepositories, repoToAdd)) {
    yield put(addRepositoryFailure('Repository already added.'));
  } else {
    yield put(addRepository(repoToAdd));
  }
}

export function* onFetchRepositorySuccess(): Generator {
  yield takeLatest(
    ExplorerActionTypes.FETCH_REPOSITORY_SUCCESS,
    addRepositoryStart,
  );
}

export function* onFetchRepositoryStart(): Generator {
  yield takeLatest(
    ExplorerActionTypes.FETCH_REPOSITORY_START,
    fetchRepositoryAsync,
  );
}

export function* explorerSagas(): Generator {
  yield all([call(onFetchRepositoryStart), call(onFetchRepositorySuccess)]);
}
