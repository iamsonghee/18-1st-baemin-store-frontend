import React, { Component } from 'react';
import './SlideBanner.scss';

class SlideBanner extends Component {
  state = { intervalId: null };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.change();
    }, 3000);
    this.setState({ intervalId });
  }

  change = () => {
    const test = document.getElementsByClassName('showing');
    if (test[0].nextSibling !== null) {
      const next = test[0].nextSibling;
      next.classList.add('showing');
      test[0].classList.remove('showing');
    } else {
      test[0].classList.remove('showing');
      document.getElementsByClassName('sitem')[0].classList.add('showing');
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="slideBanner">
        <div className="images">
          <img className="sitem showing" src="/Images/slide1.png" />
          <img className="sitem " src="/Images/slide3.png" />
          <img className="sitem " src="/Images/slide2.png" />
        </div>
      </div>
    );
  }
}

export default SlideBanner;
