import {
  ADD_PRODUCT,
} from '../actions/products'

const products = ( state = [], action ) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return [action.product, ...state]
    default:
      return state;
  }
}

export default products;
