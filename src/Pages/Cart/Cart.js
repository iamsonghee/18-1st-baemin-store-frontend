import React, { Component } from 'react';
import CartItem from './Components/CartItem/CartItem';
import OptionModal from './Components/OptionModal/OptionModal';
import { CARTAPI } from '../../config';
import './Cart.scss';

class Cart extends Component {
  state = {
    cartItems: null,
    selectedCartItems: {},
    isModal: false,
  };

  componentDidMount() {
    fetch(CARTAPI, {
      headers: {
        Authorization: sessionStorage.access_token,
      },
    })
      .then(res => res.json())
      .then(res => {
        res.results?.map((id, index) => (id.id = index));
        this.setState({
          cartItems: res.results,
        });
      });
    window.scrollTo(0, 0);
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
    sendDelete.length === 0
      ? alert('상품을 선택해주세요')
      : fetch(CARTAPI, {
          method: 'DELETE',
          headers: {
            Authorization: sessionStorage.access_token,
          },
          body: JSON.stringify({
            selected_products: sendDelete,
          }),
        }).then(res => res.status === 204 && alert('삭제되었습니다'));
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
    sendSelected.length === 0
      ? alert('상품을 선택해주세요')
      : fetch(CARTAPI, {
          method: 'PATCH',
          headers: {
            Authorization: sessionStorage.access_token,
          },
          body: JSON.stringify({
            selected_products: sendSelected,
          }),
        })
          .then(response => response.json())
          .then(result => {
            if (result.message === 'SUCCESS') {
              alert('구매 페이지로 이동합니다');
              this.props.history.push('/order');
            }
          });
  };

  orderAll = () => {
    const { cartItems } = this.state;
    const sendAll = cartItems.map(data => ({
      product_id: data.product_id,
      product_option_id: data.product_option_id,
    }));
    alert('구매 페이지로 이동합니다');
    fetch(CARTAPI, {
      method: 'PATCH',
      headers: {
        Authorization: sessionStorage.access_token,
      },
      body: JSON.stringify({
        selected_products: sendAll,
      }),
    })
      .then(response => response.json())
      .then(
        result =>
          result.message === 'SUCCESS' && this.props.history.push('/order')
      );
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
                  <i class="fas fa-long-arrow-alt-right"></i>
                </span>
              </li>
              <li className="pageOn">
                <span>02</span>
                주문서작성/결제
                <span>
                  <i class="fas fa-long-arrow-alt-right"></i>
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
                  <i class="fas fa-plus-circle"></i>
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
                  <i class="fas fa-equals"></i>
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
                <i class="fas fa-exclamation"></i> 주문서 작성단계에서
                할인/적립금 적용을 하실 수 있습니다.
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
