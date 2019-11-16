import React from 'react';
import '../assets/styles/components/Reserve.scss';
import '../assets/styles/Icons.css';

const Reserve = (props) => {

  const { handleCloseClick, costDetail } = props;
  const { date, total, dayCost, days } = costDetail;

  return (
    <div className='overlay__reserve'>
      <div className='reserve__container'>
        <section className='reserve'>
          <div className='close'>
            <i className='icon-close icon' onClick={handleCloseClick} />
          </div>
          <h1 className='title__reserve'>Confirmar Reserva</h1>
          <p className='title__fare-reserve'>
            {`$${dayCost}`}
            <span> MXN/día</span>
          </p>
          <hr className='line' />
          <label className='label__title-reserve' >Fechas</label>
          <div className='date__detail-reserve'>
            <span>{date.formDateCheckin}</span>
            <i>----</i>
            <span>{date.formDateCheckout}</span>
          </div>
          <label className='label__title-reserve'>Coworkers</label>
          <div className='coworkers'>
            <span>{date.formCow}</span>
            <span> coworker</span>
          </div>
          <div className='summary__reserve'>
            <div><span>{`$${dayCost * date.formCow} x ${days} día`}</span></div>
            <div><span>{total}</span></div>
          </div>
          <hr className='line' />
          <div className='total__reserve'>
            <p>Total:</p>
            <p>{`$ ${total}`}</p>
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
