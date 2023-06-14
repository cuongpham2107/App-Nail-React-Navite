// store.js
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location/locationReducer';
import authReducer from './authenticate/authReducer';

const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
  },
});

export default store;
