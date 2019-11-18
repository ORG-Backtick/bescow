import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setFilteredCowList } from '../../actions';
import LayoutSearch from './LayoutSearch';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from './components/SearchItem';
import MapComponent from '../../containers/MapComponent';
import logoColor from '../../assets/static/logoCow_Colors.svg';

const SearchPage = (props) => {
  const { coworkingList, filterList, filteredCowList } = props;
  let renderCowList = [];

  useEffect(() => {
    if (filterList) {
      props.setFilteredCowList(filterList.formWhere);
    }
  }, []);

  if (filteredCowList) {
    if (filteredCowList.length > 0) {
      renderCowList = filteredCowList;
    }
  }

  if (renderCowList.length <= 0) {
    if (coworkingList) {
      if (coworkingList.length > 0) {
        renderCowList = coworkingList;
      }
    }
  }

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
        <h2 className='options__title'>{`${renderCowList.length} ${renderCowList.length > 1 ? 'espacios' : 'espacio'} para trabajar`}</h2>
        {renderCowList.length > 0 &&
            renderCowList.map((item) => <SearchItem key={item._id} cow={item} {...props} />)}
      </section>

      <section className='maps__search'>
        {renderCowList.length > 0 && (
          <MapComponent locations={renderCowList} />
        )}
      </section>

      <Footer origin='isSearch' />
    </LayoutSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    coworkingList: state.coworkingList,
    filterList: state.filterList,
    filteredCowList: state.filteredCowList,
  };
};

const mapDispatchToProps = {
  setFilteredCowList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
