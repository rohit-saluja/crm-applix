import { Employee } from "@prisma/client";
import { emptySplitApi } from ".";
import { CreateEmployee } from "@/app/types/employee";

export const employeeApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployees: builder.mutation<Employee, CreateEmployee>({
      query: (body) => ({
        url: `employees`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Employees"],
    }),
    getEmployees: builder.query<Employee[], void>({
      query: (id) => `employees`,
      providesTags: ["Employees"],
    }),
  }),
});
export const { useGetEmployeesQuery, useCreateEmployeesMutation } = employeeApi;
