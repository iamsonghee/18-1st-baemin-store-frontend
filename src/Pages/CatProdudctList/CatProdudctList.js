import React, { PureComponent } from 'react';
import Header from '../../Components/Header/Header';
import Product from '../../Components/Product/Product';

class CatProdudctList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    fetch('http://172.30.1.47:8000/product/category/리빙')
      .then(res => res.json())
      .then(res => {
        console.log('******: ', res['results']);
        this.setState({ productList: res['results'] });
      });
  }
  render() {
    // console.log('********', this.state.productList);
    return (
      <div className="catProductList">
        <Header />
        <div className="productsList">
          {this.state.productList.map(product => {
            return (
              <Product
                id={product.product_id}
                productName={product.product_name}
                imgURL={product.product_thumbnail}
                discountRate={product.discount_rate}
                beforePrice={product.product_price}
                finalPrice={product.discounted_price}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    );
  }
}

export default CatProdudctList;
