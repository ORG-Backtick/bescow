const initialState = {
  coworkingList: undefined,
  selectedCow: undefined,
  filterList: undefined,
  search: {
    location: undefined,
    date: undefined,
    coworkers: 1,
  },
  locationListAvailable: undefined,
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
      let listLocation = [];
      let coworkingList = [];
      if (action.payload) {
        coworkingList = action.payload;
        listLocation = coworkingList.map((item) => `${item.city} - ${item.country}`);
        listLocation = [...new Set(listLocation)];
      }

      const result = {
        ...state,
        coworkingList,
        locationListAvailable: listLocation,
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

    case 'SET_FILTER_LIST': {
      const result = {
        ...state,
        filterList: action.payload,
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
