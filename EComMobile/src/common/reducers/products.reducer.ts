import {CartItemType, ProductReducer} from '../../types';
import {ACTIONS} from '../actions/actionTypes';

const INITIAL_STATE: ProductReducer = {
  cartItems: [],
  itemCount: 0,
  products: [],
};

export default (
  state = INITIAL_STATE,
  {type, payload}: {type: string; payload: any},
): any => {
  switch (type) {
    case ACTIONS.SET_CART_ITEMS:
      const exists = state.cartItems.find(
        (item: CartItemType) => item.id === payload.id,
      );
      if (exists) {
        return {
          ...state,
          itemCount: {...(state.itemCount + 1)},
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
        };
      }
    case ACTIONS.SET_PRODUCT_DATA:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
