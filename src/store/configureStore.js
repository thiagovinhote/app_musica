import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  /* Saga */
  const sagaMonitor = null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  /* Store */
  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  /* Run Saga */
  sagaMiddleware.run(rootSaga);

  return store;
};
