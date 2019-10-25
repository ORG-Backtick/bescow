import React from 'react';
import LandingPage from './LandingPage';
import Modal from '../../containers/Modal';
import Signin from '../../containers/Signin';
import Register from '../../containers/Register';

const LayoutLanding = (props) => {
  return (
    <>
      <LandingPage props={props} />
      {/* <Modal>
        <Signin />
        <Register />
      </Modal> */}
    </>
  );
};

export default LayoutLanding;
