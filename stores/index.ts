import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counterReducer from '@components/Counter/store/reducer';
import { counterSaga } from '@components/Counter/store/sagas';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export function* rootSagas() {
  yield all([counterSaga()]);
}
