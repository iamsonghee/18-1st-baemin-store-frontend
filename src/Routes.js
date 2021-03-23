import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Pages/SignUp/Signup';
import Productdetail from './Pages/ProductDetail/Productdetail';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Order from './Pages/Order/Order';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/productdetail" component={Productdetail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
