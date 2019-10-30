import React from 'react';
import '../../../assets/styles/components/SearchItem.scss';

const SearchItem = (props) => {
  const { imgCover } = props;
  return (
    <div className='options__item'>
      <figure className='options__item-figure'>
        <img
          src={imgCover}
          alt='Avenida Chapu 360'
          className='options__item-img'
        />
      </figure>
      <div className='options__item-details'>
        <h3 className='details__title'>Avenida Chapultepec 360</h3>
        <p className='details__description'>
          Excelente espacio para trabajar comodo y bien ubicado
        </p>
        <ul className='details__amenities'>
          <li className='details__amenities-item'>Internet Alta Velocidad</li>
          <li className='details__amenities-item'>Restaurante</li>
          <li className='details__amenities-item'>Parqueadero</li>
        </ul>
        <p className='details__price'>$180 MXN/día</p>
      </div>
    </div>
  );
};
export default SearchItem;
