import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Product.scss';

class Product extends Component {
  goToDetail = () => {
    this.props.history.push('/productdetail');
  };
  render() {
    console.log('this.props.discountRate:', typeof this.props.discountRate);

    return (
      <div className="product">
        <div className="item">
          <div className="itemImgBox" onClick={this.goToDetail}>
            <div className="img">
              <div className="scale">
                <img src={this.props.imgURL} alt="camera" />
              </div>
            </div>
            <div className="itemTags">
              <span className={'sale ' + (this.props.isSale && 'show')}>
                SALE
              </span>
              <span className={'best ' + (this.props.isBest && 'show')}>
                BEST
              </span>
              <span className={'new ' + (this.props.isNew && 'show')}>NEW</span>
            </div>
            <div className="likeOrCart">
              <div className="buttons">
                <button>
                  <i className="far fa-heart"></i>
                </button>
                <button>
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="itemInfo">
            <div
              className={
                'discountRate ' + (this.props.discountRate < 1 && 'none')
              }
            >
              {this.props.discountRate}
              <span>%</span>
            </div>
            <div className="itemName">{this.props.productName}</div>
            <div
              className={
                'itemBeforePrice ' + (this.props.discountRate < 1 && 'none')
              }
            >
              {this.props.beforePrice}
              <span>원</span>
            </div>
            <div className="itemFinalPrice">
              {this.props.finalPrice}
              <span>원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
