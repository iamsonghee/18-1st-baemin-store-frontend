import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './SignupProcess.scss';

class SignupProcess extends Component {
  state = {
    emailAgree: false,
    phoneAgree: false,
    userId: 1, //아이디
    password: '1', //비밀번호
    passwordCheck: '', //비밀번호 확인
    name: '', //이름
    email: '', //이메일
    phone: '', //휴대폰번호
    zoneCode: '', //우편번호
    fullAddress: '', //기본주소
    detailAddress: '', //상세주소
    isDaumPost: false,
    isRegister: false,
    register: [],
  };

  //아이디확인
  idCheck = e => {
    e.preventDefault();

    fetch('http://localhost:3000/data/iddb.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        const check = Object.values(res).filter(
          i => i.userId === this.state.userId
        );
        if (check.length) {
          alert('이미 사용중입니다 ☢');
          return;
        }
        alert('사용가능한 아이디입니다');
      });
  };
  //input
  값;
  handleInputChange = e => {
    const idPattern = /^[a-z0-9_]{4,12}$/;
    const pwPattern = /^[a-z0-9_]{4,12}$/;

    if (
      e.target.name === 'userId' &&
      idPattern.test(e.target.value) === false
    ) {
      this.setState({ userId: '' });
      return;
    }
    if (
      e.target.name === 'password' &&
      pwPattern.test(e.target.value) === false
    ) {
      this.setState({ password: '' });
      return;
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //회원가입
  clickJoin = e => {
    e.preventDefault();

    if (!this.state.userId) {
      alert('아이디를 입력해주세요 ');
      return;
    }
    if (!this.state.password) {
      alert('비밀번호를 입력해주세요 ');
      return;
    }
    if (this.state.password !== this.state.passwordCheck) {
      alert('비밀번호를 확인해주세요. ');
      return;
    }
    if (!this.state.name) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!this.state.email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!this.state.phone) {
      alert('휴대폰 번호를 입력해주세요');
      return;
    }

    if (true) {
      fetch('http://10.58.2.56:8888/user/sign-up', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.userId,
          email: this.state.email,
          phone_number: this.state.phone,
          password: this.state.password,
          address: this.state.fullAddress,
          postal_code: this.state.zoneCode,
          detailed_address: this.state.detailAddress,
        }),
      }) //
        .then(res => res.json())
        .then(result => {
          // if (response.status === 400) {
          //   alert('다시 한번 확인해주세요');
          // } else {
          alert('가입완료!');
          this.props.history.push('/login');
          //   window.location.reload();
          // }
        });
    }
  };
  //마케팅 확인
  handleMarketing = () => {
    this.setState({
      emailAgree: !this.state.emailAgree,
    });
  };

  //주소 API 연결 및 등록
  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
      isDaumPost: false,
    });
  };

  render() {
    const { isModalShow, isModalClose } = this.props;
    const {
      name,
      phone,
      address,
      isDaumPost,
      fullAddress,
      zoneCode,
      isRegister,
    } = this.state;
    const width = 595;
    const height = 450;
    const modalStyle = {
      position: 'fixed',
      top: '10%',
      left: '10%',
      zIndex: '100',
      border: '1px solid #000000',
      overflow: 'hidden',
    };

    return (
      <div className="signupProcessComponent">
        <form id="formJoin" name="formJoin" method="post">
          <div className="baseInputBox">
            <h3>기본정보 🐱‍🐉</h3>
            <span class="important">
              ◾ 표시는 반드시 입력하셔야 하는 항목입니다.
            </span>
            <div className="baseInformation">
              <table border="0" cellpadding="0" cellspacing="0">
                <colgroup>
                  <col width="25%" />
                  <col width="75%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <span className="important">◾ 아이디</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          className="inputEmail"
                          type="text"
                          onChange={this.handleInputChange}
                          name="userId"
                        />
                        <button
                          className="inputAddressButton"
                          onClick={this.idCheck}
                        >
                          아이디확인
                        </button>
                      </div>
                      {this.state.userId ? null : (
                        <div style={{ color: 'red', fontSize: '10px' }}>
                          4~12자 영문소문자, 숫자, 언더라인(_) 사용가능
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 비밀번호</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="password"
                          onChange={this.handleInputChange}
                          name="password"
                        />
                        {!this.state.password && (
                          <div style={{ color: 'red', fontSize: '10px' }}>
                            4~12자 영문소문자, 숫자, 언더라인(_) 사용가능
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 비밀번호 확인</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="password"
                          onChange={this.handleInputChange}
                          name="passwordCheck"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 이름</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input onChange={this.handleInputChange} name="name" />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 이메일</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          name="email"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="memberWarning jsEmail"></div>
                      <div className="formElement">
                        <input
                          type="checkbox"
                          id="mailing"
                          name="mailing"
                          onClick={this.handleMarketing}
                        />
                        <label htmlFor="mailing">
                          (선택)마케팅 및 이벤트 정보 메일 수신에 동의합니다.
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 휴대폰번호</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="tel"
                          name="phone"
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="formElement">
                        <input
                          type="checkbox"
                          id="mailingPhone"
                          name="mailing"
                        />
                        <label for="mailingPhone">
                          (선택)마케팅 및 이벤트 정보 메일 수신에 동의합니다.
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">주소</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          className="inputAddress"
                          type="text"
                          value={zoneCode}
                        />
                        <input
                          type="button"
                          className="inputAddressButton"
                          onClick={this.handleOpenPost}
                          value="우편번호 찾기"
                        />
                        <div>
                          <input
                            className="inputAddressBottom"
                            type="text"
                            value={fullAddress}
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="상세주소"
                            name="detailAddress"
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <div className="btnFinalBox">
          <button className="btnMemberCancel">취소</button>
          <button className="btnMemberJoin" onClick={this.clickJoin}>
            회원가입
          </button>
          {isDaumPost && (
            <DaumPostcode
              onComplete={this.handleAddress}
              autoClose
              width={width}
              height={height}
              style={modalStyle}
              isDaumPost={isDaumPost}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SignupProcess;
