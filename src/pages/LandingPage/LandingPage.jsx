import React from 'react';
import LayoutLanding from './LayoutLanding';
import Header from '../../components/Header';
import FormLanding from './components/FormLanding';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow.svg';

const LandingPage = (props) => {
  return (
    <LayoutLanding>
      <Header logo={logo} origin='isLanding' />
      <FormLanding {...props} />
      <Footer origin='isLanding' />
    </LayoutLanding>
  );
};

export default LandingPage;
