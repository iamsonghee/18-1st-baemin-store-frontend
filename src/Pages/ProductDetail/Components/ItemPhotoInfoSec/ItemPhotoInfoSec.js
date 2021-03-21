import React, { Component } from 'react';
import OptionArea from './Components/OptionArea';
import './ItemPhotoInfoSec.scss';

class ItemPhotoInfoSec extends Component {
  state = {
    showOptions: [],
  };

  increaseItem = e => {
    const { showOptions } = this.state;
    const findIndex = showOptions.findIndex(
      data => data.id === Number(e.target.name)
    );
    let updNum = [...showOptions];
    if (
      showOptions.find(data => data.id === Number(e.target.name)).counts ===
      showOptions.find(data => data.id === Number(e.target.name)).stock
    ) {
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
    let updNum = [...showOptions];
    Number(showOptions[findIndex].counts) <= 1
      ? (updNum[findIndex] = {
          ...updNum[findIndex],
          counts: 1,
        })
      : (updNum[findIndex] = {
          ...updNum[findIndex],
          counts: updNum[findIndex].counts - 1,
        });
    this.setState({ showOptions: updNum });
  };

  inputItemCounts = e => {
    const { showOptions } = this.state;
    let onlyNum = /^[0-9]*$/;
    const findIndex = showOptions.findIndex(
      data => data.id === Number(e.target.name)
    );
    let updNum = [...showOptions];
    if (onlyNum.test(e.target.value) && Number(e.target.value) !== 0) {
      if (
        Number(e.target.value) >
        showOptions.find(data => data.id === Number(e.target.name)).stock
      ) {
        alert('선택 가능한 수량을 초과했습니다');
        return;
      }
      updNum[findIndex] = {
        ...updNum[findIndex],
        counts: Number(e.target.value),
      };
      this.setState({ showOptions: updNum });
    }
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

  render() {
    const {
      inputItemCounts,
      increaseItem,
      decreaseItem,
      addOption,
      deleteOption,
    } = this;
    const { showOptions } = this.state;
    const { name, img, price, sale, options } = this.props;
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
    const opName = options && options[0].option_classification;
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
                  {(price * (100 - sale)) / 100 >= 30000
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
              style={{ display: options?.length === 0 && 'none' }}
            >
              <dt>{opName}</dt>
              <dd>
                <select value={`${opName} / 가격 / 재고`} onChange={addOption}>
                  <option>{opName} / 가격 / 재고</option>
                  {optionList}
                </select>
              </dd>
            </dl>
          </div>
          <div className="optionContainer">
            {showOptions.map(opt => (
              <OptionArea
                key={opt.id}
                id={opt.id}
                name={opt.name}
                priceAdd={opt.priceAdd}
                stock={opt.stock}
                counts={opt.counts}
                price={price}
                sale={sale}
                inputItemCounts={inputItemCounts}
                increaseItem={increaseItem}
                decreaseItem={decreaseItem}
                deleteOption={deleteOption}
              />
            ))}
          </div>
          <div
            className="itemPriceContainer"
            style={{ display: showOptions.length === 0 && 'none' }}
          >
            <dl className="totalAmount">
              <dt>총 합계금액</dt>
              <dd>
                <strong class="totalPrice">
                  {this.totalSum(totalArray).toLocaleString()}
                  <b>원</b>
                </strong>
              </dd>
            </dl>
          </div>
          <div className="btnChoiceBox">
            <button
              id="wishBtn"
              onClick={() => alert('찜리스트에 등록되었습니다.')}
            />
            <button id="cartBtn">장바구니</button>
            <button id="orderBtn" onClick={() => alert('구매 완료되었습니다.')}>
              바로 구매
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhotoInfoSec;
