import {
  ADD_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/products'

const products = ( state = [], action ) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return [action.product, ...state]
    case GET_PRODUCT:
      return [...action.products]
    case DELETE_PRODUCT:
      return state.filter( c => c.id !== action.id )
    default:
      return state;
  }
}

export default products;
