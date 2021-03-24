import React, { Component } from 'react';
import './OrderInfo.scss';
import DaumPostcode from 'react-daum-postcode';

class OrderInfo extends Component {
  state = {
    emailAgree: false,
    phoneAgree: false,
    userId: 1, //아이디
    userIdUsable: '',
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
    receiver: [],
    user: [],
  };

  //아이디확인
  idCheck = e => {
    e.preventDefault();

    fetch('http://localhost:3000/data/iddb.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        console.log(Object.values(res), res);
        const check = Object.values(res).filter(
          i => i.userId === this.state.userId
        );
        console.log(check);
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
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  //결제하기
  handlePayment = () => {
    fetch('http://10.58.2.56:8888/user/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.userId,
        password: this.state.password,
        name: this.state.name,
        phone_number: this.state.phone,
        email: this.state.email,
        address: this.state.fullAddress,
        postal_code: this.state.zoneCode,
        detailed_address: this.state.detailAddress,
      }),
    }) //
      .then(res => res.json())
      .then(result => {
        console.log('잘됐음', result);
        // if (response.status === 400) {
        //   alert('다시 한번 확인해주세요');
        // } else {
        alert('가입완료!');
        this.props.history.push('/login');
        //   window.location.reload();
        // }
      });
  };

  //마케팅 확인
  handleMarketing = () => {
    console.log('check');
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
    console.log('재밌', this.props);
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
      <div className="orderInfoComponent">
        <form id="formJoin" name="formJoin" method="post">
          <div className="baseInputBox">
            <h3>주문자정보</h3>

            <div className="baseInformation">
              <table border="0" cellpadding="0" cellspacing="0">
                <colgroup>
                  <col width="25%" />
                  <col width="75%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <span className="important">◾ 주문자</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          className="inputgray"
                          type="text"
                          value={this.props.name}
                        ></input>
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
                          type="text"
                          className="inputgray"
                          value={this.props.phoneNumber}
                        />
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
                          className="inputgray"
                          value={this.props.email}
                        ></input>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <form id="formJoin" name="formJoin" method="post">
          <div className="baseInputBox">
            <h3>배송정보</h3>

            <div className="baseInformation">
              <table border="0" cellpadding="0" cellspacing="0">
                <colgroup>
                  <col width="25%" />
                  <col width="75%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <span className="important">◾ 받으실 분</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="receiver"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">받으실 곳</span>
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

                  <tr>
                    <th>
                      <span className="important">◾ 휴대폰번호</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="phoneNumber"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 남기실 말씀</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="customerMessage"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 회원정보반영</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="checkbox"
                          id="addMyAddress"
                          name="addMyAddress"
                          onClick={this.handleMarketing}
                        />
                        <label htmlFor="addMyAddress">
                          나의 배송지에 추가됩니다
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <form id="formJoin" name="formJoin" method="post">
          <div className="baseInputBox">
            <h3>결제정보🌶</h3>

            <div className="baseInformation">
              <table border="0" cellpadding="0" cellspacing="0">
                <colgroup>
                  <col width="25%" />
                  <col width="75%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      <span className="important">◾ 합계금액 </span>
                    </th>
                    <td>
                      <div className="memberWarning">579,100원</div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">배송비</span>
                    </th>
                    <td>
                      <div className="memberWarning">0원</div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 적립금 사용</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          className="inputEmail"
                          type="text"
                          onChange={this.handleInputChange}
                          name="userId"
                        ></input>{' '}
                        원
                      </div>
                      <div className="memberWarning">
                        <input
                          type="checkbox"
                          id="mailing"
                          name="mailing"
                          onClick={this.handleMarketing}
                        />
                        <label htmlFor="mailing">전액 사용하기</label>
                        (보유적립금 {this.props.point}원)
                        {/* {this.props.point} */}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 최종결제금액 </span>
                    </th>
                    <td>
                      <div className="memberWarning">579,100원</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>

        <div className="btnFinalBox">
          <button className="btnMemberJoin" onClick={this.handlePayment}>
            결제하기
          </button>
          {isDaumPost ? (
            <DaumPostcode
              onComplete={this.handleAddress}
              autoClose
              width={width}
              height={height}
              style={modalStyle}
              isDaumPost={isDaumPost}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default OrderInfo;
