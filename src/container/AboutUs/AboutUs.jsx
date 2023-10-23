import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letra g" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nuestro Equipo</h1>
        <img src={images.spoon} alt="cuchara sobre nosotros" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates nam qui velit consequatur a nobis magnam sapiente soluta reprehenderit delectus excepturi fugit, dolore voluptatum similique. Saepe repudiandae harum dolorum.</p>
        <button type='button' className='custom__button'>Saber más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="cuchillo" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="cuchara sobre nosotros" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dolore iusto culpa quo aliquam maiores tenetur repudiandae minus vero animi commodi, corporis temporibus error voluptate autem velit voluptatum eaque necessitatibus!</p>
        <button type='button' className='custom__button'>Saber más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
