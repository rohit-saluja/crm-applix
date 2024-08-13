"use client";
import { useAppSelector } from "@/app/store/hooks";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Edit from "./edit";
import Delete from "./delete";
import { selectCustomers } from "@/app/store/features/customer-slice";

export default function TableView() {
  const customers = useAppSelector(selectCustomers);

  return (
    <TableBody>
      {customers.map((customer) => (
        <TableRow key={customer.name}>
          <TableCell>{customer.name}</TableCell>
          <TableCell>{customer.email}</TableCell>
          <TableCell>{customer.phone}</TableCell>
          <TableCell>{customer.address}</TableCell>
          <TableCell className="text-right">
            <Edit customer={customer} />
            <Delete customer={customer} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
