/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilterList } from '../../../actions';
import '../../../assets/styles/components/FormLanding.scss';

const FormLanding = (props) => {
  const { locationListAvailable, filterList } = props;

  const [form, setForm] = useState({
    formWhere: filterList ? filterList.formWhere : '',
    formDateCheckin: filterList ? filterList.formDateCheckin : '',
    formDateCheckout: filterList ? filterList.formDateCheckout : '',
    formCow: filterList ? filterList.formCow : 1,
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFilterList(form);
    props.history.push('/search');
  };

  return (
    <section className='hero'>
      <form action='' className='hero__form' onSubmit={handleSubmit}>
        <h1 className='hero__title'>
          Encuentra el mejor espacio para trabajar.
        </h1>

        <label className='hero__label' htmlFor='formWhere'>
          DÓNDE
        </label>
        <input
          className='hero__input'
          list='locationListAvailable'
          type='text'
          name='formWhere'
          id='formWhere'
          placeholder='Dónde'
          onChange={handleInput}
          defaultValue={filterList ? filterList.formWhere : ''}
        />
        <datalist id='locationListAvailable'>
          { locationListAvailable &&
              (locationListAvailable.length > 0 && (
                locationListAvailable.map((item) => {
                  return <option key={item} value={item} />;
                })
              ))}
        </datalist>

        <div className='hero__form-date-container'>
          <div className='hero__date-checkin'>
            <label className='hero__label' htmlFor='formDateCheckin'>
              LLEGADA
            </label>
            <input
              className='hero__input hero__form-date-checkin'
              type='date'
              name='formDateCheckin'
              id='formDateCheckin'
              placeholder='dd/mm/aaaa'
              onChange={handleInput}
              defaultValue={filterList ? filterList.formDateCheckin : ''}
            />
          </div>
          <div className='hero__date-checkout'>
            <label className='hero__label' htmlFor='formDateCheckout'>
              SALIDA
            </label>
            <input
              className='hero__input hero__form-date-checkout'
              type='date'
              name='formDateCheckout'
              id='formDateCheckout'
              placeholder='dd/mm/aaaa'
              onChange={handleInput}
              defaultValue={filterList ? filterList.formDateCheckout : ''}
            />
          </div>
        </div>

        <label className='hero__label' htmlFor='formCow'>
          COWORKERS
        </label>
        <input
          className='hero__input'
          type='number'
          name='formCow'
          id='formCow'
          placeholder='Coworkers'
          defaultValue={filterList ? filterList.formCow : '1'}
          onChange={handleInput}
        />

        <button className='hero__button-first' type='submit'>
          Buscar
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    locationListAvailable: state.locationListAvailable,
    filterList: state.filterList,
  };
};

const mapDispatchToProps = {
  setFilterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLanding);
