import React from 'react';
import { Link } from 'react-router';

class Work extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="work_area" id="WORK">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="work_title  wow fadeInUp animated">
                <h1>Ukázka realizací</h1>
                <img src="images/shape.png" alt="" />
                <p>Ukázka několika realizací, které jsme v poslední době navrhli a vyrobili pro naše zákazníky přesně podle jejich
                  přání.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/01.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">Více informací</a>
                  <h2>Kuchyně</h2>
                  <h4>moderní kuchyně EDITA</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/02.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">Více informací</a>
                  <h2>Jídelna</h2>
                  <h4>kompletní vybavení kuchyně</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/03.jpg" alt="" />
                <div className="image_overlay">

                  <button type="button" className="btn work-btn-design" data-toggle="modal" data-target="#myModal">
                    Více informací
                  </button>
                  <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title work-modal-title" id="myModalLabel">Kuchyně SILVA</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <br />
                        </div>
                        <div className="modal-body">
                          Zde budou zobrazeny informace o vybraném produktu, můžou být přiloženy i nějaké fotografie
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-default" data-dismiss="modal">Zavřít okno</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2>Kuchyně</h2>
                  <h4>moderní kuchyně SILVA</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row pad_top">
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/04.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">Více informací</a>
                  <h2>Obýváková stěna</h2>
                  <h4>vybavení obývací místnosti</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image">
                <img src="images/kitchen/05.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">View Full Project</a>
                  <h2>drawing</h2>
                  <h4>with pencil colors</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 no_padding">
              <div className="single_image last_padding">
                <img src="images/kitchen/06.jpg" alt="" />
                <div className="image_overlay">
                  <a href="">View Full Project</a>
                  <h2>drawing</h2>
                  <h4>with pencil colors</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Work.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Work;
