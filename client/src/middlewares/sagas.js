import { all, call, put, takeEvery } from 'redux-saga/effects';
import delay from 'redux-saga';

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync
  ])
}


