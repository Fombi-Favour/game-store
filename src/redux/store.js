import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    details: detailsReducer,
  },
});

export default store;
