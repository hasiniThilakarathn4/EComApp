import {CartItemType, ProductReducer} from '../../types';
import {ACTIONS} from '../actions/actionTypes';

const INITIAL_STATE: ProductReducer = {
  cartItems: [],
  products: [],
};

export default (
  state = INITIAL_STATE,
  {type, payload}: {type: string; payload: any},
): ProductReducer => {
  switch (type) {
    case ACTIONS.SET_CART_ITEMS:
      const exists = state.cartItems.find(
        (item: CartItemType) => item?.id === payload?.id,
      );
      if (exists) {
        return {
          ...state,
          cartItems: state?.cartItems.map(item =>
            item?.id === payload?.id
              ? {...item, ItemCount: (item?.ItemCount || 0) + 1}
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, {...payload, ItemCount: 1}],
        };
      }
    case ACTIONS.SET_PRODUCT_DATA:
      return {
        ...state,
        products: payload,
      };
    case ACTIONS.INCREMENT_ITEM_COUNT:
      return {
        ...state,
        cartItems: state?.cartItems.map(item =>
          item?.id === payload?.id
            ? {...item, ItemCount: (item?.ItemCount || 0) + 1}
            : item,
        ),
      };
    case ACTIONS.DECREMENT_ITEM_COUNT:
      return {
        ...state,
        cartItems: state?.cartItems.map(item =>
          item?.id === payload.id
            ? {...item, ItemCount: Math.max((item?.ItemCount || 0) - 1, 0)}
            : item,
        ),
      };
    default:
      return state;
  }
};
