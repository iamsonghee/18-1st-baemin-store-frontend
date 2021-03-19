import React, { Component } from 'react';
import './SignUp.scss';

class Signup extends Component {
  render() {
    return (
      <div className="signupComponent">
        <div className="btnJoin"> ㅋ 배민문방구로 회원가입</div>
        <div className="loginGuide">
          이미 배민문방구 회원이신가요?
          <a href="#">로그인</a>
        </div>
      </div>
    );
  }
}

export default Signup;
