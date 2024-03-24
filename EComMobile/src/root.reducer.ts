import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import productsReducer from './common/reducers/products.reducer';

const ProductPersistConfig = {
  storage: AsyncStorage,
  key: 'products',
};
export default combineReducers({
  products: persistReducer(ProductPersistConfig, productsReducer),
});
