import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    userId: '0',
    password: '0',
    isLogin: false,
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log('a');
    fetch('http://10.58.3.162:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.userId,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.token) {
          console.log('굿굿구웃이에요');
          localStorage.setItem('token', result.token);
          alert('성공');
          this.props.history.push('/signin');
          // this.setState({
          //   isLogin: true,
          //   email: this.state.userId,
          //   password: this.state.password,
          // });
        } else {
          alert('로그인 실패 ');
        }
      });
  };

  render() {
    return (
      <div class="loginComponent">
        <h3> 회원로그인</h3>
        <div class="loginBox">
          <div class="loginInput">
            <input
              onChange={this.handleInput}
              name="userId"
              className="inputId"
              placeholder="아이디"
            />
            {!this.state.userId && (
              <div style={{ color: 'red', fontSize: '10px' }}>
                아이디를 입력하세요
              </div>
            )}
            <input
              onChange={this.handleInput}
              name="password"
              className="inputPw"
              placeholder="비밀번호"
            />
            {!this.state.password && (
              <div style={{ color: 'red', fontSize: '10px' }}>
                비밀번호를 입력하세요
              </div>
            )}
          </div>
          <div className="idCheck">
            <input type="checkbox" class="saveId" id="saveId" />
            <label for="savdId">아이디 저장</label>
          </div>
          <button type="submit" onClick={this.handleLogin}>
            로그인
          </button>
        </div>
        <div className="btnLoginBox">
          <ul>
            <li>
              <button type="button" className="btnMemberJoisn">
                회원가입
              </button>
            </li>
            <li>
              <button type="button" className="btnFindId">
                아이디 찾기
              </button>
            </li>
            <li>
              <button type="button" className="btnFindPw">
                비밀번호 찾기
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
