import React, { Component } from 'react';
import './Order.scss';
import OrderInfo from './OrderInfo';
import OrderItem from './OrderItem';
import DaumPostcode from 'react-daum-postcode';
import product1 from './product1.JPG';

class Order extends Component {
  state = {
    cartItems: null,
    user: null,
    seletedCartItems: {},
  };

  handleDelete = () => {
    this.setState({
      cartItems: this.state.cartItems.filter(
        item => !this.state.seletedCartItems[item.id]
      ),
    });

    const selectedCartItems = Object.entries(
      this.state.seletedCartItems
    ).reduce((acc, { key, value }) => {
      if (value) {
        return acc;
      }

      return {
        ...acc,
        [key]: value,
      };
    }, {});
  };

  handleClickCheck = id => {
    this.setState({
      seletedCartItems: {
        ...this.state.seletedCartItems,
        [id]: !this.state.seletedCartItems[id],
      },
    });
  };

  componentDidMount() {
    fetch('http://10.58.2.56:8000/order', {
      // method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.wlCljldMPYhX12CrF2N1-nCSvDqf_HXKYFd68gFQPVY',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          cartItems: res.products,
          user: res.user,
        });
      });
  }

  render() {
    return (
      <div className="cartComponent">
        <div className="orderWrap">
          <div className="orderTitle">
            <h2>주문서작성/결제</h2>
            <ol>
              <li className="pageOn">
                <span>01</span>
                장바구니
                <span>
                  ▶
                  <img src="" />
                </span>
              </li>
              <li>
                <span>02</span>
                주문서작성/결제
                <span>
                  ▶
                  <img src="" />
                </span>
              </li>
              <li className="pageOn">
                <span>03</span>
                주문완료
                <span>
                  <img src="" />
                </span>
              </li>
            </ol>
          </div>
          <div className="cartContent">
            <form id="formCart" method="POST">
              <div className="cartContentList">
                <div className="orderTable">
                  <colgroup>
                    <col style={{ width: '3%' }}></col>
                    <col></col>
                    <col style={{ width: '5%' }}></col>
                    <col style={{ width: '10%' }}></col>
                    <col style={{ width: '13%' }}></col>
                    <col style={{ width: '10%' }}></col>
                    <col style={{ width: '10%' }}></col>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <div className="formElement">
                          <input type="checkbox" />
                          <label></label>
                        </div>
                      </th>
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>상품 금액</th>
                      <th>할인/적립</th>
                      <th>합계금액</th>
                      {/* <th class="dn">할인/적립</th>
                      <th class="dn">합계금액</th> */}
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
                            price={cartItem.total_price}
                            name={cartItem.product_name}
                            id={cartItem.id}
                            onClickCheck={this.handleClickCheck}
                          />
                        );
                      })
                    ) : (
                      <p>주문페이지가 빔</p>
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
                    총<strong>2 </strong>개의 상품금액
                  </dt>
                  <dd>
                    <strong>34,900</strong>원
                  </dd>
                </dl>
                <span>
                  ➕
                  <img />
                </span>
                <dl className="dl2">
                  <dt> 배송비</dt>
                  <dd>
                    <strong>0</strong>원
                  </dd>
                </dl>
                <span>
                  🔀
                  <img />
                </span>
                <dl className="dl3">
                  <dt>합계</dt>
                  <dd>
                    <strong className="dl3Amount">34,900</strong>원
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <OrderInfo point={this.state.user?.point} />
          {/* point={this.state.user.point} */}
        </div>
      </div>
    );
  }
}

export default Order;
