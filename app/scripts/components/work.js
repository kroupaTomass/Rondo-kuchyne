import React from 'react';
import { Link } from 'react-router';

import Kuchyne_a from './kuchyne/kitchen_a.js';
import Kuchyne_b from './kuchyne/kitchen_b.js';
import Kuchyne_c from './kuchyne/kitchen_c.js';

class Work extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="work_area" id="WORK">      
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="work_title  wow fadeInUp animated">
                <h1>Ukázka realizací</h1>
                <img src="images/shape.png" alt="" />
                <p>Ukázka realizací, které jsme v poslední době navrhli a vyrobili pro naše zákazníky přesně podle jejich představ.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Kuchyne_a />
            <Kuchyne_b />
            <Kuchyne_c />
          </div>
          <div className="row pad_top">
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/04.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">Více informací</a>
                  <h2>Obýváková stěna</h2>
                  <h4>vybavení obývací místnosti</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/05.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">View Full Project</a>
                  <h2>drawing</h2>
                  <h4>with pencil colors</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image last_padding">
                <img src="images/kitchen/06.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">View Full Project</a>
                  <h2>drawing</h2>
                  <h4>with pencil colors</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Work.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Work;
