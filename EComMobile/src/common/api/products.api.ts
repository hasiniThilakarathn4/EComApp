import axios from 'axios';
import {ENDPOINTS} from '../constants/endpoints';

export default class ProductAPI {
  static getProductData = async () =>
    await axios.get(ENDPOINTS.GET_PRODUCT_DETAILS);
}
