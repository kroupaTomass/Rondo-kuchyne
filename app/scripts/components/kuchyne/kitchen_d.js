import React from 'react';
import { Link } from 'react-router';

class Kitchen_d extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_d" href="#animatedModal_d"><img src="images/kitchen/img/04/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_d">
            <div className="close-animatedModal_d" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Moderní kuchyně</h4>
              <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/01.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/02.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/04.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/06.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/05.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/08.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/07.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/04/03.jpg" alt="" />
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

export default Kitchen_d;
