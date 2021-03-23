import React, { Component } from 'react';
import OptionArea from './Components/OptionArea';
import './ItemPhotoInfoSec.scss';

class ItemPhotoInfoSec extends Component {
  state = {
    showOptions: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.options.length === 0) {
      this.setState({ showOptions: [this.props] });
    }
  }

  increaseItem = e => {
    const { showOptions } = this.state;
    const findIndex = showOptions.findIndex(
      data => data.id === Number(e.target.name)
    );
    const updNum = [...showOptions];
    const foundObj = showOptions.find(
      data => data.id === Number(e.target.name)
    );
    if (foundObj.counts === foundObj.stock) {
      alert('선택 가능한 수량을 초과했습니다');
      return;
    } else {
      updNum[findIndex] = {
        ...updNum[findIndex],
        counts: updNum[findIndex].counts + 1,
      };
      this.setState({ showOptions: updNum });
    }
  };

  decreaseItem = e => {
    const { showOptions } = this.state;
    const findIndex = showOptions.findIndex(
      data => data.id === Number(e.target.name)
    );
    if (showOptions[findIndex].counts <= 1) return;
    const updNum = [...showOptions];
    updNum[findIndex].counts = updNum[findIndex].counts - 1;
    this.setState({ showOptions: updNum });
  };

  inputItemCounts = e => {
    const { showOptions } = this.state;
    const onlyNum = /^[0-9]*$/;
    const findIndex = showOptions.findIndex(
      data => data.id === Number(e.target.name)
    );
    const updNum = [...showOptions];
    const foundObj = showOptions.find(
      data => data.id === Number(e.target.name)
    );
    if (!onlyNum.test(e.target.value) && Number(e.target.value) === 0) return;
    if (Number(e.target.value) > foundObj.stock) {
      alert('선택 가능한 수량을 초과했습니다');
      return;
    }
    updNum[findIndex] = {
      ...updNum[findIndex],
      counts: Number(e.target.value),
    };
    this.setState({ showOptions: updNum });
  };

  addOption = e => {
    let check = false;
    const { options } = this.props;
    const { showOptions } = this.state;
    const optionData = options.filter(
      option => option.option_name === e.target.value
    )[0];
    const newItem = {
      id: optionData.product_option_id,
      name: optionData.option_name,
      priceAdd: optionData.option_additional_price,
      stock: optionData.option_stock,
      counts: 1,
    };
    showOptions.forEach(option => {
      if (option.id === newItem.id) {
        alert('이미 선택된 옵션입니다');
        check = true;
        return;
      }
    });
    if (check) return false;
    this.setState({
      showOptions: [...showOptions, newItem],
    });
  };

  deleteOption = e => {
    const restOptions = this.state.showOptions.filter(
      data => data.id !== Number(e.target.id)
    );
    this.setState({ showOptions: restOptions });
  };

  totalSum = data => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  };

  sendData = () => {
    const { showOptions } = this.state;
    const { id } = this.props;
    const opsData = showOptions.map(data => ({
      product_id: id,
      quantity: 0,
      product_option_id: data.id,
      product_option_quantity: data.counts,
    }));
    this.props.options.length === 0
      ? fetch('http://10.58.2.56:8000/order/cart', {
          method: 'POST',
          body: JSON.stringify({
            results: [
              {
                product_id: id,
                quantity: showOptions[0].counts,
                product_option_id: '',
                product_option_quantity: '',
              },
            ],
          }),
        })
          .then(response => response.json())
          .then(result => console.log('결과 : ', result))
      : fetch('http://10.58.2.56:8000/order/cart', {
          method: 'POST',
          body: JSON.stringify({ results: opsData }),
        })
          .then(response => response.json())
          .then(result => console.log('결과 : ', result));
  };

  render() {
    const {
      inputItemCounts,
      increaseItem,
      decreaseItem,
      addOption,
      deleteOption,
      totalSum,
      sendData,
    } = this;
    const { showOptions } = this.state;
    const { id, name, img, price, sale, stock, options } = this.props;
    const optionList = options?.map(optionList => (
      <option
        key={optionList.product_option_id}
        value={optionList.option_name}
        disabled={optionList.option_stock === 0 && true}
      >
        {`${optionList.option_name}  ${
          optionList.option_additional_price === 0
            ? `(재고 : ${optionList.option_stock})`
            : `(+${optionList.option_additional_price.toLocaleString()}원 / 재고 : ${
                optionList.option_stock
              })`
        }`}
      </option>
    ));
    const opName = options && options[0]?.option_classification;
    const totalArray = showOptions.map(
      data => ((price * (100 - sale)) / 100 + data.priceAdd) * data.counts
    );
    return (
      <div className="itemPhotoInfoSec">
        <div className="itemPhotoViewBox">
          <img src={img} alt={`${name}의 이미지`} />
        </div>
        <div className="itemInfoBox">
          <h3>{name}</h3>
          <div className="itemDetailList">
            <dl className="netPrice" style={{ display: sale === 0 && 'none' }}>
              <dt>정가</dt>
              <dd>
                <del>{price?.toLocaleString()}원</del>
              </dd>
            </dl>
            <dl className="itemPrice">
              <dt>판매가격</dt>
              <dd>
                <strong>
                  {((price * (100 - sale)) / 100).toLocaleString()}
                </strong>
                원
              </dd>
            </dl>
            <dl className="itemDelivery">
              <dt>배송정보</dt>
              <dd>
                <strong>
                  {this.totalSum(totalArray) >= 30000
                    ? 0
                    : (2500).toLocaleString()}
                  원
                </strong>
                <span>(3만원 이상 구매 시 무료)</span>
                <p>오후 2시 당일배송마감</p>
              </dd>
            </dl>
            <dl
              className="itemAddOptionBox"
              style={{
                display: options?.length === 0 && 'none',
              }}
            >
              <dt style={{ display: stock === 0 && 'none' }}>{opName}</dt>
              <dd>
                <select
                  value={`${opName} / 가격 / 재고`}
                  style={{ display: stock === 0 && 'none' }}
                  onChange={addOption}
                >
                  <option>{opName} / 가격 / 재고</option>
                  {optionList}
                </select>
              </dd>
            </dl>
          </div>
          <div
            className="optionContainer"
            style={{ display: stock === 0 && 'none' }}
          >
            {options?.length !== 0
              ? showOptions.map(opt => (
                  <OptionArea
                    key={opt.id}
                    id={opt.id}
                    name={opt.name}
                    stock={opt.stock}
                    counts={opt.counts}
                    priceAdd={opt.priceAdd}
                    price={price}
                    sale={sale}
                    inputItemCounts={inputItemCounts}
                    increaseItem={increaseItem}
                    decreaseItem={decreaseItem}
                    deleteOption={deleteOption}
                  />
                ))
              : showOptions[0] && (
                  <OptionArea
                    id={id}
                    name={name}
                    stock={stock}
                    counts={showOptions[0].counts}
                    price={price}
                    sale={sale}
                    options={options}
                    inputItemCounts={inputItemCounts}
                    increaseItem={increaseItem}
                    decreaseItem={decreaseItem}
                    deleteOption={deleteOption}
                  />
                )}
          </div>
          <div
            className="itemPriceContainer"
            style={{ display: showOptions.length === 0 && 'none' }}
          >
            <dl
              className="totalAmount"
              style={{ display: stock === 0 && 'none' }}
            >
              <dt>총 합계금액</dt>
              <dd>
                <strong class="totalPrice">
                  {options && options.length === 0
                    ? (
                        ((price * (100 - sale)) / 100) *
                        showOptions[0]?.counts
                      ).toLocaleString()
                    : totalSum(totalArray).toLocaleString()}
                  <b>원</b>
                </strong>
              </dd>
            </dl>
          </div>
          <div
            className="btnChoiceBox"
            style={{ display: stock === 0 && 'none' }}
          >
            <button
              id="wishBtn"
              onClick={() => alert('찜리스트에 등록되었습니다.')}
            />
            <button id="cartBtn">장바구니</button>
            <button id="orderBtn" onClick={sendData}>
              바로 구매
            </button>
          </div>
          <div
            className="soldOutBtnBox"
            style={{ display: stock !== 0 && 'none' }}
          >
            SOLD OUT
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhotoInfoSec;
