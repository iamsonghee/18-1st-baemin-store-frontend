import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import CartItem from './Components/CartItem/CartItem';
import OptionModal from './Components/OptionModal/OptionModal';
import './Cart.scss';

class Cart extends Component {
  state = {
    cartItems: null,
    selectedCartItems: {},
    isModal: false,
  };

  componentDidMount() {
    fetch('http://10.58.2.56:8000/order/cart', {
      headers: {
        Authorization: sessionStorage.access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        res.results.map((id, index) => (id.id = index));
        this.setState({
          cartItems: res.results,
        });
      });
  }

  handleDelete = () => {
    const { cartItems, selectedCartItems } = this.state;
    const sendDelete = cartItems
      .filter(product => selectedCartItems[product.id])
      .map(data => ({
        product_id: data.product_id,
        product_option_id: data.product_option_id,
        order_id: data.order_id,
      }));
    this.setState({
      cartItems: cartItems.filter(item => !selectedCartItems[item.id]),
    });
    fetch('http://10.58.2.56:8000/order/cart', {
      method: 'DELETE',
      headers: {
        Authorization: sessionStorage.access_token,
      },
      body: JSON.stringify({
        results: sendDelete,
      }),
    })
      .then(response => response.json())
      .then(alert('삭제되었습니다'));
  };

  handleClickCheck = id => {
    const { selectedCartItems } = this.state;
    this.setState({
      selectedCartItems: {
        ...selectedCartItems,
        [id]: !selectedCartItems[id],
      },
    });
  };

  orderSelected = () => {
    const { cartItems, selectedCartItems } = this.state;
    const sendSelected = cartItems
      .filter(product => selectedCartItems[product.id])
      .map(data => ({
        product_id: data.product_id,
        product_option_id: data.product_option_id,
      }));
    this.setState({
      cartItems: cartItems.filter(item => !selectedCartItems[item.id]),
    });
    fetch('http://10.58.2.56:8000/order/cart', {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.access_token,
      },
      body: JSON.stringify({
        results: sendSelected,
      }),
    })
      .then(response => response.json())
      .then(
        result =>
          result.message === 'SUCCESS' && this.props.history.push('/order')
      )
      .then(alert('구매 페이지로 이동합니다'));
  };

  orderAll = () => {
    const { cartItems } = this.state;
    const sendAll = cartItems.map(data => ({
      product_id: data.product_id,
      product_option_id: data.product_option_id,
    }));

    this.setState({
      cartItems: null,
    });
    fetch('http://10.58.2.56:8000/order/cart', {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.access_token,
      },
      body: JSON.stringify({
        results: sendAll,
      }),
    })
      .then(response => response.json())
      .then(
        result =>
          result.message === 'SUCCESS' && this.props.history.push('/order')
      )
      .then(alert('구매 페이지로 이동합니다'));
  };

  handleModal = () => {
    this.setState({
      isModal: !this.state.isModal,
    });
  };

  render() {
    const {
      handleDelete,
      handleClickCheck,
      orderSelected,
      orderAll,
      handleModal,
    } = this;
    const { cartItems, selectedCartItems, isModal } = this.state;
    const total = cartItems
      ?.filter(item => selectedCartItems[item.id])
      .map(total => total.product_price * total.quantity);
    return (
      <div className="cart">
        {isModal && (
          <OptionModal handleModal={handleModal} cartItems={cartItems} />
        )}
        <div className="orderWrap">
          <div className="orderTitle">
            <h2>장바구니</h2>
            <ol>
              <li>
                <span>01</span>
                장바구니
                <span>
                  <img
                    alt="우측 화살표"
                    src="https://www.flaticon.com/svg/vstatic/svg/626/626045.svg?token=exp=1616545103~hmac=d2a3120ec7740e741d1cf8136a93bd24"
                  />
                </span>
              </li>
              <li className="pageOn">
                <span>02</span>
                주문서작성/결제
                <span>
                  <img
                    className="doneArrow"
                    alt="우측 화살표"
                    src="https://www.flaticon.com/svg/vstatic/svg/626/626045.svg?token=exp=1616545103~hmac=d2a3120ec7740e741d1cf8136a93bd24"
                  />
                </span>
              </li>
              <li className="pageOn">
                <span>03</span>
                주문완료
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
                  <thead style={{ display: !cartItems && 'none' }}>
                    <tr>
                      <th></th>
                      <th>상품/옵션 정보</th>
                      <th>수량</th>
                      <th>상품 금액</th>
                      <th>배송비</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems ? (
                      cartItems.map((cartItem, index) => (
                        <CartItem
                          key={cartItem.id}
                          id={cartItem.id}
                          rowspan={!index && cartItems.length}
                          img={cartItem.product_thumbnail}
                          count={cartItem.quantity}
                          price={cartItem.product_price}
                          name={cartItem.product_name}
                          optionKey={cartItem.product_option_classification}
                          optionValue={cartItem.product_option_name}
                          orderStatus={cartItem.order_status}
                          onClickCheck={handleClickCheck}
                          handleModal={handleModal}
                        />
                      ))
                    ) : (
                      <p>장바구니에 담겨있는 상품이 없습니다.</p>
                    )}
                  </tbody>
                </div>
              </div>
            </form>
            <div className="priceSum">
              <div className="priceSumContent">
                <dl className="dl1">
                  <dt>
                    총 <strong>{cartItems ? total?.length : 0}</strong> 개의
                    상품금액
                  </dt>
                  <dd>
                    <strong>
                      {cartItems
                        ? total?.length === 0
                          ? 0
                          : total?.reduce((a, b) => a + b).toLocaleString()
                        : 0}
                    </strong>
                    원
                  </dd>
                </dl>
                <span>
                  <img
                    className="sumImg"
                    alt="더하기 기호"
                    src="https://www.flaticon.com/svg/vstatic/svg/1828/1828919.svg?token=exp=1616546039~hmac=9ccc3c5e199c3aa6dc35bc938ca1b797"
                  />
                </span>
                <dl className="dl2">
                  <dt> 배송비</dt>
                  <dd>
                    <strong>
                      {cartItems
                        ? total?.length === 0
                          ? 0
                          : total?.reduce((a, b) => a + b) >= 30000
                          ? '0'
                          : '2,500'
                        : 0}
                    </strong>
                    원
                  </dd>
                </dl>
                <span>
                  <img
                    alt="등호"
                    src="https://www.flaticon.com/svg/vstatic/svg/261/261989.svg?token=exp=1616546424~hmac=1dc403aec5009b862c76aa7eeb743c21"
                  />
                </span>
                <dl className="dl3">
                  <dt> 합계</dt>
                  <dd>
                    <strong className="dl3Amount">
                      {cartItems
                        ? total?.length === 0
                          ? 0
                          : total?.reduce((a, b) => a + b) >= 30000
                          ? total?.reduce((a, b) => a + b).toLocaleString()
                          : (
                              total?.reduce((a, b) => a + b) + 2500
                            ).toLocaleString()
                        : 0}
                    </strong>
                    원
                  </dd>
                </dl>
              </div>
            </div>
            <div
              className="btnOrderBox"
              style={{ display: !cartItems && 'none' }}
            >
              <div className="btnLeftOrder">
                <button onClick={handleDelete}>선택상품 삭제</button>
                <button>선택상품 찜</button>
              </div>
              <div className="btnRightOrder">
                <button onClick={orderSelected}>선택상품 주문</button>
                <button onClick={orderAll}>전체상품 주문</button>
              </div>
            </div>
            <div
              className="checkPoint"
              style={{ display: !cartItems && 'none' }}
            >
              <em>
                <img
                  alt="주의"
                  src="https://www.flaticon.com/svg/vstatic/svg/87/87980.svg?token=exp=1616546588~hmac=511270859503ced14a4ea4e3dfbfa715"
                />{' '}
                주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
