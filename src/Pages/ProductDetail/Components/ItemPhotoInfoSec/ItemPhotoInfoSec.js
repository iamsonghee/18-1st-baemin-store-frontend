import React, { Component } from 'react';
import OptionArea from './Components/OptionArea';
import './ItemPhotoInfoSec.scss';

class ItemPhotoInfoSec extends Component {
  render() {
    return (
      <div className="itemPhotoInfoSec">
        <div className="itemPhotoViewBox">
          <img
            src="https://store.baemin.com/data/goods/20/10/44/321/321_detail_034.png"
            alt="제품명 의 이미지"
          />
        </div>
        <div className="itemInfoBox">
          <h3>을지로에서 만든 은수저</h3>
          <div className="itemDetailList">
            <dl className="itemPrice">
              <dt>판매가격</dt>
              <dd>
                <strong>12,000,000</strong>원
              </dd>
            </dl>
            <dl className="itemDelivery">
              <dt>배송정보</dt>
              <dd>
                <strong>0원</strong>
                <span>(3만원 이상 구매 시 무료)</span>
                <p>오후 2시 당일배송마감</p>
              </dd>
            </dl>
          </div>
          <OptionArea />
          <div className="itemPriceContainer">
            <dl className="totalAmount">
              <dt>총 합계금액</dt>
              <dd>
                <strong class="totalPrice">
                  12,000,000<b>원</b>
                </strong>
              </dd>
            </dl>
          </div>
          <div className="btnChoiceBox">
            <button id="wishBtn" />
            <button id="cartBtn">장바구니</button>
            <button id="orderBtn">바로 구매</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhotoInfoSec;
