import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducers/studentSlice';

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
