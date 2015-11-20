import React from 'react';
import Scroll from 'scrollReveal';

class Contact extends React.Component{

  constructor(props, context) {
   super(props);
  }


  componentDidMount() {
    window.sr = new scrollReveal();
  }

  render() {
    return (
      <section className="contact" id="CONTACT">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="contact_title  wow fadeInUp animated">
                <h1>Kontakt</h1>
                <img src="images/shape.png" alt="" />
                <p>Přijďte si nahlédnout do našeho showroomu, kde pro vás máme vystavených několik kuchyní různých typů.
                  <br />Náš odborný personál se vám bude maximálně věnovat a poradí vám ve všem ohledně kuchyní.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3  wow fadeInLeft animated">
              <div className="single_contact_info">
                <h2>Telefon</h2>
                <p>+420 724 753 951</p>
              </div>
              <div className="single_contact_info">
                <h2>E-mail</h2>
                <p>info@rondokuchyne.cz</p>
              </div>
              <div className="single_contact_info">
                <h2>Sídlo společnosti</h2>
                <p>...
                <br />
                370 06 Dobrá Voda
                </p>
              </div>
            </div>
            <div className="col-md-9 wow fadeInRight animated">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1104.811128243319!2d14.512469512818517!3d48.97152424537333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1scs!2scz!4v1447617790271"
              className="contact-google-map" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="work-with wow fadeInUp animated">
                <h3>Jsme tu pro Vás!</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
