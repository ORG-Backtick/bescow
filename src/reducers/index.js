import moment from 'moment';

const initialState = {
  user: {},
  coworkingList: undefined,
  selectedCow: undefined,
  filterList: undefined,
  filteredCowList: undefined,
  costDetail: undefined,
  locationListAvailable: undefined,
  reserve: undefined,
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

    case 'SET_FILTERED_COW_LIST': {
      const arrayLocation = action.payload.split('-');
      const filteredCowList = state.coworkingList.filter((item) => (item.city === arrayLocation[0].trim() && item.country === arrayLocation[1].trim()));

      const result = {
        ...state,
        filteredCowList,
      };
      return result;
    };

    case 'SET_SELECTED_COW': {
      const result = {
        ...state,
        selectedCow: action.payload,
      };

      return result;
    };

    case 'SET_RESERVE': {
      const result = {
        ...state,
        reserve: action.payload,
      };

      return result;
    };

    case 'LOGIN_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    };

    case 'LOGOUT_REQUEST': {
      return {
        ...state,
        user: action.payload,
      };
    };

    case 'SET_COST_DETAIL': {
      const { cow, filterList } = action.payload;
      let dateCount = 1;

      if (filterList && filterList.formDateCheckin) {
        const date1 = moment(filterList.formDateCheckin).hour(0).minute(0).seconds(0);
        const date2 = moment(filterList.formDateCheckout).hour(25).minute(0).seconds(0);

        dateCount = (date2.diff(date1, 'days'));
      } else {
        const dayDefault = moment().add(1, 'days').format('DD-MM-YYYY');
        filterList['formDateCheckin'] = dayDefault;
        filterList['formDateCheckout'] = dayDefault;
      }

      const cost = dateCount * cow.dayFare * filterList.formCow;
      const result = {
        ...state,
        costDetail: { date: filterList, total: cost, dayCost: cow.dayFare, days: dateCount },
      };

      return result;
    };

    default:
      return state;
  };
};

export default reducer;
