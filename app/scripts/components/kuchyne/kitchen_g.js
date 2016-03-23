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
          <a id="kitchen_g" href="#animatedModal_g"><img src="images/kitchen/01.jpg" alt="" /></a>
          <div id="animatedModal_g">
              <div className="close-animatedModal_g">
                  CLOSE MODAL
              </div>
              <div className="modal-content">
              moderní kuchyně PETRA
              </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně PETRA</h4>
      </div>
    );
  }
}

export default Kitchen_g;
