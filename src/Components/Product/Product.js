import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      isJjim: false,
    };
  }
  goToDetail = () => {
    this.props.history.push('/productdetail');
  };
  handleJjim = () => {
    this.setState({
      isJjim: !this.state.isJjim,
    });
  };
  render() {
    const {
      imgURL,
      isSale,
      isBest,
      isNew,
      discountRate,
      productName,
      beforePrice,
      finalPrice,
      stockCount,
    } = this.props;

    const { isJjim } = this.state;
    return (
      <div className="product">
        <div className="item">
          <div className="itemImgBox">
            <div className="img" onClick={this.goToDetail}>
              <div className="scale">
                <img src={imgURL} alt="camera" />
              </div>
            </div>
            <div className="itemTags">
              <span className={'sale ' + (isSale && 'show')}>SALE</span>
              <span className={'best ' + (isBest && 'show')}>BEST</span>
              <span className={'new ' + (isNew && 'show')}>NEW</span>
            </div>
            <div className="likeOrCart">
              <div className="buttons">
                <button>
                  <i
                    className={'far fa-heart ' + (isJjim && 'fas')}
                    onClick={this.handleJjim}
                  />
                </button>
                <button>
                  <i className="fas fa-cart-plus" />
                </button>
              </div>
            </div>
            <div className="soldout">다 팔렸어요</div>
          </div>
          <div className="itemInfo">
            <div className={'discountRate ' + (discountRate < 1 && 'none')}>
              {discountRate}
              <span>%</span>
            </div>
            <div className="itemName">{productName}</div>
            <div className={'itemBeforePrice ' + (discountRate < 1 && 'none')}>
              {beforePrice.toLocaleString()}
              <span>원</span>
            </div>
            <div className="itemFinalPrice">
              {finalPrice.toLocaleString()}
              <span>원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
