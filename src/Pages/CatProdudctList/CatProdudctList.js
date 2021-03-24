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
    this.handleFetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.handleFetch();
    }
  }

  handleFetch() {
    const category = this.props.match.params.id;
    fetch(`http://10.58.2.56:8000/product/category/${category}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res['results'] });
      });
  }

  render() {
    // console.log('CartProduct this.props : ', this.props.match);
    // console.log('this.state.productList : ', this.state.productList);
    return (
      <div className="catProductList">
        <Header />
        <div className="wrap">
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
                  stockCount={product.stock}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CatProdudctList;
