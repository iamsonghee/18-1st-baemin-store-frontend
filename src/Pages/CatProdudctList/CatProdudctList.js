import React, { PureComponent } from 'react';
import Header from '../../Components/Header/Header';
import Product from '../../Components/Product/Product';
import './CatProdudctList.scss';
class CatProdudctList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    const category = this.props.match.params.id;
    fetch('http://localhost:3000/data/products.json')
      // fetch(`http://10.58.2.56:8000/product/category/${category}`)
      .then(res => res.json())
      .then(res => {
        console.log('******: ', res['results']);
        this.setState({ productList: res });
        // this.setState({ productList: res['results'] });
      });
  }
  render() {
    console.log('CartProduct this.props : ', this.props.match);
    console.log('********', this.state.productList);
    return (
      <div className="catProductList">
        <Header />
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
                // id={product.product_id}
                // productName={product.product_name}
                // imgURL={product.product_thumbnail}
                // discountRate={product.discount_rate}
                // beforePrice={product.product_price}
                // finalPrice={product.discounted_price}
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
