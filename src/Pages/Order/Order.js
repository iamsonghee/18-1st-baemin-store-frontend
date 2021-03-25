import React, { Component } from 'react';
import './Order.scss';
import OrderItem from './OrderItem';
import DaumPostcode from 'react-daum-postcode';
import product1 from './product1.JPG';

class Order extends Component {
  state = {
    //주소관련
    zoneCode: '', //우편번호
    fullAddress: '', //기본주소
    detailAddress: '', //상세주소
    isDaumPost: false,
    isRegister: false,
    //백 > 프론트
    cartItems: null,
    user: null,
    sum: '',
    //프론트 > 백1
    name: '',
    phone_number: '',
    delivery_address: '',
    postal_code: '',
    detailed_address: '',
    customor_message: '',
    //프론트>백2
    add_my_address: false,
    point_used: '',
  };

  componentDidMount() {
    fetch('http://10.58.2.56:8000/order', {
      // method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.wlCljldMPYhX12CrF2N1-nCSvDqf_HXKYFd68gFQPVY',
        //sessionStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('ㅋㅋㅋㅋㅋㅋㅋ', res);
        this.setState({
          cartItems: res.products,
          user: res.user,
          // amountTotal: res.products.length,
        });
      });
  }

  //input
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //결제하기
  handlePayment = () => {
    fetch('http://10.58.2.56:8000/order', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.wlCljldMPYhX12CrF2N1-nCSvDqf_HXKYFd68gFQPVY',
        //sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: this.state.products.product_id,
        product_option_id: this.state.products.product_option_id,
        order_id: this.state.productsorder_id16,
        //
        name: this.state.user.name,
        phone_number: this.state.user.phone_number,
        email: this.state.user.email,
        delivery_address: this.state.delivery_address,
        postal_code: this.state.postal_code,
        detailed_address: this.state.detailed_address,
        customor_message: this.state.customor_message,
        //
        add_my_address: this.state.add_my_address,
        point_used: this.state.point_used,
        point: 340,
      }),
    }) //
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // if (response.status === 400) {
        //   alert('다시 한번 확인해주세요');
        // } else {
        alert('구매완료!');
        this.props.history.push('/main');
        //   window.location.reload();
      });
  };

  //주소 변경 체크박스
  handleAddMyAddress = () => {
    if (this.state.add_my_address) {
      this.setState({
        add_my_address: 0,
      });
    } else {
      this.setState({
        add_my_address: 1,
      });
    }
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
    const totalPrice = this.state.cartItems?.reduce(
      (acc, cur) => acc + cur.total_price,
      0
    );
    console.log('sssss', this.state?.cartItems);
    console.log(this.state?.zoneCode, this.state?.fullAddress);
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
      <div className="cartComponent">
        <div className="orderWrap">
          <div className="orderTitle">
            <h2>주문서작성/결제🍹</h2>
            <ol>
              <li className="pageOn">
                <span>01</span>
                장바구니
                <span>▶</span>
              </li>
              <li>
                <span>02</span>
                주문서작성/결제
                <span>▶</span>
              </li>
              <li className="pageOn">
                <span>03</span>
                주문완료
                <span></span>
              </li>
            </ol>
          </div>
          <div className="cartContent">
            <form id="formCart" method="POST">
              <div className="cartContentList">
                <div className="orderTable">
                  <colgroup>
                    <col style={{ width: '50%' }}></col>
                    {/* <col></col> */}
                    <col style={{ width: '10%' }}></col>
                    <col style={{ width: '5%' }}></col>
                    <col style={{ width: '7%' }}></col>
                    <col style={{ width: '7%' }}></col>
                    <col style={{ width: '7%' }}></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>상품 금액</th>
                      <th>할인/적립</th>
                      <th>합계금액</th>
                      <th>배송비</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.cartItems ? (
                      this.state.cartItems.map((cartItem, index) => {
                        return (
                          <OrderItem
                            rowspan={
                              index === 0 ? this.state.cartItems.length : null
                            }
                            count={cartItem.quantity}
                            price={cartItem.product_price}
                            priceTotal={cartItem.total_price}
                            thumbnail={cartItem.product_thumbnail}
                            name={cartItem.product_name}
                            optionKey={cartItem.product_option_classification}
                            optionValue={cartItem.product_option_name}
                            id={cartItem.id}
                            onClickCheck={this.handleClickCheck}
                          />
                        );
                      })
                    ) : (
                      <tr>
                        <td>주문페이지가 빔 💀👻💩</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    )}
                  </tbody>
                </div>
              </div>
            </form>
            <div className="btnContinue">
              <a>
                <em> &lt; 장바구니 가기</em>
              </a>
            </div>
            <div className="priceSum">
              <div className="priceSumContent">
                <dl className="dl1">
                  <dt>
                    총<strong>{this.state.user?.length} </strong>개의 상품금액
                  </dt>
                  <dd>
                    <strong>{totalPrice}</strong>원
                  </dd>
                </dl>
                <span>
                  ➕
                  <img />
                </span>
                <dl className="dl2">
                  <dt> 배송비</dt>
                  <dd>
                    <strong>{totalPrice >= 30000 ? 0 : '2,500'}</strong>원
                  </dd>
                </dl>
                <span>
                  🔀
                  <img />
                </span>
                <dl className="dl3">
                  <dt>합계</dt>
                  <dd>
                    <strong className="dl3Amount">{totalPrice}</strong>원
                  </dd>
                </dl>
              </div>
            </div>
          </div>
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
                              value={this.state.user?.name}
                            />
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
                              value={this.state.user?.phone_number}
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
                              value={this.state.user?.email}
                            />
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
                              name="name"
                            />
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
                              name="postal_code"
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
                                name="delivery_address"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="상세주소"
                                name="detailed_address"
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
                              name="phone_number"
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
                              name="customor_message"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span className="important">◾ 회원정보반영</span>
                        </th>
                        <td>
                          <div className="divAddMyAddress">
                            <input
                              className="inputAddMyAddress"
                              type="checkbox"
                              id="add_my_address"
                              name="add_my_address"
                              onClick={this.handleAddMyAddress}
                            />
                            <label htmlFor="add_my_address">
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
                          <div className="memberWarning">{totalPrice}원</div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span className="important">배송비</span>
                        </th>
                        <td>
                          <div className="memberWarning">
                            {totalPrice >= 30000 ? 0 : '2,500'}원
                          </div>
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
                              name="point_used"
                            />
                            원
                          </div>
                          <div className="memberWarning">
                            {/* <input
                              type="checkbox"
                              id="mailing"
                              name="mailing"
                              onClick={this.handleMarketing}
                            />
                            <label htmlFor="mailing">전액 사용하기</label> */}
                            <span>
                              {' '}
                              (보유적립금 {this.state.user?.point}원)
                            </span>
                            {/* {this.props.point} */}
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span className="important">◾ 최종결제금액 </span>
                        </th>
                        <td>
                          <div className="memberWarning">
                            {totalPrice - this.state.point_used}원
                          </div>
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

          {/*          
          <OrderInfo
            point={this.state.user?.point}
            name={this.state.user?.name}
            phoneNumber={this.state.user?.phone_number}
            email={this.state.user?.email}
            point={this.state.user?.point}
          /> */}
        </div>
      </div>
    );
  }
}

export default Order;
