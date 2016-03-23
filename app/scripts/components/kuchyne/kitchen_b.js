import React from 'react';
import { Link } from 'react-router';

class Kitchen_b extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_b" href="#animatedModal_b"><img src="images/kitchen/img/02/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_b">
            <div className="close-animatedModal_b" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Moderní kuchyně</h4>
              <div className="row">
                <div className="col-md-4">
                  Základní informace o kuchyni
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/01.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/02.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/07.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/06.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/05.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/08.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/03.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/02/04.jpg" alt="" />
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

export default Kitchen_b;
