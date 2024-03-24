import {CartItemType, ProductItemType} from '../../types';
import {ACTIONS} from './actionTypes';

export const getProductData = () => ({
  type: ACTIONS.GET_PRODUCT_DATA,
});

export const setProductData = (payload: ProductItemType) => ({
  type: ACTIONS.SET_PRODUCT_DATA,
  payload,
});

export const setCartItems = (payload: CartItemType) => ({
  type: ACTIONS.SET_CART_ITEMS,
  payload,
});
