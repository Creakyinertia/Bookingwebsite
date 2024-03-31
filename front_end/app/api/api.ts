import axios from 'axios';
import { Employee, Customer } from '../types/types';

const baseURL = 'http://127.0.0.1:8000/';

export const getAllEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(`${baseURL}/employee`);
  return response.data;
};

export const createEmployee = async (employeeData: Employee): Promise<Employee> => {
  const response = await axios.post<Employee>(`${baseURL}/employee`, employeeData);
  return response.data;
};

export const getAllCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get<Customer[]>(`${baseURL}/customer`);
  return response.data;
};

export const createCustomer = async (customerData: Customer): Promise<Customer> => {
  const response = await axios.post<Customer>(`${baseURL}/customer`, customerData);
  return response.data;
};
