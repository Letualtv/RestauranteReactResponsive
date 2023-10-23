import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
<SubHeading title="descubre el sabor" />
<h1 className="app__header-h1">La Clave de una Buena Cena</h1>
<p className="p__opensans" style={{ margin: '2rem 0'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nihil officiis perspiciatis quo, non exercitationem asperiores. Saepe, et minus.</p>
<button type="button" className="custom__button">Descubrir Menú</button>
    </div>
    
    <div className="app__wrapper_img">
<img src={images.welcome} alt="imagen de comida" />
    </div>
  </div>
);

export default Header;
