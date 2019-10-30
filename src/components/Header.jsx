import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../containers/Modal';
import Signin from './Signin';
import Register from './Register';
import '../assets/styles/components/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalSigninVisible: false,
      modalRegisterVisible: false,
    };
  }

  handleOpenModalSignin = () => {
    this.setState({
      modalSigninVisible: true,
      modalRegisterVisible: false,
    });
  };

  handleOpenModalRegister = () => {
    this.setState({
      modalRegisterVisible: true,
      modalSigninVisible: false,
    });
  };

  handleCloseModalSignin = (event) => {
    this.setState({
      modalSigninVisible: false,
    });
  };

  handleCloseModalRegister = (event) => {
    this.setState({
      modalRegisterVisible: false,
    });
  };

  render() {
    const { logo, origin } = this.props;
    const { modalSigninVisible, modalRegisterVisible } = this.state;
    return (
      <>
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
            <a className={`menu__header-option ${origin}`} onClick={this.handleOpenModalSignin}>
              Inicia sesión
            </a>
            <a className={`menu__header-option ${origin}`} onClick={this.handleOpenModalRegister}>
              Regístrate
            </a>
          </nav>
          <h1 className={`header__title-landing ${origin}`}>
            Encuentra el mejor espacio para trabajar.
          </h1>
        </header>
        <Modal>
          {modalSigninVisible && (
            <Signin handleCloseClick={this.handleCloseModalSignin} handleOpenClick={this.handleOpenModalRegister} />
          )}
          {modalRegisterVisible && (
            <Register handleCloseClick={this.handleCloseModalRegister} handleOpenClick={this.handleOpenModalSignin} />
          )}
        </Modal>
      </>
    );
  }
}

export default Header;
