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
          <a id="kitchen_h" href="#animatedModal_h"><img src="images/kitchen/01.jpg" alt="" /></a>
          <div id="animatedModal_h">
              <div className="close-animatedModal_h">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně LIZA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně LIZA</h4>
      </div>
    );
  }
}

export default Kitchen_h;
