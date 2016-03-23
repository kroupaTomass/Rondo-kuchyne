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
          <a id="kitchen_f" href="#animatedModal_f"><img src="images/kitchen/06.jpg" alt="" /></a>
          <div id="animatedModal_f">
              <div className="close-animatedModal_f">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně NELA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně NELA</h4>
      </div>
    );
  }
}

export default Kitchen_f;
