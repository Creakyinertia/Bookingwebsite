'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '../../types/types';

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomers(state, action: PayloadAction<Customer[]>) {
      state.customers = action.payload;
    },
    addCustomer(state, action: PayloadAction<Customer>) {
      state.customers.push(action.payload);
    },
  },
});

export const { setCustomers, addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
