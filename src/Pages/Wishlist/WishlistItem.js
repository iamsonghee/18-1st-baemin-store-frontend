import React, { Component } from 'react';
import product1 from './product1.JPG';

class WishlistItem extends Component {
  render() {
    console.log('모야모야', this.props.price);
    return (
      <tr>
        <td className="tdCheck">
          <div className="formElement">
            <input
              type="checkbox"
              onChange={() => this.props.onClickCheck(this.props.id)}
            />
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

              <a>{this.props.name} </a>
            </div>
          </div>
        </td>
        <td className="tdOrderAmount">
          <div className="orderNumber">
            <strong>
              {this.props.price}원 /{this.props.count}개
            </strong>
            <div className="orderNumberChange">
              <a>
                <span>옵션/수량변경</span>
              </a>
            </div>
          </div>
        </td>
        <td className="btnOrderBox">
          <button className="btnRightOrder">장바구니</button>
          <button className="btnLeftOrder">삭제하기</button>
        </td>
      </tr>
    );
  }
}

export default WishlistItem;
