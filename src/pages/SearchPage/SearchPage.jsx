import React from 'react';
import { connect } from 'react-redux';
import LayoutSearch from './LayoutSearch';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from './components/SearchItem';
import MapComponent from '../../containers/MapComponent';
import logoColor from '../../assets/static/logoCow_Colors.svg';

const SearchPage = (props) => {
  const { coworkingList, filterList } = props;

  return (
    <LayoutSearch>
      <Header logo={logoColor} origin='isSearch' />

      <section className='filters__search'>
        {filterList && filterList.formWhere && (
          <p className='filter__item-search'>{filterList.formWhere}</p>
        )}

        {filterList &&
          (filterList.formDateCheckin && filterList.formDateCheckout) && (
          <p className='filter__item-search'>
            {filterList.formDateCheckin}
            {'  '}
            /
            {'  '}
            {filterList.formDateCheckout}
          </p>
        )}

        {filterList && filterList.formCow && (
          <p className='filter__item-search'>{`${filterList.formCow} ${filterList.formCow > 1 ? 'Coworkers' : 'Coworker'}`}</p>
        )}
      </section>

      <section className='options__search'>
        <h2 className='options__title'>250 espacios para trabajar</h2>
        {coworkingList &&
          (coworkingList.length > 0 &&
            coworkingList.map((item) => <SearchItem key={item.id} {...item} {...props} />))}
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
    filterList: state.filterList,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SearchPage);
