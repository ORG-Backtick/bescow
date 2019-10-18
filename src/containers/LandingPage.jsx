import React from 'react';
import logo from '../assets/static/logoCow.svg';
import '../assets/styles/components/LandingPage.scss';

const LandingPage = () => {
  return (
    <main className='container'>
      <div className='cover__container-top' />
      <header className='header'>
        <div className='logo'>
          <figure className='logo__container'>
            <img
              src={logo}
              alt='Logo Bescow'
              className='logo__img'
            />
          </figure>
          <span>Bescow</span>
        </div>
        <nav className='menu'>
          <a className='menu__option' href='/'>
            Inicia sesión
          </a>
          <a className='menu__option' href='/'>
            Regístrate
          </a>
        </nav>
        <h1 className='header__title'>
          Encuentra el mejor espacio para trabajar.
        </h1>
      </header>

      <section className='hero'>
        <form action='' className='form'>
          <h1 className='hero__title'>
            Encuentra el mejor espacio para trabajar.
          </h1>

          <label className='label' htmlFor='formWhere'>
            DÓNDE
          </label>
          <input
            className='input'
            type='text'
            name='formWhere'
            id='formWhere'
            placeholder='Dónde'
          />

          <div className='form__date-container'>
            <div className='date__checkin'>
              <label className='label' htmlFor='formDateCheckin'>
                LLEGADA
              </label>
              <input
                className='input form__date-checkin'
                type='date'
                name='formDateCheckin'
                id='formDateCheckin'
                placeholder='dd/mm/aaaa'
              />
            </div>
            <div className='date__checkout'>
              <label className='label' htmlFor='formDateCheckout'>
                SALIDA
              </label>
              <input
                className='input form__date-checkout'
                type='date'
                name='formDateCheckout'
                id='formDateCheckout'
                placeholder='dd/mm/aaaa'
              />
            </div>
          </div>

          <label className='label' htmlFor='formCow'>
            COWORKERS
          </label>
          <input
            className='input'
            type='number'
            name='formCow'
            id='formCow'
            placeholder='Coworkers'
          />

          <button className='button__first' type='submit'>
            Buscar
          </button>
        </form>
      </section>

      <footer className='footer'>
        <a href='/'>Condiciones</a>
        <a href='/'>Privacidad</a>
        <p>© 2019 Bescow. All rights reserved.</p>
      </footer>
      <div className='cover__container-bottom' />
    </main>
  );
};
export default LandingPage;
