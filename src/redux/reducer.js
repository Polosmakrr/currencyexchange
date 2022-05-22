import { combineReducers, createReducer } from '@reduxjs/toolkit';

const currencyData = createReducer([], {
  fetchSuccess: (_, { payload }) => [payload.supported_codes],
});

const convertData = createReducer([], {
  fetchConvertSuccess: (_, { payload }) => [payload],
});

const convertDataReverce = createReducer([], {
  fetchConvertReverceSuccess: (_, { payload }) => [payload],
});

const latestUAH = createReducer([], {
  fetchLatestUAHSuccess: (_, { payload }) => [payload],
});

export default combineReducers({
  currencyData,
  latestUAH,
  convertData,
  convertDataReverce,
});
