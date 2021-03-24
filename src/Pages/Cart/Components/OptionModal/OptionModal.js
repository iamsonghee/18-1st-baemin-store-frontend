import React, { Component } from 'react';
import './OptionModal.scss';

class OptionModal extends Component {
  render() {
    const { handleModal, cartItems } = this.props;
    return (
      <div className="optionModal">
        <form>
          <header>
            <h4>옵션선택</h4>
            <span onClick={handleModal}>
              <img
                alt="닫기"
                src="https://www.flaticon.com/svg/vstatic/svg/748/748122.svg?token=exp=1616604719~hmac=7638be27a7846da7f6a08f0c08e39d03"
              />
            </span>
          </header>
          <main>
            <dl>
              <dt>
                <img src={cartItems[0].product_thumbnail} />
              </dt>
              <dd></dd>
            </dl>
          </main>
        </form>
      </div>
    );
  }
}

export default OptionModal;
