import React, { Component } from 'react';
class CartItem extends Component {
  render() {
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
                <img src={this.props.img} width="50px" />
              </a>
            </span>
            <div className="pickInformation">
              {/* <div className="pickBtnCoupon">
                              <a>
                                <img />
                              </a>
                            </div> */}
              <a>{this.props.name} </a>
              <div>
                {this.props.optionKey}:{this.props.optionValue}
              </div>
            </div>
          </div>
        </td>
        <td className="tdOrderAmount">
          <div className="orderNumber">
            <strong>{this.props.count}개</strong>
            <div className="orderNumberChange">
              <a>
                <span>옵션/수량변경</span>
              </a>
            </div>
          </div>
        </td>
        <td className="tdOrderPrice">
          <strong>{this.props.price}원</strong>
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
