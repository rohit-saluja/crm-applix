import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Add from "./components/add";
import TableView from "./components/table-view";

export default function Page() {
  return (
    <div className="flex gap-4 flex-col">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Leads</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Leads</h1>
        </div>
        <Add />
      </div>
      <Table>
        <TableCaption>A list of your leads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assigned to</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableView />
      </Table>
    </div>
  );
}
