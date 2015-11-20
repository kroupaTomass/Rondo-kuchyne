import React from 'react';
import { Link } from 'react-router';

class CallToAction extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="call_to_action">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wow fadeInLeft animated">
              <div className="left">
                <h2>LÍBÍ SE VÁM NAŠE PRODUKTY?</h2>
                <p>Plánujete stavbu nového bydlení nebo jenom renovaci toho původního, líbí se vám naše práce, pak není nic jednodužšího
                  než nás kontaktovat a my se vám ozveme zpět.</p>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 wow fadeInRight animated">
              <div className="baton">
                <a href="#CONTACT">
                  <button type="button" className="btn btn-primary cs-btn">Kontaktujte nás</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToAction;
