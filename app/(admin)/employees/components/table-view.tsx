"use client";
import { selectEmployees } from "@/app/store/features/employee-slice";
import { useAppSelector } from "@/app/store/hooks";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";

export default function TableView() {
  const employees = useAppSelector(selectEmployees);

  return (
    <TableBody>
      {employees.map((employee) => (
        <TableRow key={employee.name}>
          <TableCell>{employee.name}</TableCell>
          <TableCell>{employee.email}</TableCell>
          <TableCell>{employee.phone}</TableCell>
          <TableCell>{employee.address}</TableCell>
          <TableCell className="text-right">
            <Button variant="outline" size="icon">
              <MdModeEditOutline className="text-2xl" />
            </Button>
            <Button variant="outline" size="icon">
              <MdOutlineDelete className="text-2xl" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
