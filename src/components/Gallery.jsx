import React from 'react';
import '../assets/styles/components/Gallery.scss';

const Gallery = ({ images }) => {
  return (
    <section className='container__gallery'>
      <div className='item__gallery img__main'>
        <figure>
          <img className='img__gallery' src={images[0]} alt='' />
        </figure>
      </div>

      <div className='item__gallery'>
        <figure>
          <img className='img__gallery' src={images[1]} alt='' />
        </figure>
      </div>

      <div className='item__gallery'>
        <figure>
          <img className='img__gallery' src={images[2]} alt='' />
        </figure>
      </div>
    </section>
  );
};
export default Gallery;
