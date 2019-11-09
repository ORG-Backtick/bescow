const initialState = {
  coworkingList: undefined,
  reserve: undefined,
  filterList: undefined,
  loaded: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_PRODUCTS': {
      const result = {
        ...state,
        loading: true,
        error: null,
      };
      return result;
    };

    case 'GET_PRODUCTS_SUCCESS': {
      const result = {
        ...state,
        coworkingList: action.payload,
        loaded: true,
        loading: false,
      };
      return result;
    };

    case 'GET_PRODUCSTS_ERROR': {
      const result = {
        ...state,
        error: action.payload,
        loading: false,
      };
      return result;
    };

    case 'SET_RESERVE': {
      const result = {
        ...state,
        reserve: action.payload.id,
      };
      return result;
    };

    default:
      return state;
  };
};

export default reducer;
