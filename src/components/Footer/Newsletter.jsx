import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Noticias" />
    <h1 className='headtext__cormorant'>Suscríbete a nuestro voletín
    </h1>
    <p className='p__opensans'>¡No te pierdas ninguna novedad!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
<input type="email" placeholder='Escribe tu e-mail' />
<button className='custom__button'>Suscríbete</button>
    </div>
  </div>
);

export default Newsletter;
