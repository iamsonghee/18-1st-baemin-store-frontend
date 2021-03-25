import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './Pages/Signup/Signup';
import SignupProcess from './Pages/Signup/SignupProcess';
import Productdetail from './Pages/ProductDetail/Productdetail';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
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
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  handleHeaderChange = () => {
    this.setState({
      showHeader: false,
    });
  };

  render() {
    const ARR = ['/signup', '/login'];
    console.log('showHeader:', this.state.showHeader);

    return (
      <Router>
        {this.state.showHeader ? (
          <Header handleHeaderChange={this.handleHeaderChange} />
        ) : null}
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signupprocess" component={SignupProcess} />
          <Route exact path="/productdetail" component={Productdetail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/ct/:id" component={CatProdudctList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
