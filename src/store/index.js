import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import booking from './reducers/bookingReducer';
import user from './reducers/userReducers';

const reducer = combineReducers({
  /*Below used names behave as key on store JSON.
  Ex:
  store: { user:{}, booking:{}}
  */
  user,
  booking,
});

const store = configureStore({
  reducer,
});

export default store;
