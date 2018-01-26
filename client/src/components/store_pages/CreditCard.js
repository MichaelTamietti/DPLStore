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

export default CreditCard;