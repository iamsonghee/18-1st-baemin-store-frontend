import React, { Component } from 'react';
import './OptionArea.scss';

class OptionArea extends Component {
  render() {
    const {
      counts,
      InputItemCounts,
      IncreaseItem,
      DecreaseItem,
      price,
      sale,
      name,
    } = this.props;
    return (
      <table className="optionArea">
        <tbody>
          <tr>
            <td className="cartProductName">
              <strong>{name}</strong>
            </td>
            <td className="count">
              <input type="text" value={counts} onChange={InputItemCounts} />
              <div className="btnContainer">
                <div className="upBtn container">
                  <button className="countUpBtn" onClick={IncreaseItem} />
                </div>
                <div className="downBtn container">
                  <button className="countDownBtn" onClick={DecreaseItem} />
                </div>
              </div>
            </td>
            <td className="itemChoicePrice">
              <strong>{((price * (100 - sale)) / 100) * counts}</strong>원
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default OptionArea;
