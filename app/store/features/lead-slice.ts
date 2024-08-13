import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { Lead } from "@/app/types/lead";

const initialState: { leads: Lead[] } = {
  leads: [],
};

export const leadSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateLead: (state, action: PayloadAction<Lead>) => {
      const index = state.leads.findIndex((lead) => lead.id === action.payload.id);
      state.leads[index] = action.payload;
    },
    deleteLead: (state, action: PayloadAction<Lead>) => {
      const remaining = state.leads.filter((lead) => lead.id === action.payload.id);
      state.leads = remaining;
    },
    addLead: (state, action: PayloadAction<Lead>) => {
      action.payload.id = Math.floor(Math.random() * 1000001).toString();
      state.leads = [action.payload, ...state.leads];
    },
  },
});

export const selectEmployees = (state: RootState) => state.employee.employees;

export const { updateLead, deleteLead, addLead } = leadSlice.actions;
export default leadSlice.reducer;
