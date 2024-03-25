import {ACTIONS} from '../actions/actionTypes';
import {call, put, takeLeading} from 'redux-saga/effects';
import ProductAPI from '../api/products.api';

function* getProductData() {
  try {
    const response = yield call(ProductAPI.getProductData);
    yield put({type: ACTIONS.SET_PRODUCT_DATA, payload: response.data.data});
  } catch (error) {
    console.log('Failed to fetch product data', error);
  }
}

export default function* productSaga() {
  yield takeLeading(ACTIONS.GET_PRODUCT_DATA, getProductData);
}
