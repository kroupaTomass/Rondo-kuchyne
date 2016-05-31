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
                <h2>Kuchyně Rondo</h2>
                <img src="images/shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  wow fadeInLeft animated">
              <p className="about_us_p">
                Chtějte pro váš domov konečně něco lepšího.<br />
                Kuchyně Rondo vám to splní!
                <br />
                Výrobou kuchyní se zabýváme již téměř deset let (do roku 2015 pod značkou ZT kuchyně) a někteří z našich pracovníků ještě mnohem déle.
                Spoluprací s námi získáte spolehlivého partnera při tvorbě vašeho domova nebo pracovního prostředí. Vyrábíme interiérový nábytek - od kuchyně po noční stolky s postelí,
                kancelářský nábytek, nábytek pro tělesně handicapované. Přinášíme tak do vašich životů kvalitní truhlářskou výrobu za rozumnou cenu.
              </p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                Při výrobě používáme moderní prvky a technologie, které kombinujeme s tradičními a ověřenými truhlářskými postupy.
                Nadstandardně vysoké kvality dosahujeme také díky využívání značkových a vysoce kvalitních materiálů.
                A hlavně - každou kuchyni i nábytek vám dělají naši truhláři přímo na míru, až na základě vaší konkrétní objednávky s důrazem na jednotlivé detaily.
                Tím jsme schopni konkurovat větším kuchyňským studiím na českém trhu.
              </p>
            </div>
            <div className="col-md-4  wow fadeInRight animated">
              <p className="about_us_p">
                Zákazník a jeho přání je pro nás priorita číslo jedna. O vašich představách se s vámi budeme bavit a dolaďovat je tak, aby výsledkem byl nábytek praktický,
                pohodlný a hlavně líbivý vašemu oku. Rádi vám poradíme s typem nábytku vhodným právě do vašeho interiéru, připravíme vám cenovou nabídku, která potěší váš rozpočet,
                v ceně zakázky rovněž zpracujeme 3D návrh a samozřejmě zajistíme výrobu a montáž nábytku prvotřídní kvality.
                <br />
                Kontaktujte nás na tel.: +420 775 020 314 nebo e-mailu: info@kuchynerondo.cz.
                <br /><br />
                Těšíme se na spolupráci s vámi!
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
