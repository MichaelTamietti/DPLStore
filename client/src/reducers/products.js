import {
  ADD_PRODUCT,
  GET_PRODUCT,
} from '../actions/products'

const products = ( state = [], action ) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return [action.product, ...state]
    case GET_PRODUCT:
      return [...action.products]  
    default:
      return state;
  }
}

export default products;