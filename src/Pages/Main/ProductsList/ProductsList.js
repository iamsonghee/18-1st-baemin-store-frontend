import React, { Component } from 'react';
import Product from '../../../Components/Product/Product';
import './ProductsList.scss';
class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/products.json')
      .then(res => res.json())
      .then(res => this.setState({ productList: res }));
  }
  render() {
    console.log(this.state.productList);
    return (
      <div className="productsList">
        {this.state.productList.map(product => {
          return (
            <Product
              id={product.id}
              productName={product.productName}
              imgURL={product.imgURL}
              isSale={product.isSale}
              isBest={product.isBest}
              isNew={product.isNew}
              isJjim={product.isJjim}
              discountRate={product.discountRate}
              beforePrice={product.beforePrice}
              finalPrice={product.finalPrice}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsList;
