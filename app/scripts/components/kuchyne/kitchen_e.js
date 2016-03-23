import React from 'react';
import { Link } from 'react-router';

class Kitchen_e extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_e" href="#animatedModal_e"><img src="images/kitchen/05.jpg" alt="" /></a>
          <div id="animatedModal_e">
              <div className="close-animatedModal_e">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně LIDA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně LIDA</h4>
      </div>
    );
  }
}

export default Kitchen_e;
