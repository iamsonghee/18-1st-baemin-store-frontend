import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTop">
          <ul className="userMenu">
            <li>로그인</li>
            <li>회원가입</li>
            <li>마이페이지</li>
            <li>
              장바구니<span className="cartCount">0</span>
            </li>
          </ul>
        </div>
        <div className="headerSearch">
          <div className="headerSearch__content">
            <div className="mainLogo">
              <Link href="/main">
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
            <li>전체</li>
            <li>문구</li>
            <li>리빙</li>
            <li>책</li>
            <li>을지로에디션</li>
            <li>ㅋㅋ에디션</li>
            <li>배달이친구들</li>
            <li>선물세트</li>
            <li>콜라보레이션</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
