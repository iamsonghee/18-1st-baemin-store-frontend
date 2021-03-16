import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <product>
        <div className="item">
          <div className="itemImgBox">
            <img
              src="https://store.baemin.com/data/goods/20/10/44/311/311_detail_02.jpg"
              alt="camera"
            />
            <div className="itemTags">
              <span className="sale">SALE</span>
              <span className="best">BEST</span>
              <span className="new">NEW</span>
            </div>
          </div>
          <div className="itemInfo">
            <div className="discountRate">20%</div>
            <div className="itemName">을지로 일회용캬메라. 잘 나왔다</div>
            <div className="itemBeforePrice">
              19,000<span>원</span>
            </div>
            <div className="itemFinalPrice">
              15,200<span>원</span>
            </div>
          </div>
        </div>
      </product>
    );
  }
}

export default Product;
