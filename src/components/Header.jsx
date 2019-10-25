import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = ({ logo, origin }) => {
  return (
    <header className={`header ${origin}`}>
      <div className='logo'>
        <Link to='/'>
          <figure className={`logo__container ${origin}`}>
            <img src={logo} alt='Logo Bescow' className='logo__img' />
          </figure>
        </Link>
        <span className={`logo__name ${origin}`}>Bescow</span>
      </div>
      <nav className='menu__header'>
        <a className={`menu__header-option ${origin}`} href='/'>
          Inicia sesión
        </a>
        <a className={`menu__header-option ${origin}`} href='/'>
          Regístrate
        </a>
      </nav>
      <h1 className={`header__title-landing ${origin}`}>
        Encuentra el mejor espacio para trabajar.
      </h1>
    </header>
  );
};
export default Header;
