import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import ProductsList from './ProductsList/ProductsList';
import SlideBanner from './SlideBanner/SlideBanner';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main" onScroll={this.handleScroll}>
        <Header />
        <SlideBanner />
        <div className="contents">
          <div className="wrap">
            <div className="title">잘나가요</div>
            <ProductsList className="productsList" />
          </div>
          <div className="wrap">
            <div className="title">새로 나왔어요</div>
            <ProductsList className="productsList" />
          </div>
          <div className="wrap">
            <div className="title">할인중</div>
            <ProductsList className="productsList" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
