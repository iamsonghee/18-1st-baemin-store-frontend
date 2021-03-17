import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTop">
          <ul className="userMenu">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/main">마이페이지</Link>
            </li>
            <li>
              <Link to="/cart">
                장바구니<span className="cartCount">0</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="headerSearch">
          <div className="headerSearch__content">
            <div className="mainLogo">
              <Link to="/main">
                <img src="/Images/logo_main.png" alt="mainlogo" />
              </Link>
            </div>
            <div className="searchBar">
              <input placeholder="검색어를 입력해주세요"></input>
              <button>
                <i className="fas fa-search fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
        <nav className="headerMenu">
          <ul>
            {MENUARR.map((menu, idx) => {
              return <li key={idx}>{menu}</li>;
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
const MAPPING_OBJ = {};
const MENUARR = [
  '전체',
  '문구',
  '리빙',
  '책',
  '을지로에디션',
  'ㅋㅋ에디션',
  '배달이친구들',
  '선물세트',
  '콜라보레이션',
];
export default Header;
