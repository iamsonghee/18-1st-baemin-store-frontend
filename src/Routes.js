import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Pages/Signup/Signup';
import SignupProcess from './Pages/Signup/SignupProcess';
import Productdetail from './Pages/ProductDetail/Productdetail';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Wishlist from './Pages/Wishlist/Wishlist';
import CatProdudctList from './Pages/CatProdudctList/CatProdudctList';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: true,
    };
  }

  handleHeaderChange = () => {
    this.setState({
      showHeader: false,
    });
  };

  render() {
    return (
      <Router>
        {/* {this.state.showHeader ? (
          <Header handleHeaderChange={this.handleHeaderChange} />
        ) : null} */}
        <Header />
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signupprocess" component={SignupProcess} />
          <Route exact path="/productdetail" component={Productdetail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/ct/:id" component={CatProdudctList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
