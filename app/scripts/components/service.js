import React from 'react';
import { Link } from 'react-router';

class SectionService extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="services" id="SERVICE">
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInLeft" data-wow-delay="1s">
                        <!--i className="icon-chat"></i -->
                        <img src="images/img-konzultace.png" alt="Rondo Kuchyně" />
                        <h2>Konzultace</h2>
                        <p>Sjednejte si s námi schůzku a řekněte nám o vaší vysněné kuchyni či interiérovém nábytku</p>
                    </div>
                </div>
                    <div className="col-md-3 text-center">
                        <div className="single_service wow fadeInUp" data-wow-delay="2s">
                            <!-- i className="icon-pencil"></i -->
                            <img src="images/img-navrh.png" alt="Rondo Kuchyně" />
                            <h2>Návrh</h2>
                            <p>Náš designér se specializací na projektování kuchyní a nábytku vytvoří 3D návrh vaší zakázky přesně podle vašich představ a požadavků</p>
                        </div>
                    </div>
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInUp" data-wow-delay="3s">
                        <!--i className="icon-gears"></i -->
                        <img src="images/img-vyroba.png" alt="Rondo Kuchyně" />
                        <h2>Výroba na míru</h2>
                        <p>Vaši potvrzenou zakázku předáváme na dílnu, kde je vyrobena podle domluvených detailů</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInRight" data-wow-delay="4s">
                        <!--i className="icon-tools-2"></i -->
                        <img src="images/img-montaz.png" alt="Rondo Kuchyně" />
                        <h2>Montáž</h2>
                        <p>Vaši kuchyni či nábytek ve stanoveném termínu přivezeme a zkompletujeme. A vy už si jen užíváte radost z nového kousku ve vašem domově</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

SectionService.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default SectionService;
