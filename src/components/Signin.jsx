import React from 'react';
import '../assets/styles/components/Signin.scss';
import '../assets/styles/Icons.css';

const Signin = (props) => {

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
          <button type='button' className='button google'>
            <i className='icon-google icon' />
            Iniciar sesión con Google
          </button>
          <hr className='line' />
          <form action='' className='form'>
            <input
              type='text'
              className='input'
              placeholder='Dirección de correo electrónico'
            />
            <input
              type='password'
              name=''
              id=''
              className='input'
              placeholder='Contraseña'
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
            <button type='button' className=' button form__options-button'>
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
export default Signin;
