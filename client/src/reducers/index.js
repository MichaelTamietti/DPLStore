import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  user,
  flash,
  products,
  cart: cartReducer,
 
});

export default rootReducer;
