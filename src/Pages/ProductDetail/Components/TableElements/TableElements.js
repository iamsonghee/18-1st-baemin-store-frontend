import React, { Component } from 'react';

class TableElements extends Component {
  render() {
    const { list, description } = this.props;
    return (
      <>
        <tr>
          <th>{list}</th>
          <td>{description}</td>
        </tr>
      </>
    );
  }
}

export default TableElements;
