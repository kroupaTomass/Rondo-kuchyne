import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div>
        <header id='HOME' className='header-background'>
          <div className='section_overlay'>
            <nav className='navbar navbar-default navbar-fixed-top'>
              <div className='container'>
                <div className='navbar-header'>
                  <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                    <span className='sr-only'>Navigace</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                  </button>
                  <a className='navbar-brand header-logo' href='#'><img src='images/kuchyne_rondo_150.png' alt='Rondo Kuchyně' /></a>
                </div>

                <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                  <ul className='nav navbar-nav navbar-right'>
                    <li><a href='#HOME'><img src='images/icon_home.png' alt='Rondo kuchyně - HOME' className='iconHome' /></a></li>
                    <li><a href='#SERVICE'>Jak na to?</a></li>
                    <li><a href='#ABOUT'>O nás</a></li>
                    <li><a href='#TESTIMONIAL'>Reference</a></li>
                    <li><a href='#WORK'>Realizace</a></li>
                    <li><a href='#CONTACT'>Kontakt</a></li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className='container'>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <div className='home_text wow fadeInUp animated'>
                    <h1 id='header-h-hide'>Rondo kuchyně</h1>
                    <img src='images/kuchyne_rondo_big.png' alt='Kuchyně Rondo' id="img-header-logo" />
                    <p id="p-header-motto">Kuchyně s elegancí</p>
                    <img src='images/shape.png' alt='' />
                    <div className='scroll_down' id='div-icon-scroll'>
                      <a href='#SERVICE'><img src='images/scroll.png' alt='' /></a>
                      <h4>Chtějte pro váš domov poctivou českou kvalitu<br />Kuchyně Rondo vám ji zaručí</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;

/*
body{
    margin:0;
}
header {
    position: relative;
    overflow: hidden;
    width:100vw;
    height:100vh;
    max-height:100vh;
    text-align:center;
}
div {
    position:absolute;
    height:100%;
    width:200%;
    left:-50%;
}
video {
    height:auto;
    min-height:100%;
    min-width:50%;
}

<video autoplay loop muted>
  <source src="http://demosthenes.info/assets/videos/polina.webm" type="video/webm" />
  <source src="http://demosthenes.info/assets/videos/polina.mp4" type="video/mp4" />
</video>*/

/*<nav className="clearfix">
  <div className="nav-item">
    <Link to="home">Home</Link>
  </div>
  <div className="nav-item">
    <Link to="info">Info</Link>
  </div>
</nav>*/
