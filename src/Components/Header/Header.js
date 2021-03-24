import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clickedId: null,
      didScroll: false,
      closeSearchBox: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleMenuClick = (idx, menu) => {
    this.setState({
      clickedId: idx,
    });
    this.props.history.push(`/ct/${Object.values(menu)[0]}`);
  };

  handleAddClassName = idx => {
    if (idx === this.state.clickedId) {
      return 'on';
    }
  };

  handleScroll = () => {
    if (this.state.didScroll & (window.scrollY < 120)) {
      this.setState({
        didScroll: false,
      });
    } else if (!this.state.didScroll & (window.scrollY >= 120)) {
      this.setState({
        didScroll: true,
      });
    }
  };
  handleDeleteAll = () => {};

  handleCloseSearchBox = () => {
    this.setState({
      closeSearchBox: false,
    });
  };

  handleFocusSearchBox = () => {
    this.setState({
      closeSearchBox: true,
    });
  };
  render() {
    return (
      <header>
        <div className="headerTop">
          <div className={this.state.didScroll ? 'small' : 'none'}>
            <img src="/Images/logo_main.png" alt="mainlogo" />
          </div>
          <ul className="userMenu">
            {Object.keys(USERMENU).map((menu, index) => {
              return (
                <li key={index}>
                  <Link to={menu}>{USERMENU[menu]}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={'headerSearch ' + (this.state.didScroll && 'none')}>
          <div className="content">
            <div className="mainLogo">
              <Link to="/main">
                <img src="/Images/logo_main.png" alt="mainlogo" />
              </Link>
            </div>
            <div className="searchBar">
              <input
                placeholder="검색어를 입력해주세요"
                onFocus={this.handleFocusSearchBox}
              ></input>
              <button>
                <i className="fas fa-search fa-lg"></i>
              </button>
              <div
                className={
                  'searchHisBox ' + (!this.state.closeSearchBox && 'none')
                }
              >
                <div className="histories">
                  <div className="latestTitle">최근검색어</div>
                  <ul className="latestWords">
                    <li className="word">
                      <span>양말</span>
                      <span>
                        2021.03.23<i>X</i>
                      </span>
                    </li>
                    <li>스티커</li>
                  </ul>
                </div>
                <div className="endButtons">
                  <button onClick={this.handleDeleteAll}>전체삭제</button>
                  <button onClick={this.handleCloseSearchBox}>닫기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="headerMenu">
          <ul>
            {MENUARR.map((menu, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => this.handleMenuClick(idx, { menu })}
                >
                  <div className={'menuTitle ' + this.handleAddClassName(idx)}>
                    {menu}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

const USERMENU = {
  '/login': '로그인',
  '/signup': '회원가입',
  '/main': '마이페이지',
  '/cart': '장바구니',
};
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

export default withRouter(Header);
