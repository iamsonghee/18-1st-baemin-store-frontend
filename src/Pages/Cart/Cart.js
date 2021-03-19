import React, { Component } from 'react';

import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <div className="cartComponent">
        <div className="orderBox">
          <div orderTitle>
            <h2>장바구니</h2>
            <ol>
              <li className="orderFlow">
                <span>01</span>
                장바구니
                <span>➡{/* <img src="" alt="표시"/> */}</span>
              </li>
            </ol>
          </div>
          <div className="cartContent">
            <form id="cartForm">
              <div class="cartContetList">
                <div class="cartTable">
                  <colgroup></colgroup>
                  <thead>
                    <tr>
                      <th>
                        <div className="formCheck">
                          <input type="checkbox" id="checkAll" />
                          <lavel for="checkAll" />
                        </div>
                      </th>
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>상품금액</th>
                      <th>할인/적립</th>
                      <th>합계금액</th>
                      <th>배송비</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tbodyCheck">
                        <div className="formCheck">
                          <input type="checkbox" id="" />
                          <label for=""></label>
                        </div>
                      </td>
                      <td className="tbodyContent">
                        <div className="tbodyContentInner">
                          <span class="cartImg"></span>
                          <div class=""></div>
                        </div>
                      </td>
                      <td className="tbodyAmount"></td>
                      <td className="tbodyCost"></td>
                      <td className="tbodyDelevery"></td>
                      {/* <td className="tbody_check"></td> */}
                    </tr>
                  </tbody>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
