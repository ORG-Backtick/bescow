import React from 'react';
import '../assets/styles/components/Gallery.scss';
import place1 from '../assets/static/space3.1_opt.jpg';
import place2 from '../assets/static/space1.1_opt.jpg';
import place3 from '../assets/static/space1.2_opt.jpg';

const Gallery = (props) => {
  return (
    <section className='container__gallery'>
      <div className='item__gallery img__main'>
        <figure>
          <img className='img__gallery' src={place1} alt='' />
        </figure>
      </div>

      <div className='item__gallery'>
        <figure>
          <img className='img__gallery' src={place2} alt='' />
        </figure>
      </div>

      <div className='item__gallery'>
        <figure>
          <img className='img__gallery' src={place3} alt='' />
        </figure>
      </div>
    </section>
  );
};
export default Gallery;
