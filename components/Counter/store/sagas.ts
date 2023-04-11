import { put, call, takeEvery } from 'redux-saga/effects';
import { COUNTER_INCREMENT_ASYNC, COUNTER_DECREMENT_ASYNC, handleIncrement, handleDecrement } from './actions';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* handleIncrementSaga() {
  yield call(delay, 100);
  yield put(handleIncrement());
  yield call(delay, 100);
  yield put(handleIncrement());
  yield call(delay, 100);
  yield put(handleIncrement());
  yield call(delay, 100);
  yield put(handleIncrement());
  yield call(delay, 100);
  yield put(handleIncrement());
}

export function* handleDecrementSaga() {
  yield call(delay, 100);
  yield put(handleDecrement());
  yield call(delay, 100);
  yield put(handleDecrement());
  yield call(delay, 100);
  yield put(handleDecrement());
  yield call(delay, 100);
  yield put(handleDecrement());
  yield call(delay, 100);
  yield put(handleDecrement());
}

export function* counterSaga() {
  yield takeEvery(COUNTER_INCREMENT_ASYNC, handleIncrementSaga);
  yield takeEvery(COUNTER_DECREMENT_ASYNC, handleDecrementSaga);
}

export type CounterSagaType = ReturnType<typeof handleIncrementSaga> | ReturnType<typeof handleDecrementSaga>;
