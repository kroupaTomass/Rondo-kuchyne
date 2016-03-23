import React from 'react';
import { Link } from 'react-router';

import Kuchyne_a from './kuchyne/kitchen_a.js';
import Kuchyne_b from './kuchyne/kitchen_b.js';
import Kuchyne_c from './kuchyne/kitchen_c.js';
import Kuchyne_d from './kuchyne/kitchen_d.js';
import Kuchyne_e from './kuchyne/kitchen_e.js';
import Kuchyne_f from './kuchyne/kitchen_f.js';
import Kuchyne_g from './kuchyne/kitchen_g.js';
import Kuchyne_h from './kuchyne/kitchen_h.js';

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
            <Kuchyne_d />
            <Kuchyne_e />
            <Kuchyne_f />
          </div>
          <div className="row pad_top">
            <Kuchyne_g />
            <Kuchyne_h />
            <div className="col-md-4 no_padding div-work-facebook">
              <img src="images/img_facebook_href.png" alt="Kuchyně RONDO" />
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
