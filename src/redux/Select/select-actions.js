import * as actionTypes from "./select-types";

export const fetchOptions = () => {
  return {
    type: actionTypes.FETCH_OPTIONS,
  };
};

export const loadTriggers = (data) => {
  return {
    type: actionTypes.LOAD_TRIGGERS,
    payload: data,
  };
};

export const loadChannels = (data) => {
  return {
    type: actionTypes.LOAD_CHANNELS,
    payload: data,
  };
};
