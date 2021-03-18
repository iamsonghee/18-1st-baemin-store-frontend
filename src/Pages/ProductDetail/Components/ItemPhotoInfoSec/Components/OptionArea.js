import React, { Component } from 'react';
import './OptionArea.scss';

class OptionArea extends Component {
  render() {
    const {
      counts,
      inputItemCounts,
      increaseItem,
      decreaseItem,
      price,
      sale,
      name,
    } = this.props;
    return (
      <table className="optionArea">
        <tbody>
          <tr>
            <td className="cartProductName">{name}</td>
            <td className="count">
              <input type="text" value={counts} onChange={inputItemCounts} />
              <div className="btnContainer">
                <div className="upBtn container">
                  <button className="countUpBtn" onClick={increaseItem} />
                </div>
                <div className="downBtn container">
                  <button className="countDownBtn" onClick={decreaseItem} />
                </div>
              </div>
            </td>
            <td className="itemChoicePrice">
              <strong>
                {(((price * (100 - sale)) / 100) * counts).toLocaleString(
                  'ko-KR'
                )}
              </strong>
              원
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default OptionArea;
