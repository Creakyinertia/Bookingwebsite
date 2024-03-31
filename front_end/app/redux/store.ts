'use client';

import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import customerReducer from './slices/customerSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;