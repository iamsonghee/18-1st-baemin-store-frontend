import React, { Component } from 'react';
import './OptionArea.scss';

class OptionArea extends Component {
  render() {
    const {
      id,
      name,
      priceAdd,
      stock,
      counts,
      price,
      sale,
      inputItemCounts,
      increaseItem,
      decreaseItem,
      deleteOption,
    } = this.props;
    return (
      <table className="optionArea">
        <tbody>
          <tr>
            <td className="cartProductName">
              {name} &nbsp;<span>(재고 : {stock})</span>
            </td>
            <td className="count">
              <input
                name={id}
                type="text"
                value={counts}
                onChange={inputItemCounts}
              />
              <div className="btnContainer">
                <div className="upBtn container">
                  <button
                    name={id}
                    className="countUpBtn"
                    onClick={increaseItem}
                  />
                </div>
                <div className="downBtn container">
                  <button
                    name={id}
                    className="countDownBtn"
                    onClick={decreaseItem}
                  />
                </div>
              </div>
            </td>
            <td className="itemChoicePrice">
              <strong>
                {(
                  ((price * (100 - sale)) / 100 + priceAdd) *
                  counts
                ).toLocaleString()}
              </strong>
              원
            </td>
            <td className="optDelBtn">
              <button onClick={deleteOption}>
                <img
                  id={id}
                  src="https://www.flaticon.com/svg/vstatic/svg/71/71622.svg?token=exp=1616175018~hmac=cb52990d4f09c5afaf6054b9d202f759"
                  alt="optDelBtn"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default OptionArea;
