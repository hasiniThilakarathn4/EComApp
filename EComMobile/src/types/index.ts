import SCREENS from '../screens';

export type StackParams = {
  [SCREENS.HOME_SCREEN]: {};
  [SCREENS.ITEM_DETAIL_SCREEN]: ItemDetailScreenParams;
  [SCREENS.CART_SCREEN]: {};
  [SCREENS.TAB_MENU]: {};
};
export type ItemDetailScreenParams = {
  item: ProductItemType;
};
export interface ProductItemType extends CartItemType {
  sizes: string[];
  stockStatus: string;
  description: string;
  SKU: string;
  brandName: string;
}

export interface CartItemType {
  id: string;
  name: string;
  mainImage: string;
  price: ProductPriceType;
  colour: string;
  selectedSize: string;
}

export type ProductPriceType = {
  amount: string;
  currency: string;
};

export type ProductReducer = {
  cartItems: any;
  itemCount: any;
  products: ProductItemType[];
};

export type Reducers = {
  products: ProductReducer;
};
