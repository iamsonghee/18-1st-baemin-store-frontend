import React, { Component } from 'react';
import './Admin.scss';

class Admin extends Component {
  state = {
    // emailAgree: true,
    // phoneAgree: true,
    category: '',
    categorySub: '',
    productName: '',
    cost: '',
    imgUrl: '',
    option: '',
    options: [],
    optionName1: '',
    optionCost1: '',
    optionName2: '',
    optionCost2: '',
    optionName3: '',
    optionCost3: '',
    // address: '',
    // zoneCode: '',
    // fullAddress: '',
    // isDaumPost: false,
    // isRegister: false,
    register: [],
  };

  handleRegister = () => {
    const options = [1, 2, 3].map(i => ({
      name: this.state[`optionName${i}`],
      cost: this.state[`optionCost${i}`],
    }));

    console.log(options);

    this.setState({
      options,
    });

    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  };

  //input 값
  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
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
    // console.log(this.state);
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

                  <tr>
                    <th>
                      <span className="important">◾이미지 url</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="imgUrl"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾option</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="option"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionName1</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionName1"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionCost1</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionCost1"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionName2</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionName2"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionCost2</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionCost2"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionName3</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionName3"
                        ></input>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <span className="important">◾optionCost3</span>
                    </th>
                    <td>
                      <div className="memberWarning">
                        <input
                          type="text"
                          onChange={this.handleInputChange}
                          name="optionCost3"
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
          <button className="btnMemberJoin" onClick={this.handleRegister}>
            상품등록
          </button>
        </div>
      </div>
    );
  }
}

export default Admin;
