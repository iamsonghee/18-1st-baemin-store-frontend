import React, { Component } from 'react';
import './Wishlist.scss';
import WishlistItem from './WishlistItem';
import product1 from './product1.JPG';

class Wishlist extends Component {
  state = {
    wishlistItems: [],
    seletedWishlistItems: {},
  };

  handleDelete = () => {
    this.setState({
      wishlistItems: this.state.wishlistItems.filter(
        item => !this.state.seletedWishlistItems[item.id]
      ),
    });

    const selectedwishlistItems = Object.entries(
      this.state.seletedWishlistItems
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
      seletedWishlistItems: {
        ...this.state.seletedWishlistItems,
        [id]: !this.state.seletedWishlistItems[id],
      },
    });
  };

  // componentDidMount() {
  //   fetch('http://10.58.4.112:8000/order/wishlist')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log('페치', res.result);
  //       this.setState({
  //         wishlistItems: res.result,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch('http://10.58.7.238:8000/user/wishlist', {
      // method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.utPCtoLZIVza5JOceW67nglVDTtKboMPZ6VklHUDRIQ',
        // Authorization: sessionStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('페치', res);
        this.setState({
          wishlistItems: res.result,
        });
      });
  }

  render() {
    console.log('상위컴포넌트 렌더', this.state);
    console.log(this.state.wishlistItems[1]?.point);
    return (
      <div className="wishlistComponent">
        <div className="orderWrap">
          <div className="orderTitle">
            <h2>푸핫 반가워요, 찜💘리스트</h2>
            <p>
              적립금 : 무려
              <strong>
                {parseInt(this.state.wishlistItems[1]?.point).toLocaleString()}
              </strong>
              원
              {/* {parseInt(this.state.wishlistItems[1]?.point).toLocaleString()} */}
            </p>
            {/* <ol>
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
            </ol> */}
          </div>
          <div className="cartContent">
            <form id="formCart" method="POST">
              <div className="cartContentList">
                <div className="orderTable">
                  <colgroup>
                    <col style={{ width: '3%' }}></col>
                    <col style={{ width: '60%' }}></col>
                    <col style={{ width: '20%' }}></col>
                    <col style={{ width: '17%' }}></col>
                    {/* <col style={{ width: '13%' }}></col> */}
                    {/* <col style={{ width: '20%' }}></col> */}
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <div className="formElement">
                          <input type="checkbox" />
                          <label></label>
                        </div>
                      </th>
                      <th>상품명/옵션</th>
                      <th>상품금액/수량</th>
                      <th>합계</th>
                      {/* <th class="dn">할인/적립</th>
                      <th class="dn">합계금액</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.wishlistItems ? (
                      this.state.wishlistItems.map(wishlistItem => {
                        return (
                          <WishlistItem
                            WishlistItems={this.state.WishlistItems}
                            // rowspan={
                            //   index === 0
                            //     ? this.state.wishlistItems.length
                            //     : null
                            // }
                            point={wishlistItem.point}
                            count={wishlistItem.quantity}
                            price={wishlistItem.product_price}
                            name={wishlistItem.product_name}
                            thumnail={wishlistItem.product_thumnail}
                            // id={wishlistItem.id}
                            onClickCheck={this.handleClickCheck}
                          />
                        );
                      })
                    ) : (
                      <p>장바구니가 비었습니다. 텅~</p>
                    )}
                  </tbody>
                </div>
              </div>
            </form>
            {/* <div className="btnContinue">
              <a>
                <em> &lt; 쇼핑 계속하기</em>
              </a>
            </div> */}
            {/* <div className="priceSum">
              <div className="priceSumContent">
                <dl className="dl1">
                  <dt>
                    총<strong>100 </strong>개의 상품금액
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
            */}
            <div className="btnOrderBox">
              <div className="btnLeftOrderEnd">
                <button onClick={this.handleDelete}>선택상품 삭제</button>
                <button>선택상품 장바구니</button>
              </div>
            </div>

            {/* <div className="checkPoint"> 
            <em>
                ❕ 주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.
              </em>
            </div>  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
