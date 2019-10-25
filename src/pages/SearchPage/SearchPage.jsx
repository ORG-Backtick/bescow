import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchItem from '../../components/SearchItem';
import MapComponent from '../../components/MapComponent';
import logoColor from '../../assets/static/logoCow_Colors.svg';
import space1 from '../../assets/static/space1_opt.jpg';
import space2 from '../../assets/static/space2_opt.jpg';
import space3 from '../../assets/static/space3_opt.jpg';
import space4 from '../../assets/static/space4_opt.jpg';
import '../../assets/styles/components/SearchPage.scss';

const SearchPage = () => {
  return (
    <main className='container__search'>
      <Header logo={logoColor} origin='isSearch' />

      <section className='filters__search'>
        <p className='filter__item-search'>Ciudad de México</p>
        <p className='filter__item-search'>26 de Sep - 30 de Sep</p>
        <p className='filter__item-search'>2 Coworkers</p>
      </section>

      <section className='options__search'>
        <h2 className='options__title'>250 espacios para trabajar</h2>
        <SearchItem imgCover={space1} />
        <SearchItem imgCover={space2} />
        <SearchItem imgCover={space3} />
        <SearchItem imgCover={space4} />
      </section>

      <section className='maps__search'>
        <MapComponent />
      </section>

      <Footer origin='isSearch' />
    </main>
  );
};
export default SearchPage;
