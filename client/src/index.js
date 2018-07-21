import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {StripeProvider} from 'react-stripe-elements';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_jvV45p6XMVvkhxHAzGfr7iHN">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
