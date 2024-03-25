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
export interface ProductItemType {
  stockStatus: string;
  description: string;
  brandName: string;
  id: string;
  name: string;
  mainImage: string;
  price: ProductPriceType;
  colour: string;
  SKU: string;
  sizes: string[];
}

export interface CartItemType extends ProductItemType {
  selectedSize: string;
  ItemCount?: number;
}

export type ProductPriceType = {
  amount: string;
  currency: string;
};

export type ProductReducer = {
  cartItems: CartItemType[];
  products: ProductItemType[];
};

export type Reducers = {
  products: ProductReducer;
};
