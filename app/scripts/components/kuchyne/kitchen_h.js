import React from 'react';
import { Link } from 'react-router';

class Kitchen_h extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_h" href="#animatedModal_h"><img src="images/kitchen/img/08/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_h">
            <div className="close-animatedModal_h" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Koupelna</h4>
              <div className="row">
                <div className="col-md-4">
                  Základní informace o koupelně
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/08/02.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/08/04.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/08/03.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/08/01.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
        <h2>Koupelna</h2>
        <h4>Kompletní vybavení vaší koupelny</h4>
      </div>
    );
  }
}

export default Kitchen_h;
