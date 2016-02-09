import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <section className="about_us_area" id="ABOUT">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="about_title">
                <h2>O nás</h2>
                <img src="images/shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  wow fadeInLeft animated">
              <p className="about_us_p">
                Chtějte pro Váš domov konečně něco lepšího!<br />
                Kuchyně Rondo Vám to splní!
                <br />
                Kuchyně Rondo je nová, dynamicky se rozvíjející firma s dlouholetými zkušenostmi v nábytkářské výrobě.
                Naším cílem je obohatit trh o moderní prvky ve vybavení kuchyní a interiérů a přinést do Vašich domovů kvalitní truhlářskou výrobu za rozumnou cenu.
              </p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                V našich projektech se snažíme co nejlépe spojit Vaše osobní představy a požadavky s moderními trendy a technologiemi v zařizování interiérů.
                Stylový a soudobý design koncipujeme v návrzích tak, aby korespondoval s maximální praktičností a pohodlím pro každého z našich zákazníků, tělesně handicapovaných spoluobčanů nevyjímaje.
                <br />
                Vysoké kvality výrobků dosahujeme díky preciznímu zpracování a zakomponování značkových a vysoce kvalitních materiálů. Tím jsme schopni konkurovat nejkvalitnějším
                kuchyňským studiím na českém i zahraničním trhu.
              </p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                Rádi Vám poradíme s typem nábytku vhodným právě do Vašeho interiéru, připravíme Vám cenovou nabídku, která potěší Váš rozpočet, v ceně zakázky Vám
                rovněž nabídneme 3D návrh a především zajistíme výrobu a montáž nábytku prvotřídní kvality.
                <br />
                V případě zájmu o zpracování cenové nabídky, návrhu nebo máte-li jakékoliv dotazy, neváhejte nás kontaktovat na tel.: +420 775 020 314 nebo e-mailu: info@kuchynerondo.cz.
                <br /><br />
                Těšíme se na spolupráci s Vámi!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;
