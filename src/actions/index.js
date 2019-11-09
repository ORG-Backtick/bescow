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

export const setFilterList = (payload) => {
  return ({
    type: 'SET_FILTER_LIST',
    payload,
  });
};

export const setReserve = (payload) => {
  return ({
    type: 'SET_RESERVE',
    payload,
  });
};

export const loginRequest = (payload) => {
  return ({
    type: 'LOGIN_REQUEST',
    payload,
  });
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
