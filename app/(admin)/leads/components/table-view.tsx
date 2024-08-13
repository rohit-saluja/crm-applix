"use client";
import { useAppSelector } from "@/app/store/hooks";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import Edit from "./edit";
import Delete from "./delete";
import { selectLeads } from "@/app/store/features/lead-slice";

export default function TableView() {
  const leads = useAppSelector(selectLeads);

  return (
    <TableBody>
      {leads.map((lead) => (
        <TableRow key={lead.id}>
          <TableCell>{lead.customer}</TableCell>
          <TableCell>{lead.status}</TableCell>
          <TableCell>{lead.assigned_to}</TableCell>
          <TableCell>{lead.created_at}</TableCell>
          <TableCell className="text-right">
            <Edit lead={lead} />
            <Delete lead={lead} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
