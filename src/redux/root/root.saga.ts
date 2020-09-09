import { all, call } from 'redux-saga/effects';

import { explorerSagas } from '../ducks/explorer/explorer.sagas';

export default function* rootSaga(): Generator {
  yield all([call(explorerSagas)]);
}
