import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import studentReducer from './reducers/studentSlice';
// import paymentReducer from './reducers/paymentSlice';
import authReducer from "./reducers/authSlice";

// Configure the combined store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    // payment: paymentReducer, // Add the payment slice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // explicitly add redux-thunk
});

export default store;
 