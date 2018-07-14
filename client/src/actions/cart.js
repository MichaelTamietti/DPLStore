
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';

export function addToCart({id, title, description, price, quantity=1, images}) {
    return {
        type: ADD_TO_CART,
        payload: {id, title, description, price, quantity, images}
    }
}
export function deleteFromCart({id}) {
    return {
        type: DELETE_FROM_CART,
        payload: {id}
    }
}
export function updateItemQuantity({id, quantity}) {
    return {
        type: UPDATE_ITEM_QUANTITY,
        payload: {id, quantity}
    }
}

export default function cartReducer(state=[], action={}) {
  switch(action.type) {
      case ADD_TO_CART:
          let existingIndex = findProductIndex(state, action.payload.id);
          if (existingIndex !== -1) {
              state[existingIndex].quantity += 1;
              return state.concat([]);
          }
          return state.concat(action.payload);

      case UPDATE_ITEM_QUANTITY:
          let existingItemIndex = findProductIndex(state, action.payload.id);
          if (state[existingItemIndex].quantity === 0 && action.payload.quantity === -1) {
              break;
          }
          state[existingItemIndex].quantity += action.payload.quantity;
          return state.concat([]);

      case DELETE_FROM_CART:
          let indexToDel = findProductIndex(state, action.payload.id);
          return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
  }

  function findProductIndex(products, id) {
      return products.findIndex((p) => p.id === id)
  }

  return state;
}