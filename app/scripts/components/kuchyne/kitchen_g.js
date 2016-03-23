import React from 'react';
import { Link } from 'react-router';

class Kitchen_g extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_g" href="#animatedModal_g"><img src="images/kitchen/img/07/01.jpg" alt="" /></a>
        </div>
        <div id="animatedModal_g">
            <div className="close-animatedModal_g" id="closebt-container">
                <img className="closebt" src="images/closebt.svg" />
            </div>
            <div className="modal-content div-kitchen-content">
              <h4>Dětský pokoj</h4>
              <div className="row">
                <div className="col-md-4">
                  Základní informace o kuchyni
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/07/02.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/07/05.jpg" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img src="images/kitchen/img/07/03.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/07/04.jpg" alt="" />
                </div>
                <div className="col-md-4">
                  <img src="images/kitchen/img/07/01.jpg" alt="" />
                </div>
              </div>
            </div>
        </div>
        <h2>Dětský pokoj</h2>
        <h4>vše pro vaše děti</h4>
      </div>
    );
  }
}

export default Kitchen_g;
