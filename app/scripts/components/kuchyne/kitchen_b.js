import React from 'react';
import { Link } from 'react-router';

class Kitchen_b extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <a id="kitchen_b" href="#animatedModal_b"><img src="images/kitchen/02.jpg" alt="" /></a>
          <div id="animatedModal_b">
            <div className="close-animatedModal_b">
                 CLOSE MODAL
             </div>
             <div className="modal-content">
                 moderní kuchyně BELA
             </div>
          </div>
        </div>
        <h2>Kuchyně</h2>
        <h4>moderní kuchyně BELA</h4>
      </div>
    );
  }
}

export default Kitchen_b;
