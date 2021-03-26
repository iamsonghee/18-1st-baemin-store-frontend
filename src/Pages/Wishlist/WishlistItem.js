import React, { Component } from 'react';
import product1 from './product1.JPG';

class WishlistItem extends Component {
  render() {
    console.log('모야모야', this.props.price);
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td className="tdLeft">
          <div className="pickContent">
            <span className="pickImage">
              <a>
                <img src={this.props.thumbnail} width="30px" />
              </a>
            </span>
            <div className="pickInformation">
              {/* <div className="pickBtnCoupon">
                              <a>
                                <img />
                              </a>
                            </div> */}

              <a>{this.props.name} </a>
              {this.props.optinkey && (
                <div>
                  {this.props.optionKey} :{this.props.optionValue}
                </div>
              )}
            </div>
          </div>
        </td>
        <td cla ssName="tdOrderAmount">
          <div className="orderNumber">
            <strong>
              {parseInt(this.props.price).toLocaleString()}원 /
              {this.props.count}개
            </strong>
            <div className="orderNumberChange">
              <a>
                <span>옵션/수량변경</span>
              </a>
            </div>
          </div>
        </td>
        <td className="btnOrderBoxItem">
          <button className="btnRightOrder">장바구니</button>
          <button className="btnLeftOrder">삭제하기</button>
        </td>
      </tr>
    );
  }
}

export default WishlistItem;
