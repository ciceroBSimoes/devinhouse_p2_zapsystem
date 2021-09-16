import * as actionTypes from "./select-types";

const INITIAL_STATE = {
  channels: [],
  triggers: [],
};

const selectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OPTIONS: {
      return { ...state };
    }
    case actionTypes.LOAD_TRIGGERS: {
      return {
        ...state,
        triggers: action.payload,
      };
    }
    case actionTypes.LOAD_CHANNELS: {
      return {
        ...state,
        channels: action.payload,
      };
    }
    default:
      return state;
  }
};

export default selectReducer;
