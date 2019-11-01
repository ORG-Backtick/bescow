import React from 'react';
import Header from '../../components/Header';
import DetailsList from './componentes/DetailsList';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow_Colors.svg';
import LayoutPlaceDetail from './LayoutPlaceDetail';

const PlaceDetailPage = ({ props }) => {
  return (
    <LayoutPlaceDetail>
      <Header logo={logo} origin='isSearch' />
      <DetailsList />
      <Footer origin='isSearch' />
    </LayoutPlaceDetail>
  );
};

export default PlaceDetailPage;
