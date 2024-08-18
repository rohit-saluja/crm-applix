import { Employee } from "@prisma/client";
import { emptySplitApi } from ".";
import { CreateEmployee, UpdateEmployee } from "@/app/types/employee";

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
    updateEmployees: builder.mutation<Employee, UpdateEmployee>({
      query: ({ id, ...body }) => ({
        url: `employees/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Employees"],
    }),
    getEmployees: builder.query<Employee[], void>({
      query: (id) => `employees`,
      providesTags: ["Employees"],
    }),
    deleteEmployee: builder.mutation<void, number>({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employees"],
    }),
  }),
});
export const { useGetEmployeesQuery, useCreateEmployeesMutation, useDeleteEmployeeMutation, useUpdateEmployeesMutation } = employeeApi;
