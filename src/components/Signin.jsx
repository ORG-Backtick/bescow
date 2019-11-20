import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser, loginProvider } from '../actions';
import MessageError from './MessageError';
import { gmailLogin } from '../services/Firebase';
import '../assets/styles/components/Signin.scss';
import '../assets/styles/Icons.css';

const Signin = (props) => {
  const { loginUser, user } = props;
  const [form, setForm] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(form);
  };

  //kind of method
  const login = (event) => {
    gmailLogin().then((user) => {
      loginProvider(user);
    });
  };

  return (
    <div className='overlay__signin'>
      <div className='signin__container'>
        <section className='signin'>
          <div className='close'>
            <i className='icon-close icon' onClick={props.handleCloseClick} />
          </div>
          <button type='button' className='button facebook'>
            <i className='icon-facebook icon' />
            Iniciar sesión con Facebook
          </button>
          <button type='button' className='button twitter'>
            <i className='icon-twitter icon' />
            Iniciar sesión con Twitter
          </button>
          <button type='button' className='button google' onClick={login}>
            <i className='icon-google icon' />
            Iniciar sesión con Google
          </button>
          <hr className='line' />
          <form onSubmit={handleSubmit} className='form'>
            {!user && <MessageError />}
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Dirección de correo electrónico'
              onChange={handleInput}
            />
            <input
              type='password'
              name='password'
              className='input'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <div className='form__options'>
              <label
                htmlFor='form__options-rememberme'
                className='label__rememberme'
              >
                <input
                  type='checkbox'
                  id='form__options-rememberme'
                  className='form__options-rememberme'
                />
                Recordarme
              </label>
              <a href='/' className='form__options-showpass'>
                Mostrar contraseña
              </a>
            </div>
            <button type='submit' className=' button form__options-button'>
              Iniciar sesión
            </button>
          </form>
          <a href='/' className='forgotpass'>
            ¿Has olvidado tu contraseña?
          </a>
          <label className='label__signup'>
            ¿No tienes una cuenta?{' '}
            <a className='signup' onClick={props.handleOpenClick}>
              Regístrate
            </a>
          </label>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    ...state,
    user: state.user,
  });
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

