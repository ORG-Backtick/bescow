import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import '../assets/styles/components/Register.scss';
import '../assets/styles/Icons.css';

const Register = (props) => {
  const { registerUser } = props;

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
    registerUser(form);
  };

  return (
    <div className='overlay__register'>
      <div className='register__container'>
        <section className='register'>
          <div className='close'>
            <i className='icon-close icon' onClick={props.handleCloseClick} />
          </div>
          <form onSubmit={handleSubmit} className='form'>
            <input
              name='email'
              type='email'
              className='input'
              placeholder='Dirección de correo electrónico'
              onChange={handleInput}
            />
            <input name='firstName' type='text' className='input' placeholder='Nombre' onChange={handleInput} />
            <input name='lastName' type='text' className='input' placeholder='Apellido' onChange={handleInput} />
            <input
              type='password'
              name='password'
              className='input'
              placeholder='Crea una contraseña'
              onChange={handleInput}
            />
            <button type='submit' className=' button form__options-button'>
              Regístrate
            </button>
          </form>
          <label className='label__register'>
            ¿Ya tienes una cuenta de Bescow?{' '}
            <a onClick={props.handleOpenClick}>
              Inicia sesión
            </a>
          </label>
        </section>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
