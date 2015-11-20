import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="about_us_area" id="ABOUT">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="about_title">
                <h2>O nás</h2>
                <img src="images/shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  wow fadeInLeft animated">
              <div className="single_progress_bar">
                <h2>DESIGN - 90%</h2>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div className="single_progress_bar">
                <h2>DEVELOPMENT - 60%</h2>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div className="single_progress_bar">
                <h2>MARKETING - 75%</h2>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
              <div className="single_progress_bar">
                <h2>SEO - 95%</h2>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">60% Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Sed quia non numquam eius modi tempora.</p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;
