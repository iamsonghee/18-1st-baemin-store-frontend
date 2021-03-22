import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    userId: '0',
    password: '0',
    isLogin: false,
  };
  //input 창 입력
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //로그인 버튼 클릭
  handleLogin = e => {
    e.preventDefault();

    fetch('http://10.58.4.112:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.access_token) {
          console.log('서버연결 성공!💟');
          localStorage.setItem('access_token', result.access_token);
          alert('성공');
          this.props.history.push('/signin');
          this.setState({
            isLogin: true,
            email: this.state.userId,
            password: this.state.password,
          });
        } else {
          alert('로그인 실패 ');
        }
      });
  };

  render() {
    console.log(this.state.userId);
    return (
      <div class="loginComponent">
        <h3> 회원로그인</h3>
        <div class="loginBox">
          <div class="loginInput">
            <input
              type="text"
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
              type="password"
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
