import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
<SubHeading title="contacto" />
<h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Encuéntranos</h1>
<div className="app__wrapper-content">
  <p className='p__opensans'>Calle Los Pajaritos nº 23 Bajo, 14000 Córdoba, España</p>
  <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Horario:</p>
  <p className='p__opensans'>Miércoles - Jueves: 12:00 am - 24:00 am</p>
  <p className='p__opensans'>Viernes - Sábado - Domingo: 12:00 am - 2:00 pm</p>
</div>
<button className='custom__button' style={{ marginTop: '2rem'}}>Visítanos</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt=" findus" />
    </div>
  </div>
);

export default FindUs;
