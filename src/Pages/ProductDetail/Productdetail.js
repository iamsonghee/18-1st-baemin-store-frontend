import React, { Component } from 'react';
import ItemPhotoInfoSec from './Components/ItemPhotoInfoSec/ItemPhotoInfoSec';
import ItemGoodsTab from './Components/ItemGoodsTab/ItemGoodsTab';
import TableElements from './Components/TableElements/TableElements';
import Review from './Components/Review/Review';
import './Productdetail.scss';

class Productdetail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], reviews: [] };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res,
        })
      );
  }

  render() {
    const {
      name,
      img,
      price,
      isSale,
      detailImg,
      sale,
      option,
      options,
    } = this.state.data;
    return (
      <div className="productDetail">
        <ItemPhotoInfoSec
          name={name}
          img={img}
          price={price}
          isSale={isSale}
          sale={sale}
          option={option}
          options={options}
        />
        <section className="itemGoodsSec">
          <div id="detail">
            <ItemGoodsTab />
            <div className="detailContainer">
              <h3>상품상세정보</h3>
              <img src={detailImg} alt={`${name}의 상세정보`} />
              <h3>상품필수 정보</h3>
              <table className="productDetailTable">
                <tbody>
                  <TableElements />
                </tbody>
              </table>
            </div>
          </div>
          <div id="delivery">
            <ItemGoodsTab />
            <h3>배송안내</h3>
            <p>· 배송사 : CJ대한통운</p>
            <p>· 배송비 : 2,500원 (3만원 이상 구매 시 무료배송)</p>
            <p className="needSpace">
              도서, 산간 일부지역은 배송비가 추가될 수 있습니다.
            </p>
            <p>· 배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</p>
            <p>&nbsp;</p>
            <p>
              단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로
              소요될 수 있는 점 양해 부탁드립니다.
            </p>
          </div>
          <div id="exchange">
            <ItemGoodsTab />
            <h3>교환 및 반품안내</h3>
            <p>
              · 주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다.
            </p>
            <p>&nbsp;&nbsp;- 마이페이지에서 취소 또는 변경하실 수 있습니다.</p>
            <p>
              · "상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.
            </p>
            <p>&nbsp;</p>
            <p>· 교환 및 반품은 배송완료 후 7일 이내에 가능합니다.</p>
            <p>
              &nbsp;&nbsp;- 단, 재화 등의 내용이 표시, 광고 내용과 다르거나
              계약내용을 다르게 이행한 경우에는 재화 등을 공급받은 날로부터
              3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에
              교환 및 반품이 가능합니다.
            </p>
            <p>&nbsp;</p>
            <p>· 다음의 경우 교환 및 반품이 불가합니다.</p>
            <p>
              &nbsp;&nbsp;- 구매자에게 책임 있는 사유로 재화 등이 멸실 또는
              훼손된 경우
            </p>
            <p>
              &nbsp;&nbsp;- 구매자의 사용 또는 일부 소비에 의해 재화 등의 가치가
              현저히 감소한 경우
            </p>
            <p>
              &nbsp;&nbsp;- 복제가 가능한 재화 등의 포장을 훼손한
              경우(CD/DVD/GAME/도서의 경우 포장 개봉 시)
            </p>
            <p>
              &nbsp;&nbsp;- 시간 경과에 의하여 재판매가 곤란할 정도로 상품의
              가치가 현저히 감소한 경우
            </p>
            <p>&nbsp;&nbsp;- 고객의 주문에 따라 개별 생산되는 상품의 경우</p>
            <p>&nbsp;</p>
            <p>
              · 상품의 불량/하자 및 표시광고 및 계약 내용이 다른 경우 해당
              상품의 회수 비용은 무료입니다.
            </p>
            <p>
              · 고객님의 단순변심에 의한 교환/반품일 경우에는 교환/반품
              배송비(왕복 배송비) 5,000원을 고객님께서 부담하셔야 합니다.
            </p>
            <p>&nbsp;</p>
            <p>
              · 반송지 : 우)10846 경기 파주시 탄현면 축현리 241-4 배민문방구
              물류센터
            </p>
            <h3>환불안내</h3>
            <p>
              · 주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7
              영업일 이내 환불됩니다.
            </p>
            <h3>AS안내</h3>
            <p>
              · 제품에 문제가 있으신 경우, 배민문방구 고객센터로 접수해주시면
              안내 도와드리겠습니다.
            </p>
            <p>
              · 배민문방구에서 발생한 문제는 소비자분쟁해결 기준(공정거래위원회
              고시)에 따라 피해를 보상받을 수 있습니다.
            </p>
          </div>
          <div id="reviews">
            <ItemGoodsTab />
            <h3>상품후기</h3>
            <Review />
          </div>
          <div id="qna">
            <ItemGoodsTab />
            <h3>상품문의</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default Productdetail;
