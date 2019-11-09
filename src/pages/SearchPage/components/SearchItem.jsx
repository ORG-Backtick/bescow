import React from 'react';
import '../../../assets/styles/components/SearchItem.scss';

const SearchItem = (props) => {
  console.log(props);
  const { id, name, overview, amenities, dayFare, images } = props;
  const handleClickCow = () => {
    props.history.push(`/cow/${1}`);
  };

  return (
    <div className='options__item' onClick={handleClickCow}>
      <figure className='options__item-figure'>
        <img src={images[0]} alt={name} className='options__item-img' />
      </figure>
      <div className='options__item-details'>
        <h3 className='details__title'>{name}</h3>
        <p className='details__description'>{overview}</p>
        <ul className='details__amenities'>
          <li className='details__amenities-item'>{amenities[0]}</li>
          <li className='details__amenities-item'>{amenities[1]}</li>
          <li className='details__amenities-item'>{amenities[2]}</li>
        </ul>
        <p className='details__price'>{`$${dayFare} MXN/día`}</p>
      </div>
    </div>
  );
};
export default SearchItem;
