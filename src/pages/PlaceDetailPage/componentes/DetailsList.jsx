import React from 'react';
import MapComponent from '../../../containers/MapComponent';
import Gallery from '../../../components/Gallery';
import '../../../assets/styles/components/DetailsList.scss';

const DetailsList = (props) => {
  return (
    <section className='details'>
      <Gallery />
      <div className='description__place'>
        <h1>Avenida Chapultepec 360</h1>
        <p className='overview__place'>
          Colabora is a shared office space primarily directed at Mexican
          entrepreneurs. Created and managed by young people who seek to find in
          their work areas a comfortable, youthful and pleasant space that
          generates added value both to their companies and to all the people
          who work in it through the support and promotion of creative ideas.
        </p>
        <div className='amenities__place'>
          <h2>Comodidades:</h2>
          <div className='amenities__items'>
            <ul>
              <li>Internet Alta Velocidad</li>
              <li>Almuerzo incluido</li>
              <li>Parqueadero</li>
            </ul>
            <ul>
              <li>Impresora</li>
              <li>Aire acondicionado</li>
              <li>Lockers Personales</li>
            </ul>
          </div>
        </div>
        <div className='location__detail'>
          <MapComponent />
        </div>
      </div>
      <section className='book__place'>
        <div>
          <p>
            <span>Total: </span>
            $360 MXN
          </p>
          <p>26 de Sep - 30 de sep</p>
        </div>
        <button className='button__book' type='submit'>
          Reservar
        </button>
      </section>
    </section>
  );
};

export default DetailsList;
