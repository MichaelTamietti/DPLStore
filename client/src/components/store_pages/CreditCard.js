import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';
import {CardElement} from 'react-stripe-elements';


const CreditCard = () => {
  return (
    <StripeProvider apiKey="pk_test_12345">
      <CardElement style={{base: {fontSize: '18px'}}} />
    </StripeProvider>
  );
};

import CreditCardInput from 'react-credit-card-input';
 
// <CreditCardInput
//   cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
//   cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
//   cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
//   fieldClassName="input"

//   <CreditCardInput
//   cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
//     <input
//       {...props}
//       onChange={handleCardCVCChange(e => console.log('cvc change', e))}
//     />
//   )}
//   cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
//     <input
//       {...props}
//       onChange={handleCardExpiryChange(e =>
//         console.log('expiry change', e)
//       )}
//     />
//   )}
//   cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
//     <input
//       {...props}
//       onChange={handleCardNumberChange(e =>
//         console.log('number change', e)
//       )}

export default CreditCard;