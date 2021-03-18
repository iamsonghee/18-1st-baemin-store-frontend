import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Product.scss';

class Product extends Component {
  goToDetail = () => {
    this.props.history.push('/productdetail');
  };
  render() {
    console.log('********Product :', this.props);
    return (
      <div className="product">
        <div className="item">
          <div className="itemImgBox" onClick={this.goToDetail}>
            <img
              src="https://lifearchive.co.kr/wp-content/uploads/2020/01/1000x1500_01-1.jpg"
              alt="camera"
            />
            <div className="itemTags">
              <span className="sale show">SALE</span>
              <span className="best">BEST</span>
              <span className="new show">NEW</span>
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
            <div className="discountRate">
              20<span>%</span>
            </div>
            <div className="itemName">을지로 일회용캬메라. 잘 나왔다</div>
            <div className="itemBeforePrice">
              19,000<span>원</span>
            </div>
            <div className="itemFinalPrice">
              15,200<span>원</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
