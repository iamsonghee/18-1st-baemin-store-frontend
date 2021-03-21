import React, { Component } from 'react';
import './Cart.scss';
import CartItem from './CartItem';
import product1 from './product1.JPG';

class Cart extends Component {
  render() {
    return (
      <div className="cartComponent">
        <div className="orderWrap">
          <div className="orderTitle">
            <h2>장바구니</h2>
            <ol>
              <li className="pageOn">
                <span>01</span>
                장바구니
                <span>
                  ▶
                  <img src="" />
                </span>
              </li>
              <li>
                <span>02</span>
                주문서작성/결제
                <span>
                  ▶
                  <img src="" />
                </span>
              </li>
              <li className="pageOn">
                <span>03</span>
                주문완료
                <span>
                  <img src="" />
                </span>
              </li>
            </ol>
          </div>
          <div className="cartContent">
            <form id="formCart" method="POST">
              <div className="cartContentList">
                <div className="orderTable">
                  <colgroup>
                    <col style={{ width: '3%' }}></col>
                    <col></col>
                    <col style={{ width: '5%' }}></col>
                    <col style={{ width: '10%' }}></col>
                    <col style={{ width: '13%' }}></col>
                    <col style={{ width: '10%' }}></col>
                    <col style={{ width: '10%' }}></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <div className="formElement">
                          <input type="checkbox" />
                          <label></label>
                        </div>
                      </th>
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>상품 금액</th>
                      {/* <th class="dn">할인/적립</th>
                      <th class="dn">합계금액</th> */}
                      <th>배송비</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartItem rowspan={4} />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </tbody>
                </div>
              </div>
            </form>
            <div className="btnContinue">
              <a>
                <em> &lt; 쇼핑 계속하기</em>
              </a>
            </div>
            <div className="priceSum">
              <div className="priceSumContent">
                <dl className="dl1">
                  <dt>
                    총<strong>2</strong>개의 상품금액
                  </dt>
                  <dd>
                    <strong>34,900</strong>원
                  </dd>
                </dl>
                <span>
                  ➕
                  <img />
                </span>
                <dl className="dl2">
                  <dt> 배송비</dt>
                  <dd>
                    <strong>0</strong>원
                  </dd>
                </dl>
                <span>
                  🔀
                  <img />
                </span>
                <dl className="dl3">
                  <dt> 합계</dt>
                  <dd>
                    <strong className="dl3Amount">34,900</strong>원
                  </dd>
                </dl>
              </div>
            </div>
            <div className="btnOrderBox">
              <div className="btnLeftOrder">
                <button>선택상품 삭제</button>
                <button>선택상품 찜</button>
              </div>
              <div className="btnRightOrder">
                <button>선택상품 주문</button>
                <button>전체상품 주문</button>
              </div>
            </div>
            <div className="checkPoint">
              <em>
                ❕ 주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
