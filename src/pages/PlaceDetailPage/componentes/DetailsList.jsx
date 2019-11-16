import React from 'react';
import MapComponent from '../../../containers/MapComponent';
import Gallery from '../../../components/Gallery';
import '../../../assets/styles/components/DetailsList.scss';

const DetailsList = (props) => {
  const { handleOpenClick, selectedCow, costDetail } = props;
  const { date, total } = costDetail;

  return (
    <section className='details'>
      <Gallery images={selectedCow.images} />
      <div className='description__place'>
        <h1>{selectedCow.name}</h1>
        <p className='overview__place'>
          {selectedCow.description}
        </p>
        <div className='amenities__place'>
          <h2>Comodidades:</h2>
          <div className='amenities__items'>
            <ul>
              <li>{selectedCow.amenities[0]}</li>
              <li>{selectedCow.amenities[1]}</li>
              <li>{selectedCow.amenities[2]}</li>
            </ul>
            <ul>
              <li>{selectedCow.amenities[3]}</li>
              <li>{selectedCow.amenities[4]}</li>
              <li>{selectedCow.amenities[5]}</li>
            </ul>
          </div>
        </div>
        <div className='location__detail'>
          <MapComponent locations={[selectedCow]} />
        </div>
      </div>
      <section className='book__place'>
        <div>
          <p>
            <span>Total: </span>
            {`$ ${total} MXN`}
          </p>
          {/* <p>26 de Sep - 30 de sep</p> */}
          { `${date.formDateCheckin} - ${date.formDateCheckout}`}
        </div>
        <button className='button__book' type='button' onClick={handleOpenClick}>
          Reservar
        </button>
      </section>
    </section>
  );
};

export default DetailsList;
