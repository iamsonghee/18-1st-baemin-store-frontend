import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartItem extends Component {
  render() {
    const {
      id,
      rowspan,
      img,
      count,
      price,
      name,
      optionKey,
      optionValue,
      orderStatus,
      onClickCheck,
      handleModal,
    } = this.props;
    return (
      <tr>
        <td className="tdCheck">
          <div className="formElement">
            <input type="checkbox" onChange={() => onClickCheck(id)} />
          </div>
        </td>
        <td className="tdLeft">
          <div className="pickContent">
            <span className="pickImage">
              <Link>
                <img alt={`${name}의 이미지`} src={img} width="50px" />
              </Link>
            </span>
            <div className="pickInformation">
              <Link>{name} </Link>
              <div style={{ display: !optionKey && 'none' }}>
                {optionKey} : {optionValue}
              </div>
            </div>
            <div
              className="orderStatus"
              style={{ display: orderStatus === '결제전' && 'none' }}
            >
              결제중
            </div>
          </div>
        </td>
        <td className="tdOrderAmount">
          <div className="orderNumber">
            <strong>{count}개</strong>
            <div className="orderNumberChange">
              <Link name={id} onClick={handleModal}>
                옵션/수량변경
              </Link>
            </div>
          </div>
        </td>
        <td className="tdOrderPrice">
          <strong>{(price * count).toLocaleString()}원</strong>
        </td>
        {rowspan && (
          <td className="tdDelivery" rowspan={rowspan}>
            기본배송비
            <br />
            2,500원
            <br />
            (택배-선결제)
            <br />
            (3만원 이상 구매 시 무료)
          </td>
        )}
      </tr>
    );
  }
}
export default CartItem;
