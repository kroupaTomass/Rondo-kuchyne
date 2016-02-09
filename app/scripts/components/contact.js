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
      <section className="contact contact-background-map" id="CONTACT">
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
        <div className="container contact-text-center">
          <div className="row">
            <div className="col-md-3 wow fadeInLeft animated">
              <div className="single_contact_info">
                <img src="images/contact/phone.png" alt="Rondo kuchyně - kontakt - telefon" className='contact-image-icon' />
                <h2>Telefon</h2>
                <p>+420 775 020 314</p>
              </div>
            </div>
            <div className="col-md-3 wow fadeInLeft animated">
              <div className="single_contact_info">
                <img src="images/contact/email.png" alt="Rondo kuchyně - kontakt - e-mail" className='contact-image-icon' />
                <h2>E-mail</h2>
                <p>
                  <a href='mailto:info@kuchynerondo.cz' title='Kontaktujte nás' className=''>info@kuchynerondo.cz</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 wow fadeInRight animated">
              <div className="single_contact_info">
              <img src="images/contact/address.png" alt="Rondo kuchyně - kontakt - adresa" className='contact-image-icon' />
                <h2>Showroom</h2>
                <p>
                Dobrovodská 127
                <br />
                370 06 Dobrá Voda
                </p>
              </div>
            </div>
            <div className="col-md-3 wow fadeInRight animated">
              <div className="single_contact_info">
              <img src="images/contact/facebook.png" alt="Rondo kuchyně - kontakt - Facebook" className='contact-image-icon' />
                <h2>
                  Facebook <br />
                  Kuchyně Rondo
                </h2>
              </div>
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
