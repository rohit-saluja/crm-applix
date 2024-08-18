import { Employee } from "@prisma/client";
import { emptySplitApi } from ".";
import { CreateCustomer, UpdateCustomer } from "@/app/types/customer";

export const employeeApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    createCustomer: builder.mutation<Employee, CreateCustomer>({
      query: (body) => ({
        url: `customers`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Customers"],
    }),
    updateCustomer: builder.mutation<Employee, UpdateCustomer>({
      query: ({ id, ...body }) => ({
        url: `customers/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Customers"],
    }),
    getCustomers: builder.query<Employee[], void>({
      query: (id) => `customers`,
      providesTags: ["Customers"],
    }),
    deleteCustomer: builder.mutation<void, number>({
      query: (id) => ({
        url: `customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customers"],
    }),
  }),
});

export const { useGetCustomersQuery, useUpdateCustomerMutation, useDeleteCustomerMutation, useCreateCustomerMutation } = employeeApi;
