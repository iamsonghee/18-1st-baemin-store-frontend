import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBox extends Component {
  state = {
    closeSearchBox: false,
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
      <div className={'headerSearch ' + (this.props.didScroll && 'none')}>
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
    );
  }
}

export default SearchBox;
