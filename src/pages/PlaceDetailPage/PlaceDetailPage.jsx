import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import logo from '../../assets/static/logoCow_Colors.svg';
import MapComponent from '../../containers/MapComponent';
import Gallery from '../../components/Gallery';
import LayoutPlaceDetail from './LayoutPlaceDetail';

const PlaceDetailPage = ({ props }) => {
  return (
    <LayoutPlaceDetail>
      <Header logo={logo} origin='isSearch' />
      <div className='details'>
        <h1>Reservation Name</h1>
        {/* <i></i> star icon  */}

        <Gallery />

        <section className='description__place'>{}</section>
        <section className='amenities__place'>{}</section>
        <section className='location__detail'>
          <MapComponent />
        </section>
        <section className='btn-book__place'>{}</section>
      </div>
      <Footer origin='isSearch' />
    </LayoutPlaceDetail>
  );
};

export default PlaceDetailPage;
