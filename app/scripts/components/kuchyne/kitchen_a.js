import React from 'react';
import { Link } from 'react-router';

class Kitchen_a extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding div-gallery-kitchen">
        <div className="single_image">
          <a id="kitchen_a" href="#animatedModal_a"><img src="images/kitchen/img/01/001.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_a">
            <div className="close-animatedModal_a" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Moderní kuchyně</h4>
              <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/001.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/002.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/003.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/006.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/005.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/008.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/007.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/01/004.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně</h4>
      </div>
    );
  }
}

export default Kitchen_a;
