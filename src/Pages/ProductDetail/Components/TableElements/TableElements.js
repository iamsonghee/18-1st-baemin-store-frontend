import React, { Component } from 'react';

class TableElements extends Component {
  render() {
    return (
      <>
        <tr>
          <th>품명</th>
          <td>품명 value</td>
        </tr>
        <tr>
          <th>재질</th>
          <td>재질 value</td>
        </tr>
      </>
    );
  }
}

export default TableElements;
