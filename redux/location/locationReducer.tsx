// locationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.error = null;
    },
    setLocationError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const { setLocation, setLocationError } = locationSlice.actions;

export default locationSlice.reducer;
