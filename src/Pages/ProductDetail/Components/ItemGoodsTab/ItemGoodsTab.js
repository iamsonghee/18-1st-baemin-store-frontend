import React, { Component } from 'react';
import './ItemGoodsTab.scss';

const tabList = [
  { id: '#detail', title: '상품상세정보' },
  { id: '#delivery', title: '배송안내' },
  { id: '#exchange', title: '교환 및 반품안내' },
  { id: '#reviews', title: '상품후기' },
  { id: '#qna', title: '상품문의' },
];

class ItemGoodsTab extends Component {
  render() {
    return (
      <nav className="itemGoodsTab">
        <ul>
          {tabList.map((tab, index) => (
            <li key={index}>
              <a href={tab.id}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default ItemGoodsTab;
