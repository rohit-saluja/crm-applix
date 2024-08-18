"use client";
import { selectEmployees } from "@/app/store/features/employee-slice";
import { useAppSelector } from "@/app/store/hooks";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Edit from "./edit";
import Delete from "./delete";
import { useGetEmployeesQuery } from "@/app/store/services/employee";

export default function TableView() {
  const { data: employees } = useGetEmployeesQuery();
  return (
    <TableBody>
      {employees?.map((employee) => (
        <TableRow key={employee.name}>
          <TableCell>{employee.name}</TableCell>
          <TableCell>{employee.email}</TableCell>
          <TableCell>{employee.phone}</TableCell>
          <TableCell>{employee.address}</TableCell>
          <TableCell className="text-right">
            <Edit employee={employee} />
            <Delete employee={employee} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
