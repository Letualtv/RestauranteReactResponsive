import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">Calle Los Pajaritos nº 23 Bajo, 14000 Córdoba, España</p>
        <p className="p__opensans">+34 212-344-123</p>
        <p className="p__opensans">+34 212-555-123</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La cocina es un lenguaje mediante el cual se puede expresar armonía, felicidad, belleza, poesía, complejidad, magia, humor, provocación, cultura.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios:</h1>
        <p className="p__opensans">Miércoles - Jueves:</p>
        <p className="p__opensans">12:00 am - 24:00 am</p>
        <p className="p__opensans">Viernes - Sábado - Domingo:</p>
        <p className="p__opensans">12:00 am - 2:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;