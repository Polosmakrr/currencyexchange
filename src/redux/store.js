import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = {
  currency: reducer,
};

const store = configureStore({
  reducer: combineReducers(rootReducer),
});

export default store;
