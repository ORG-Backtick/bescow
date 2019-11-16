import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../containers/Modal';
import Signin from './Signin';
import Register from './Register';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalSigninVisible: false,
      modalRegisterVisible: false,
    };
  }

  componentDidUpdate(prevProps) {
    const hasUser = Object.keys(this.props.user).length > 0;
    if (prevProps.user !== this.props.user && hasUser) {
      this.handleCloseModalSignin();
      this.handleCloseModalRegister();
    }
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

  handleLogout = () => {
    const { logoutRequest } = this.props;
    logoutRequest({});
  };

  render() {
    const { logo, origin, user } = this.props;
    const { modalSigninVisible, modalRegisterVisible } = this.state;
    const hasUser = Object.keys(user).length > 0;

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
            {hasUser ?
              <a href='#account' className={`menu__header-option ${origin}`}>{user.user.firstName}</a> :
              <a heref='#login' className={`menu__header-option ${origin}`} onClick={this.handleOpenModalSignin}>Inicia sesión</a>}

            {hasUser ?
              <a className={`menu__header-option ${origin}`} onClick={this.handleLogout}>Cerrar sesión</a> :
              <a className={`menu__header-option ${origin}`} onClick={this.handleOpenModalRegister}>Regístrate</a>}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
