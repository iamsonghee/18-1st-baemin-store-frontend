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
          {Object.keys(MAINMENU).map(menu => {
            return (
              // console.log('menumenumenumenu: ', MAINMENU[menu]);
              <div className="wrap">
                <div className="title">{MAINMENU[menu]}</div>
                <ProductsList className="productsList" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const MAINMENU = { 1: '잘나가요', 2: '새로 나왔어요', 3: '할인중' };

export default Main;
