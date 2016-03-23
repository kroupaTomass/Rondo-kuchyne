import React from 'react';
import { Link } from 'react-router';

class Kitchen_c extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_c" href="#animatedModal_c"><img src="images/kitchen/img/03/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_c">
            <div className="close-animatedModal_c" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Moderní kuchyně</h4>
              <div className="row">
                <div className="col-md-4">
                  Základní informace o kuchyni
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/01.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/02.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/03.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/04.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/05.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/08.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/07.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/03/06.jpg" alt="" />
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

export default Kitchen_c;
