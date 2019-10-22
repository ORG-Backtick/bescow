import React from 'react';

const Header = ({ logo }) => {
  return (
    <header className='header__landing'>
      <div className='logo__landing'>
        <figure className='logo__container-landing'>
          <img src={logo} alt='Logo Bescow' className='logo__img-landing' />
        </figure>
        <span>Bescow</span>
      </div>
      <nav className='menu__landing'>
        <a className='menu__option-landing' href='/'>
          Inicia sesión
        </a>
        <a className='menu__option-landing' href='/'>
          Regístrate
        </a>
      </nav>
      <h1 className='header__title-landing'>
        Encuentra el mejor espacio para trabajar.
      </h1>
    </header>
  );
};
export default Header;
