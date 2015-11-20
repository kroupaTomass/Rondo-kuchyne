  import React from 'react';
  import Scroll from 'scrollReveal';

  class Testimonial extends React.Component{

    constructor(props, context) {
     super(props);
    }

    componentDidMount() {
      window.sr = new scrollReveal();
    }

    render() {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="about_title">
                  <h2>Ohlas od našich zákazníků</h2>
                  <img src="images/shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <section className="testimonial text-center wow fadeInUp animated" id="TESTIMONIAL">
            <div className="container">
              <div className="icon">
                <i className="icon-quote"></i>
              </div>
              <div className="owl-carousel">
                <div className="single_testimonial text-center wow fadeInUp animated">
                  <p>Velmi kvalitně odvedená práce, kvalitní materiál a výborná komunikace.
                    <br/> Těším se na další spolupráci.</p>
                  <h4>-Josef Koblížek</h4>
                </div>
                <div className="single_testimonial text-center">
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                    eius
                    <br/> modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                  <h4>-JOHN SMITH</h4>
                </div>
              </div>
            </div>
          </section>
          <div className="fun_facts">
            <section className="header parallax home-parallax page testimonial-width" id="fun_facts">
              <div className="section_overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 wow fadeInLeft animated">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="single_count">
                            <i className="icon-toolbox"></i>
                            <h3>300+</h3>
                            <p>Dokončených projektů</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single_count">
                            <i className="icon-clock"></i>
                            <h3>150+</h3>
                            <p>Spokojených zákazníků</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single_count">
                            <i className="icon-trophy"></i>
                            <h3>9</h3>
                            <p>Zaměstnanců</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-md-offset-1 wow fadeInRight animated">
                      <div className="imac">
                        <img src="images/imac.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }

  export default Testimonial;
