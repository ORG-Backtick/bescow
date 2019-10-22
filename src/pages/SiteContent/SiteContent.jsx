import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import SiteCard from '../../components/SiteCard';
import logoColor from '../../assets/static/logoCow_Colors.svg';
import space1 from '../../assets/static/space1_opt.jpg';
import space2 from '../../assets/static/space2_opt.jpg';
import space3 from '../../assets/static/space3_opt.jpg';
import space4 from '../../assets/static/space4_opt.jpg';
import '../../assets/styles/components/SiteContent.scss';

class SiteContent extends React.Component {
  constructor(props) {
    super(props);

    this.google = props.google;
  }

  render() {
    return (
      <main className='container__site'>
        <header className='header__site'>
          <div className='logo__site'>
            <figure className='logo__container-site'>
              <img src={logoColor} alt='Logo Bescow' className='logo__img' />
            </figure>
            <span>Bescow</span>
          </div>
          <nav className='menu__site'>
            <a className='menu__option-site' href='/'>
              Inicia sesión
            </a>
            <a className='menu__option-site' href='/'>
              Regístrate
            </a>
          </nav>
        </header>

        <section className='filters__site'>
          <p className='filter__item-site'>Ciudad de México</p>
          <p className='filter__item-site'>26 de Sep - 30 de Sep</p>
          <p className='filter__item-site'>2 Coworkers</p>
        </section>

        <section className='options__site'>
          <h2 className='options__title'>250 espacios para trabajar</h2>

          <SiteCard imgCover={space1} />
          <SiteCard imgCover={space2} />
          <SiteCard imgCover={space3} />
          <SiteCard imgCover={space4} />

          {/* <div className='options__item'>
            <figure className='options__item-figure'>
              <img
                src={space1}
                alt='Avenida Chapu 360'
                className='options__item-img'
              />
            </figure>
            <div className='options__item-details'>
              <h3 className='details__title'>Avenida Chapultepec 360</h3>
              <p className='details__description'>
                Excelente espacio para trabajar comodo y bien ubicado
              </p>
              <ul className='details__amenities'>
                <li className='details__amenities-item'>
                  Internet Alta Velocidad
                </li>
                <li className='details__amenities-item'>Restaurante</li>
                <li className='details__amenities-item'>Parqueadero</li>
              </ul>
              <p className='details__price'>$180 MXN/día</p>
            </div>
          </div>

          <div className='options__item'>
            <figure className='options__item-figure'>
              <img
                src={space3}
                alt='Avenida Chapu 360'
                className='options__item-img'
              />
            </figure>
            <div className='options__item-details'>
              <h3 className='details__title'>Reforma 26</h3>
              <p className='details__description'>
                Es el espacio que estabas buscando, ven a conocernos.
              </p>
              <ul className='details__amenities'>
                <li className='details__amenities-item'>WiFi Fibra óptica</li>
                <li className='details__amenities-item'>Espacio Seguro</li>
                <li className='details__amenities-item'>Monitor Incluido</li>
              </ul>
              <p className='details__price'>$200 MXN/día</p>
            </div>
          </div>

          <div className='options__item'>
            <figure className='options__item-figure'>
              <img
                src={space2}
                alt='Avenida Chapu 360'
                className='options__item-img'
              />
            </figure>
            <div className='options__item-details'>
              <h3 className='details__title'>San Isidro 44</h3>
              <p className='details__description'>
                Oficinas tradicionales en el centro de la ciudad.
              </p>
              <ul className='details__amenities'>
                <li className='details__amenities-item'>Desayuno Incluido</li>
                <li className='details__amenities-item'>Restaurante</li>
                <li className='details__amenities-item'>Parqueadero</li>
              </ul>
              <p className='details__price'>$180 MXN/día</p>
            </div>
          </div>

          <div className='options__item'>
            <figure className='options__item-figure'>
              <img
                src={space4}
                alt='Avenida Chapu 360'
                className='options__item-img'
              />
            </figure>
            <div className='options__item-details'>
              <h3 className='details__title'>IOS Office</h3>
              <p className='details__description'>
                El mejor espacio para trabajar y estar rodeado de la comunidad de
                coworkers
              </p>
              <ul className='details__amenities'>
                <li className='details__amenities-item'>
                  Internet Alta Velocidad
                </li>
                <li className='details__amenities-item'>Restaurante</li>
                <li className='details__amenities-item'>Parqueadero</li>
              </ul>
              <p className='details__price'>$250 MXN/día</p>
            </div>
          </div> */}
        </section>

        <section className='maps__site'>
          <Map
            google={this.google}
            zoom={9}
            initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
          />
        </section>

        <footer className='footer__site'>
          <a href='/'>Condiciones</a>
          <a href='/'>Privacidad</a>
          <p>© 2019 Bescow. All rights reserved.</p>
        </footer>
      </main>
    );

  }

};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(SiteContent);
