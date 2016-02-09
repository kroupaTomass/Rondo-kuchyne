import React from 'react';
import { Link } from 'react-router';

class Kitchen_b extends React.Component {

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className="col-md-4 no_padding">
        <div className="single_image">
          <img src="images/kitchen/02.jpg" alt="" />
          <div className="image_overlay">
            <button type="button" className="btn work-btn-design" data-toggle="modal" data-target="#myModal">
              Více informací
            </button>
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title work-modal-title" id="myModalLabel">Kuchyně EDITA</h5>
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
            <h2>Jídelna</h2>
            <h4>kompletní vybavení kuchyně</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchen_b;
