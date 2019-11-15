import React from 'react';
import '../assets/styles/components/Reserve.scss';
import '../assets/styles/Icons.css';

const Reserve = (props) => {

  const {handleCloseClick, detail} = props;

  return (
    <div className='overlay__reserve'>
      <div className='reserve__container'>
        <section className='reserve'>
          <div className='close'>
            <i className='icon-close icon' onClick={handleCloseClick} />
          </div>
          <h1 className='title__reserve'>Confirmar Reserva</h1>
          <p className='title__fare-reserve'>
            $180
            <span> MXN/día</span>
          </p>
          <hr className='line' />
          <label className='label__title-reserve' >Fechas</label>
          <div className='date__detail-reserve'>
            <span>26/10/2019</span>
            <i>----</i>
            <span>27/10/2019</span>
          </div>
          <label className='label__title-reserve'>Coworkers</label>
          <div className='coworkers'>
            <span>1 coworker</span>
          </div>
          <div className='summary__reserve'>
            <div><span>$180 x 1 día</span></div>
            <div><span>$180</span></div>
          </div>
          <hr className='line' />
          <div className='total__reserve'>
            <p>Total:</p>
            <p>$180</p>
          </div>
          <button type='button' className='button button__reserve'>
            Reservar
          </button>
          <p className='cancel__reserve' onClick={handleCloseClick}>Cancelar</p>
        </section>
      </div>
    </div>
  );
};
export default Reserve;
