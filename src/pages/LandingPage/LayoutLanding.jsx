import React from 'react';
import '../../assets/styles/components/LandingPage.scss';

const LayoutLanding = (props) => {
  const { children } = props;
  return (
    <main className='container__landing'>
      <div className='cover__container-top' />
      {children}
      <div className='cover__container-bottom' />
    </main>
  );
};

export default LayoutLanding;
