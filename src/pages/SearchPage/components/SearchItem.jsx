import React from 'react';
import { connect } from 'react-redux';
import { setSelectedCow, setCostDetail } from '../../../actions';
import '../../../assets/styles/components/SearchItem.scss';

const SearchItem = (props) => {
  const { id, name, overview, amenities, dayFare, images, country, city } = props.cow;

  const handleClickCow = () => {
    props.setSelectedCow(props.cow);
    props.setCostDetail({ cow: props.cow, filterList: props.filterList });

    props.history.push('/cow', { cow: props.cow });
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
        <div className='details__footer'>
          <p className='details__location'>{`${city} -  ${country}`}</p>
          <p className='details__price'>{`$${dayFare} MXN/día`}</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setSelectedCow,
  setCostDetail,
};

export default connect(null, mapDispatchToProps)(SearchItem);

