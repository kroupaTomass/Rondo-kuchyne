import React from 'react';
import { Link } from 'react-router';

class Kitchen_f extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_f" href="#animatedModal_f"><img src="images/kitchen/img/06/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_f">
            <div className="close-animatedModal_f" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Moderní kuchyně</h4>
              <div className="row">
                <div className="col-md-4">
                  Základní informace o kuchyni
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/01.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/02.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/03.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/06.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/05.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/08.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/07.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/06/04.jpg" alt="" />
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

export default Kitchen_f;
