import React from 'react';
import Header from '../../components/Header';
import FormLanding from '../../components/FormLanding';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow.svg';
import '../../assets/styles/components/LandingPage.scss';

const LandingPage = ({ props }) => {
  return (
    <main className='container__landing'>
      <div className='cover__container-top' />
      <Header logo={logo} origin='isLanding' />
      <FormLanding props={props} />
      <Footer origin='isLanding' />
      <div className='cover__container-bottom' />
    </main>
  );
};

export default LandingPage;
