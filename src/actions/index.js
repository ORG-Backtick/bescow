import axios from 'axios';

/* eslint-disable import/prefer-default-export */
export const gettingProducts = (payload) => {
  return ({
    type: 'GETTING_PRODUCTS',
    payload,
  });
};

export const getProductsSuccess = (payload) => {
  return ({
    type: 'GET_PRODUCTS_SUCCESS',
    payload,
  });
};

export const getProductsError = (payload) => {
  return ({
    type: 'GET_PRODUCSTS_ERROR',
    payload,
  });
};

export const setError = (payload) => {
  return ({
    type: 'SET_ERROR',
    payload,
  });
};

export const setFilterList = (payload) => {
  return ({
    type: 'SET_FILTER_LIST',
    payload,
  });
};

export const setFilteredCowList = (payload) => {
  return ({
    type: 'SET_FILTERED_COW_LIST',
    payload,
  });
};

export const setReserve = (payload) => {
  return ({
    type: 'SET_RESERVE',
    payload,
  });
};

export const sendEmailToReserve = (payload) => {
  return (dispatch) => {
    axios({
      url: 'http://localhost:3000/api/email/send',
      method: 'post',
      data: payload,
    })
      .then(() => {
        dispatch(setReserve(payload));
      })
      .catch((err) => {
        dispatch(setReserve(false));
        dispatch(setError(err));
      });
  };
};

export const loginRequest = (payload) => {
  return ({
    type: 'LOGIN_REQUEST',
    payload,
  });
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    axios({
      url: 'https://bescowapi.afvalenciab.now.sh/api/auth/sign-in',
      // url: 'http://localhost:3000/api/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        dispatch(loginRequest(data));
      })
      .catch((err) => {
        dispatch(loginRequest(false));
        dispatch(setError(err));
      });
  };
};

export const registerUser = (payload) => {
  return (dispatch) => {
    axios({
      url: 'https://bescowapi.afvalenciab.now.sh/api/auth/sign-up',
      method: 'post',
      data: {
        ...payload,
        isAdmin: false,
      },
    })
      .then(() => {
        dispatch(loginUser(payload));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const logoutRequest = (payload) => {
  return ({
    type: 'LOGOUT_REQUEST',
    payload,
  });
};

export const setSearchingCoworking = (payload) => {
  return ({
    type: 'SET_SEARCHING_COWORKING',
    payload,
  });
};

export const setCoworkingView = (payload) => {
  return ({
    type: 'SET_COWORKING_VIEW',
    payload,
  });
};

export const setSelectedCow = (payload) => {
  return ({
    type: 'SET_SELECTED_COW',
    payload,
  });
};

export const setCostDetail = (payload) => {
  return ({
    type: 'SET_COST_DETAIL',
    payload,
  });
};
