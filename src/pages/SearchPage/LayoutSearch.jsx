import React from 'react';
import '../../assets/styles/components/SearchPage.scss';

const LayoutSearch = (props) => {
  const { children } = props;
  return (
    <main className='container__search'>
      {children}
    </main>
  );
};
export default LayoutSearch;
