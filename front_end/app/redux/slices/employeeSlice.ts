'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../types/types';

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload;
    },
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },
  },
});

export const { setEmployees, addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
