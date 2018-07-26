import React, { Component } from 'react';
import NoMatch from './shared/NoMatch';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Products from './store_pages/Products';
import Cart from './store_pages/Cart';
import Checkout from './store_pages/Checkout';
import Contact from './store_pages/Contact';
import Dashboard from './admin_pages/Dashboard';
import FetchProducts from './admin_pages/FetchProducts';
import Orders from './admin_pages/Orders';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/contact' component={Contact} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/admin-products' component={FetchProducts} />
            <ProtectedRoute exact path='/orders' component={Orders} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
