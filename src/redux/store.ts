import { createStore, applyMiddleware, Store, Action } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root/root.reducer';
import { RootState, RootAction } from './root/root.types';
import rootSaga from './root/root.saga';
import sagaMiddleware from './middleware/saga';

type Middleware = Array<typeof sagaMiddleware | typeof logger>;

export type AppState = ReturnType<typeof rootReducer>;

const middleware: Middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store: Store<RootState, Action<RootAction>> = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
