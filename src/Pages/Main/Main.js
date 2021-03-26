import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import ProductsList from './ProductsList/ProductsList';
import SlideBanner from './SlideBanner/SlideBanner';

import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      hot_products: [],
      new_products: [],
      sale_products: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.56:8000/product/main`, {
      headers: {
        Authorization: sessionStorage.getItem('access_token')
          ? sessionStorage.getItem('access_token')
          : '',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          hot_products: res.hot_products,
          new_products: res.new_products,
          sale_products: res.sale_products,
        });
      });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main onScroll={this.handleScroll}>
        <SlideBanner />
        <div className="contents">
          {Object.keys(MAINMENU).map((menu, index) => {
            return (
              <div className="wrap" key={index}>
                <div className="title">{MAINMENU[menu]}</div>
                {index === 0 && (
                  <ProductsList
                    className="productsList"
                    productList={this.state.hot_products}
                  />
                )}
                {index === 1 && (
                  <ProductsList
                    className="productsList"
                    productList={this.state.new_products}
                  />
                )}
                {index === 2 && (
                  <ProductsList
                    className="productsList"
                    productList={this.state.sale_products}
                  />
                )}
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

const MAINMENU = { 1: '잘나가요', 2: '새로 나왔어요', 3: '할인중' };

export default Main;
