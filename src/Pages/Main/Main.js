import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import ProductsList from './ProductsList/ProductsList';

class Main extends Component {
  render() {
    return (
      <div>
        <Header /> main
        <ProductsList />
      </div>
    );
  }
}

export default Main;
