import React from 'react';
import '../../assets/styles/components/PlaceDetailPage.scss';

const LayoutPlaceDetail = (props) => {
  const { children } = props;
  return (
    <main className='container__detail'>
      {children}
    </main>
  );
};

export default LayoutPlaceDetail;
