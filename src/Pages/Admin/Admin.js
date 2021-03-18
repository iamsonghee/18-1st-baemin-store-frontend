import React, { Component } from 'react';
import './Admin.scss';

class Admin extends Component {
  state = {
    emailAgree: true,
    phoneAgree: true,
    userId: 1,
    userIdUsable: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    zoneCode: '',
    fullAddress: '',
    isDaumPost: false,
    isRegister: false,
    register: [],
  };

  //input 값
  handleInputChange = e => {
    const idPattern = /^[a-z0-9_]{4,12}$/;

    if (
      e.target.name === 'userId' &&
      idPattern.test(e.target.value) === false
    ) {
      this.setState({ userId: '' });
      return;
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  if() {
    fetch('http://10.58.2.56:8000/user/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.userId,
        password: this.state.password,
        name: this.state.name,
        phone_number: this.state.phone,
        email: this.state.email,
        address: '0000',
        postal_code: '00000',
        detailed_address: '0000',
      }),
    }) //
      .then(res => res.json())
      .then(result => {
        console.log('잘됐음', result);
        // if (response.status === 400) {
        //   alert('다시 한번 확인해주세요');
        // } else {
        //   alert('가입완료!');
        //   this.props.history.push('/login');
        //   window.location.reload();
        // }
      });
  }

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
      <div className="adminComponent">
        <form id="formJoin" name="formJoin" method="post">
          <div className="baseInputBox">
            <h3>상품등록 (관리자 페이지)</h3>
            <div className="baseInformation">
              <table border="0" cellpadding="0" cellspacing="0">
                <colgroup>
                  <col width="25%" />
                  <col width="75%" />
                </colgroup>
                <tbody>
                  {/* <tr>
                    <th>
                      <span className="important">카테고리</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          className="inputEmail"
                          type="text"
                          onChange={this.handleInputChange}
                          name="userId"
                        ></input>
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
                  </tr> */}

                  <tr>
                    <th>
                      <span className="important">◾ 카테고리</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="category"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ sub 카테고리</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="categorySub"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾금액</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="cost"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾ 상품명</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          onChange={this.handleInputChange}
                          name="productName"
                        ></input>
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
            상품등록
          </button>
        </div>
      </div>
    );
  }
}

export default Admin;
