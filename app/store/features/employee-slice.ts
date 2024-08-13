import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Employee } from "@/app/types/employee";
import { type RootState } from "..";

const initialState: { employees: Employee[] } = {
  employees: [{}],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex((employee) => employee.name === action.payload.name);
      state.employees[index] = action.payload;
    },
    deleteEmployee: (state, action: PayloadAction<Employee>) => {
      const remaining = state.employees.filter((employee) => employee.name === action.payload.name);
      state.employees = remaining;
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [action.payload, ...state.employees];
    },
  },
});

export const selectEmployees = (state: RootState) => state.employee.employees;

export const { updateEmployee, deleteEmployee, addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
