import React, { Component } from 'react';
import './ItemGoodsTab.scss';

class ItemGoodsTab extends Component {
  render() {
    return (
      <nav className="itemGoodsTab">
        <ul>
          <li>
            <a href="#detail">상품상세정보</a>
          </li>
          <li>
            <a href="#delivery">배송안내</a>
          </li>
          <li>
            <a href="#exchange">교환 및 반품안내</a>
          </li>
          <li>
            <a href="#reviews">상품후기</a>
          </li>
          <li>
            <a href="#qna">상품문의</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ItemGoodsTab;
