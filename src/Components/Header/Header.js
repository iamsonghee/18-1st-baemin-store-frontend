import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';
import SearchBox from './SearchBox/SearchBox';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clickedId: null,
      didScroll: false,
      isLogined: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    sessionStorage.getItem('access_token') &&
      this.setState({ isLogined: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleLogout = () => {
    alert('로그아웃 하였습니다.');
    sessionStorage.removeItem('access_token');
    this.setState({
      isLogined: false,
    });
  };

  handleMenuClick = (idx, menu) => {
    this.setState({
      clickedId: idx,
    });
    this.props.history.push(`/ct/${Object.values(menu)[0]}?category=${idx}`);
    this.handleAddClassName(idx);
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
  render() {
    console.log('************ : ', this.props);
    return (
      <header>
        <div className="headerTop">
          <div className={this.state.didScroll ? 'small' : 'none'}>
            <img src="/Images/logo_main.png" alt="mainlogo" />
          </div>
          <ul className="userMenu">
            {this.state.isLogined
              ? LOGIN_USERMENU.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      onClick={menu.path === '/main' && this.handleLogout}
                    >
                      <Link to={menu.path}>{menu.name}</Link>
                    </li>
                  );
                })
              : DEFAULT_USERMENU.map((menu, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        this.props.history.push(menu.path);
                        this.props.handleHeaderChange();
                      }}
                    >
                      {menu.name}
                    </li>
                  );
                })}
          </ul>
        </div>
        <SearchBox didScroll={this.state.didScroll} />
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

const LOGIN_USERMENU = [
  {
    name: '로그아웃',
    path: '/main',
  },
];

const DEFAULT_USERMENU = [
  {
    name: '로그인',
    path: '/login',
  },
  {
    name: '회원가입',
    path: '/signup',
  },

  {
    name: '장바구니',
    path: '/cart',
  },
];

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
