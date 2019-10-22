import React from 'react';

const FormLanding = ({ props }) => {

  const handleSubmit = (event) => {
    console.log(props);
    event.preventDefault();
    props.history.push('/site');
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
          type='text'
          name='formWhere'
          id='formWhere'
          placeholder='Dónde'
        />

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
        />

        <button className='hero__button-first' type='submit'>
          Buscar
        </button>
      </form>
    </section>
  );
};
export default FormLanding;
