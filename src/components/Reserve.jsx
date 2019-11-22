import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { sendEmailToReserve } from '../actions';
import '../assets/styles/components/Reserve.scss';
import '../assets/styles/Icons.css';

const Reserve = (props) => {
  const { handleCloseClick, costDetail, detail, user, sendEmailToReserve } = props;
  const { date, total, dayCost, days } = costDetail;

  const handleReservation = () => {
    const emailInformation = {
      emailUser: user.user.email,
      nameUser: user.user.firstName,
      emailCow: detail.email,
      place: detail.name,
      checkin: moment(date.formDateCheckin).format('ll'),
      checkout: moment(date.formDateCheckout).format('ll'),
      quantityUser: date.formCow,
    };

    sendEmailToReserve(emailInformation);
  };

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
            <span>{moment(date.formDateCheckin).format('ll')}</span>
            <i>⟶</i>
            <span>{moment(date.formDateCheckout).format('ll')}</span>
          </div>
          <label className='label__title-reserve'>Coworkers</label>
          <div className='coworkers'>
            <span>{date.formCow}</span>
            <span>{`${date.formCow > 1 ? ' coworkers' : ' coworker'}`}</span>
          </div>
          <div className='summary__reserve'>
            <div><span>{`$${dayCost * date.formCow} x ${days} ${days > 1 ? 'dias' : 'día'}`}</span></div>
            <div><span>{total}</span></div>
          </div>
          <hr className='line' />
          <div className='total__reserve'>
            <p>Total:</p>
            <p>{`$ ${total}`}</p>
          </div>
          <button type='button' className='button button__reserve' onClick={handleReservation}>
            Reservar
          </button>
          <p className='cancel__reserve' onClick={handleCloseClick}>Cancelar</p>
        </section>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  sendEmailToReserve,
};

export default connect(null, mapDispatchToProps)(Reserve);
