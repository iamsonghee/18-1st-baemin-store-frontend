import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Pages/Signup/Signup';
<<<<<<< HEAD
import Productdetail from './Pages/ProductDetail/Productdetail';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Order from './Pages/Order/Order';
=======
import SignupProcess from './Pages/Signup/SignupProcess';
import Productdetail from './Pages/ProductDetail/Productdetail';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import CatProdudctList from './Pages/CatProdudctList/CatProdudctList';
>>>>>>> master

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signupprocess" component={SignupProcess} />
          <Route exact path="/productdetail" component={Productdetail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
<<<<<<< HEAD
          <Route exact path="/order" component={Order} />
=======
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/ct/:id" component={CatProdudctList} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
