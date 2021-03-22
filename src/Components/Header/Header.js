import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clickedId: null,
      didScroll: false,
    };
  }

  handleMenuClick = (idx, menu) => {
    this.setState({
      clickedId: idx,
    });
    // console.log('******', idx, Object.values(menu)[0]);
    this.props.history.push(`/ct/${Object.values(menu)[0]}`);
  };
  handleAddClassName = idx => {
    if (idx === this.state.clickedId) {
      return 'on';
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
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

  render() {
    console.log('didScroll', this.state.didScroll);
    return (
      <header>
        <div className="headerTop">
          <div className={this.state.didScroll ? 'small' : 'none'}>
            <img src="/Images/logo_main.png" alt="mainlogo" />
          </div>
          <ul className="userMenu">
            {Object.keys(USERMENU).map(function (menu) {
              return (
                <li>
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
// const MAPPING_OBJ = {};
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
