import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import ProductsList from './ProductsList/ProductsList';
import SlideBanner from './SlideBanner/SlideBanner';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <SlideBanner />
        <ProductsList />
      </div>
    );
  }
}

export default Main;
