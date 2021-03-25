import React, { Component } from 'react';
import Product from '../../../Components/Product/Product';
import './ProductsList.scss';

class ProductsList extends Component {
  render() {
    return (
      <div className="productsList">
        {this.props.productList?.map((product, index) => {
          return (
            <Product
              key={index}
              id={product.product_id}
              productName={product.product_name}
              imgURL={product.product_thumbnail}
              isBest={product.is_best === 1 ? true : false}
              isNew={product.is_new === 1 ? true : false}
              isSale={product.is_sale === 1 ? true : false}
              isJjim={product.is_in_wishlist === 1 ? true : false}
              discountRate={product.discount_rate}
              beforePrice={product.product_price}
              finalPrice={product.discounted_price}
              stockCount={product.stock}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsList;
