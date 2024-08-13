import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { Customer } from "@/app/types/customer";

const initialState: { customers: Customer[] } = {
  customers: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex((customer) => customer.id === action.payload.id);
      state.customers[index] = action.payload;
    },
    deleteCustomer: (state, action: PayloadAction<Customer>) => {
      const remaining = state.customers.filter((customer) => customer.id === action.payload.id);
      state.customers = remaining;
    },
    addCustomer: (state, action: PayloadAction<Customer>) => {
      action.payload.id = Math.floor(Math.random() * 1000001).toString();
      state.customers = [action.payload, ...state.customers];
    },
  },
});

export const selectEmployees = (state: RootState) => state.employee.employees;

export const { updateCustomer, deleteCustomer, addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
