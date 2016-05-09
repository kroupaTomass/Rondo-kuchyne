import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="footer_logo wow fadeInUp animated">
                  <img src="images/kuchyne_rondo_white_big.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center   wow fadeInUp animated">
                <div className="social">
                  <h2>Sledujte nás</h2>
                  <ul className="icon_list">
                    <li><a href="https://www.facebook.com/kuchyneRondo/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="copyright_text   wow fadeInUp animated">
                  <p>&copy; Rondo kuchyně 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
