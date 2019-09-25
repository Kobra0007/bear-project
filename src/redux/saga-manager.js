import { take, fork, cancel } from 'redux-saga/effects';

import rootSaga from './sagas';

const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

class SagaManager {
  static start(sagaMiddleware) {
    const saga = SagaManager.createAbortable(rootSaga);

    sagaMiddleware.run(saga);
  }

  static cancel(store) {
    store.dispatch({ type: CANCEL_SAGAS_HMR });
  }

  static createAbortable(saga) {
    if (process.env.NODE_ENV === 'development') {
      return function* main() {
        const sagaTask = yield fork(saga);

        yield take(CANCEL_SAGAS_HMR);

        yield cancel(sagaTask);
      };
    }

    return saga;
  }
}

export default SagaManager;