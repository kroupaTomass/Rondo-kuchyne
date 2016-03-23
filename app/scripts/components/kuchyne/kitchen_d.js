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
          <a id="kitchen_d" href="#animatedModal_d"><img src="images/kitchen/04.jpg" alt="" /></a>
          <div id="animatedModal_d">
              <div className="close-animatedModal_d">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně KLARA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně KLARA</h4>
      </div>
    );
  }
}

export default Kitchen_d;
