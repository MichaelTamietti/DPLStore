// import react from 'react';
// import { setFlash } from './flash';
// import { setHeaders } from './headers';
// import axios from 'axios';

// export const SEND_MESSAGE = 'SEND_MESSAGE';

// export const sendMessage = (contact) => {
//   return (dispatch) => {
//     axios.post(`/contacts`, { contact })
//       .then(({ data, headers }) => {
//         dispatch({ type: SEND_MESSAGE, contact: data, headers });
//       })
//       .catch(err => {
//         const errMessage = err.response.data.errors;
//         dispatch(setHeaders(err.headers));
//         dispatch(setFlash(errMessage, 'red'));
//       })
//   }
// }
