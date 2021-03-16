import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div class="loginComponent">
        <h3> 회원로그인</h3>
        <div class="loginBox">
          <div class="loginInput">
            <input className="inputId" placeholder="아이디" />
            <input className="inputPw" placeholder="비밀번호" />
          </div>
          <div className="idCheck">
            <input type="checkbox" class="saveId" id="saveId" />
            <label for="savdId">아이디 저장</label>
          </div>
          <button type="submit">로그인</button>
        </div>
        <div className="btnLoginBox">
          <ul>
            <li>
              <button type="button" className="btnMemberJoin">
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
