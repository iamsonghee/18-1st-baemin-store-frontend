import React, { Component } from 'react';
import './OptionArea.scss';

class OptionArea extends Component {
  render() {
    return (
      <table className="optionArea">
        <tbody>
          <tr>
            <td className="cartProductName">
              <strong>을지로에서 만든 은수저</strong>
            </td>
            <td>12,000,000원</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default OptionArea;
