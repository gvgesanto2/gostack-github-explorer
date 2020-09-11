import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../services/api';

// Import common data types
import { Repository, Issue } from '../common/common.types';

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

    const [repositoryRes, issuesRes]:
      | AxiosResponse<Repository>
      | any = yield Promise.all([
        api.get<Repository>(`repos/${payload}`),
        api.get<Issue[]>(`repos/${payload}/issues`),
      ]);

    const issues = issuesRes.data;
    const {
      id,
      full_name,
      description,
      owner: { login, avatar_url },
      watchers_count,
      stargazers_count,
      forks_count,
      open_issues_count,
    } = repositoryRes.data;

    const repository: Repository = {
      id,
      full_name,
      description,
      owner: { login, avatar_url },
      watchers_count,
      stargazers_count,
      forks_count,
      open_issues_count,
      issues: [],
    };

    // id: number;
    // title: string;
    // html_url: string;
    // user: {
    //   login: string;
    // };

    for (let i = 0; i < 10; i++) {
      if (i >= repository.open_issues_count) {
        break;
      } else {
        const {
          id,
          title,
          html_url,
          user: { login },
        } = issues[i];
        repository.issues.push({
          id,
          title,
          html_url,
          user: { login },
        });
      }
    }

    console.log('@@SAGA - repository: ', repository);

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
