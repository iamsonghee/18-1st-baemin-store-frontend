import React, { Component } from 'react';
import product1 from './product1.JPG';

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td className="tdCheck">
          <div className="formElement">
            <input type="checkbox" />
            <label></label>
          </div>
        </td>
        <td className="tdLeft">
          <div className="pickContent">
            <span className="pickImage">
              <a>
                <img src={product1} />
              </a>
            </span>
            <div className="pickInformation">
              {/* <div className="pickBtnCoupon">
                              <a>
                                <img />
                              </a>
                            </div> */}

              <a>을지로 마스킹 테이프 </a>
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
        {this.props.rowspan ? (
          <td className="tdDelivery" rowspan={this.props.rowspan}>
            기본배송비
            <br />
            2,500원
            <br />
            (택배-선결제)
          </td>
        ) : null}
      </tr>
    );
  }
}

export default CartItem;
