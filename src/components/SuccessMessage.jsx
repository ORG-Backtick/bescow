import React from 'react';
import successImg from '../assets/static/check.svg';
import '../assets/styles/components/SuccessMessage.scss';

const SuccessMessage = (props) => {

  const { handleCloseClick } = props;

  return (
    <div className='overlay__success'>
      <div className='success_container'>
        <section className='success'>
          <div className='close'>
            <i className='icon-close icon' onClick={handleCloseClick} />
          </div>
          <div className='success_message'>
            <figure>
              <img src={successImg} alt='success logo' />
            </figure>
            <p>Su reserva fue realizada exitosamente.</p>
          </div>
          <p className='cancel__success' onClick={handleCloseClick}>Cerrar</p>
        </section>
      </div>
    </div>
  );
};

export default SuccessMessage;
