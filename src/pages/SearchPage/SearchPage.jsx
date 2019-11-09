import React from 'react';
import { connect } from 'react-redux';
import LayoutSearch from './LayoutSearch';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from './components/SearchItem';
import MapComponent from '../../containers/MapComponent';
import logoColor from '../../assets/static/logoCow_Colors.svg';

const SearchPage = (props) => {
  const { coworkingList } = props;
  console.log(coworkingList);

  return (
    <LayoutSearch>
      <Header logo={logoColor} origin='isSearch' />

      <section className='filters__search'>
        <p className='filter__item-search'>Ciudad de México</p>
        <p className='filter__item-search'>26 de Sep - 30 de Sep</p>
        <p className='filter__item-search'>2 Coworkers</p>
      </section>

      <section className='options__search'>
        <h2 className='options__title'>250 espacios para trabajar</h2>
        {coworkingList && (
          coworkingList.length > 0 && (
            coworkingList.map((item) => (
              <SearchItem key={item.id} {...item} />
            ))
          )
        )}
      </section>

      <section className='maps__search'>
        <MapComponent />
      </section>

      <Footer origin='isSearch' />
    </LayoutSearch>
  );
};
const mapStateToProps = (state) => {
  return {
    coworkingList: state.coworkingList,
  };
};

export default connect(mapStateToProps, null)(SearchPage);
