import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { logoutRequest } from '../../../actions';
import Modal from '../../../containers/Modal';
import Signin from '../../../components/Signin';
import Register from '../../../components/Register';
import MapComponent from '../../../containers/MapComponent';
import Gallery from '../../../components/Gallery';
import '../../../assets/styles/components/DetailsList.scss';

const DetailsList = (props) => {
  const { handleOpenClick, selectedCow, costDetail, user, logoutRequest } = props;
  if (!costDetail) {
    window.location.href = '/';
  }

  const { date, total } = costDetail;
  const [modal, setModal] = useState({
    modalSigninVisible: false,
    modalRegisterVisible: false,
  });

  const handleOpenModalRegister = () => {
    setModal({
      modalSigninVisible: false,
      modalRegisterVisible: true,
    });
  };

  const handleOpenModalSignin = () => {
    if (user === false) {
      logoutRequest({});
    }

    setModal({
      modalSigninVisible: true,
      modalRegisterVisible: false,
    });
  };

  const handleCloseModal = () => {
    setModal({
      modalSigninVisible: false,
      modalRegisterVisible: false,
    });

    if (user === false) {
      logoutRequest({});
    }
  };

  const handleValidateLogin = () => {
    if (Object.keys(user).length > 0) {
      handleOpenClick();
    } else {
      setModal({
        modalSigninVisible: true,
        modalRegisterVisible: false,
      });
    }
  };

  useEffect(() => {
    const hasUser = Object.keys(user).length > 0;
    if ((modal.modalSigninVisible || modal.modalRegisterVisible) && hasUser) {
      handleCloseModal();
      handleOpenClick();
    }
  }, [user]);

  return (
    <>
      <section className='details'>
        <Gallery images={selectedCow.images} />
        <div className='description__place'>
          <h1>{selectedCow.name}</h1>
          <p className='overview__place'>
            {selectedCow.description}
          </p>
          <div className='amenities__place'>
            <h2>Comodidades:</h2>
            <div className='amenities__items'>
              <ul>
                <li>{selectedCow.amenities[0]}</li>
                <li>{selectedCow.amenities[1]}</li>
                <li>{selectedCow.amenities[2]}</li>
              </ul>
              <ul>
                <li>{selectedCow.amenities[3]}</li>
                <li>{selectedCow.amenities[4]}</li>
                <li>{selectedCow.amenities[5]}</li>
              </ul>
            </div>
          </div>
          <div className='location__detail'>
            <MapComponent locations={[selectedCow]} />
          </div>
        </div>
        <section className='book__place'>
          <div>
            <p>
              <span>Total: </span>
              {`$ ${total} MXN`}
            </p>
            <p>{ `${moment(date.formDateCheckin).format('ll')} → ${moment(date.formDateCheckout).format('ll')}`}</p>
          </div>
          <button className='button__book' type='button' onClick={handleValidateLogin}>
            Reservar
          </button>
        </section>
      </section>
      <Modal>
        {modal.modalSigninVisible && (
          <Signin handleCloseClick={handleCloseModal} handleOpenClick={handleOpenModalRegister} />
        )}
        {modal.modalRegisterVisible && (
          <Register handleCloseClick={handleCloseModal} handleOpenClick={handleOpenModalSignin} />
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsList);
