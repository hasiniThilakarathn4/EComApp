import {all} from 'redux-saga/effects';
import productSaga from './common/sagas/products.saga';

export default function* rootSaga() {
  yield all([productSaga()]);
}
