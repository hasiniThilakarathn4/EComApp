import {createSelector} from 'reselect';
import {Reducers} from '../../types';

export const productsSelector = (state: Reducers) => state.products;

export const getCartSelector = createSelector(
  productsSelector,
  products => products?.cartItems,
);

export const getProductsSelector = createSelector(
  productsSelector,
  products => products?.products,
);
