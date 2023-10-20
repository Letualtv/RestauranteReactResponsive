import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';


const Navbar = () =>  {
const [toggleMenu, setToggleMenu] = React.useState (false);

return (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt='app logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Inicio</a></li>
      <li className='p__opensans'><a href="#about">Nosotros</a></li>
      <li className='p__opensans'><a href="#menu">Menú</a></li>
      <li className='p__opensans'><a href="#awards">Premios</a></li>
      <li className='p__opensans'><a href="#contact">Contacto</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Entrar / Registrarse</a>
      <div />
      <a href="/" className='p__opensans'>Reservar Mesa</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide_bottom">
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#home">Inicio</a></li>
          <li className='p__opensans'><a href="#about">Nosotros</a></li>
          <li className='p__opensans'><a href="#menu">Menú</a></li>
          <li className='p__opensans'><a href="#awards">Premios</a></li>
          <li className='p__opensans'><a href="#contact">Contacto</a></li>
        </ul>
      </div>
)}

    </div>
  </nav>
)
}
export default Navbar;
