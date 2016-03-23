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
          <a id="kitchen_c" href="#animatedModal_c"><img src="images/kitchen/03.jpg" alt="" /></a>
          <div id="animatedModal_c">
              <div className="close-animatedModal_c">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně JOLANA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně JOLANA</h4>
      </div>
    );
  }
}

export default Kitchen_c;
