import React from 'react';
import '../assets/styles/components/Register.scss';
import '../assets/styles/Icons.css';

const Register = () => {
  return (
    <div className='overlay__register'>
      <div className='register__container'>
        <section className='register'>
          <a href='/' className='close'>
            <i className='icon-close icon' />
          </a>
          <button type='button' className='button facebook'>
            <i className='icon-facebook icon' />
            Continuar con Facebook
          </button>
          <button type='button' className='button twitter'>
            <i className='icon-twitter icon' />
            Continuar con Twitter
          </button>
          <button type='button' className='button google'>
            <i className='icon-google icon' />
            Continuar con Google
          </button>
          <hr className='line' />
          <form action='' className='form'>
            <input
              type='email'
              className='input'
              placeholder='Dirección de correo electrónico'
            />
            <input type='text' className='input' placeholder='Nombre' />
            <input type='text' className='input' placeholder='Apellido' />
            <input
              type='password'
              name=''
              id=''
              className='input'
              placeholder='Crea una contraseña'
            />
            <button type='button' className=' button form__options-button'>
              Regístrate
            </button>
          </form>
          <label className='label__register'>
            ¿Ya tienes una cuenta de Bescow?{' '}
            <a href='/'>
              Inicia sesión
            </a>
          </label>
        </section>
      </div>
    </div>
  );
};
export default Register;
