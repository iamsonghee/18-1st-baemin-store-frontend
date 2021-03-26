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
    window.scrollTo(0, 0);
  }

  handleFetch() {
    const category = this.props.match.params.id;
    fetch(`http://10.58.2.56:8000/product/category/${category}`, {
      headers: {
        Authorization: sessionStorage.getItem('access_token')
          ? sessionStorage.getItem('access_token')
          : '',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res['results'] });
      });
  }

  render() {
    return (
      <div className="catProductList">
        <div className="wrap">
          <div className="productsList">
            {this.state.productList?.map((product, index) => {
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
        </div>
      </div>
    );
  }
}

export default CatProdudctList;
