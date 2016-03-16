import React from 'react';
import { Link } from 'react-router';

class Kitchen_a extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <div className="image_overlay">
            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo"><img src="images/kitchen/img/01/001.jpg" alt="" /></button>
          </div>
          <h2>Kuchyně</h2>
          <h4>moderní kuchyně EDITA</h4>
        </div>
              

        <div className="collapse" id="demo">aaa
        </div>
      </div>


    );
  }
}

export default Kitchen_a;
