import React, { Component } from 'react';
import './Cart.scss';

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
                  <img src="" />
                </span>
              </li>
              <li>
                <span>02</span>
                주문서작성/결제
                <span>
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
                    <col style="width:3%"></col>
                    <col></col>
                    <col style="width:5%"></col>
                    <col style="width:10%"></col>
                    <col style="width:13%"></col>
                    <col style="width:10%"></col>
                    <col style="width:10%"></col>
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
                      <th class="dn">할인/적립</th>
                      <th class="dn">합계금액</th>
                      <th>배송비</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tdCheck">
                        <div className="formElement">
                          <input type="check" />
                          <label></label>
                        </div>
                      </td>
                      <td className="tdLeft">
                        <div className="pickContent">
                          <span className="pickImage">
                            <a>
                              <img />
                            </a>
                          </span>
                          <div className="pickInformation">
                            <div className="pickBtnCoupon">
                              <a>
                                <img />
                              </a>
                            </div>
                            <em>
                              <a>을지로 마스킹 테이프 </a>
                            </em>
                          </div>
                        </div>
                      </td>
                      <td className="tdOrderAmount">
                        <div className="orderNumber">
                          <strong>1개</strong>
                          <div className="orderNumberChange">
                            <a>
                              <span>옵션/수량변경</span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="tdOrderPrice">
                        <strong>4500원</strong>
                        <p></p>
                      </td>
                      <td className="tdDelivery">
                        "기본배송비"
                        <br />
                        0
                        <br />
                        (택배-선결제)
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </form>
            <div className="btnContinue">
              <a>
                <em>쇼핑 계속하기</em>
              </a>
            </div>
            <div className="priceSum">
              <div className="priceSumContent">
                <dl>
                  <dt>
                    총<strong>2</strong>개의 상품금액
                  </dt>
                  <dd>
                    <strong>34,900</strong>원
                  </dd>
                </dl>
                <span>
                  <img />
                </span>
                <dl>
                  <dt> 배송비</dt>
                  <dd>
                    <strong>0</strong>원
                  </dd>
                </dl>
                <span>
                  <img />
                </span>
              </div>
              <dl>
                <dt> 합계</dt>
                <dd>
                  <strong>34,900</strong>원
                </dd>
              </dl>
            </div>
            <div className="btnOrderBox">
              <span className="btnLeftOrder">
                <button>선택상품 삭제</button>
                <button>선택상품 찜</button>
              </span>
              <span className="btnRightOrder">
                <button>선택상품 주문</button>
                <button>전체상품 주문</button>
              </span>
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
