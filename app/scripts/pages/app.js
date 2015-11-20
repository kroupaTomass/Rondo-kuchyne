import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.js';
import About from '../components/about.js';
import Testimonial from '../components/testimonial.js';
import Footer from '../components/footer.js';
import Contact from '../components/contact.js';
import Work from '../components/work.js';
import CallToAction from '../components/callToAction.js';

import SectionService from '../components/service.js';

class App extends React.Component {
  componentDidMount() {
    window.sr = new scrollReveal();
  }

  render() {
    return (
      <div>
        <Header />
        <SectionService />
        <About />
        <Testimonial />
        <Work />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    );
  }

}

export default App;
