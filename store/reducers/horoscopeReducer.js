import * as Types from "../constants/horoscopeTypes";
import * as ClearDataTypes from "../constants/clearDataType";

const init = {
  horoscope: null,
  error: null,
};

const horoReudcer = (state = init, action) => {
  switch (action.type) {
    case Types.HOROSCOPE_ADD: {
      return {
        horoscope: action.payload,
        error: null,
      };
    }
    case Types.HOROSCOPE_ADD_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case Types.HOROSCOPE_GET: {
      return {
        horoscope: action.payload,
        error: null,
      };
    }
    case Types.HOROSCOPE_GET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case ClearDataTypes.CLEAR_DATA: {
      return {
        isAuthenticate: false,
        user: {},
        error: null,
      };
    }
    default:
      return state;
  }
};

export default horoReudcer;
