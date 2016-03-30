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
                        <!-- i className="icon-pencil"></i -->
                        <img src="images/img-navrh.png" alt="Rondo Kuchyně" />
                        <h2>Návrh</h2>
                        <p>Nakreslení návrhu ve 3D, který vytvoří náš zkušený designér podle vašich představ a možností.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInUp" data-wow-delay="2s">
                        <!--i className="icon-chat"></i -->
                        <img src="images/img-konzultace.png" alt="Rondo Kuchyně" />
                        <h2>Konzultace</h2>
                        <p>Konzultace s naším pracovníkem, jak a kdy bude vaše zakázka vyrobena.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInUp" data-wow-delay="3s">
                        <!--i className="icon-gears"></i -->
                        <img src="images/img-vyroba.png" alt="Rondo Kuchyně" />
                        <h2>Výroba na míru</h2>
                        <p>Předání domluvené zakázky na dílnu, kde bude zakázka vyrobena přesně podle domluvených detailů.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="single_service wow fadeInRight" data-wow-delay="4s">
                        <!--i className="icon-tools-2"></i -->
                        <img src="images/img-montaz.png" alt="Rondo Kuchyně" />
                        <h2>Montáž</h2>
                        <p>Pracovníci přivezou a kompletně zprovozní vyrobenou zakázku ve stanoveném termínu.</p>
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
