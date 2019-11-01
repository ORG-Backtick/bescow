import React from 'react';
import '../assets/styles/components/Gallery.scss';
import place1 from '../assets/static/place1_1.jpg';
import place2 from '../assets/static/place1_2.jpg';
import place3 from '../assets/static/place1_3.jpg';

const Gallery = props => {
  return (
    <section class='container__gallery'>
      <div class='item__gallery first__img'>
        <img class='img__gallery' src={place1} alt='' />
      </div>

      <div class='item__gallery'>
        <img class='img__gallery' src={place2} alt='' />
      </div>

      <div class='item__gallery'>
        <img class='img__gallery' src={place3} alt='' />
      </div>
    </section>
  );
};
export default Gallery;
