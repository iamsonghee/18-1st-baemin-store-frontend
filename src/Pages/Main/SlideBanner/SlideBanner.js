import React, { Component } from 'react';
import './SlideBanner.scss';

class SlideBanner extends Component {
  render() {
    return (
      <div className="slideBanner">
        <div className="images">
          <img className="item showing" src="/Images/slide1.png"></img>
          <img className="item " src="/Images/slide2.png"></img>
          <img className="item " src="/Images/slide3.png"></img>
        </div>
      </div>
    );
  }
}

export default SlideBanner;
