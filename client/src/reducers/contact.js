import {
  SEND_MESSAGE,
} from '../actions/messages'

const messages = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [action.contact, ...state]
    default:
      return state;
  }
}

export default messages;