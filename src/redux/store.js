import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import testimonialsReducer from './testimonialsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialsReducer,
  },
});

export default store;
