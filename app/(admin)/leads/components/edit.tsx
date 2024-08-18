"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useToast } from "@/components/ui/use-toast";
import { selectCustomers } from "@/app/store/features/customer-slice";
import { Lead } from "@/app/types/lead";
import { updateLead } from "@/app/store/features/lead-slice";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { statusOptions } from "@/config";
import { MdModeEditOutline } from "react-icons/md";
import moment from "moment";
import { useGetEmployeesQuery } from "@/app/store/services/employee";

export default function Edit({ lead }: { lead: Lead }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const customers = useAppSelector(selectCustomers);
  const { data: employees } = useGetEmployeesQuery();

  const formSchema = z.object({
    customer: z.string().min(1, { message: "Customer is required" }),
    status: z.string().min(1, { message: "Status is required" }),
    assigned_to: z.string().min(1, { message: "Employee is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer: lead.customer,
      status: lead.status,
      assigned_to: lead.assigned_to,
    },
  });
  const customerOptions = customers.map((customer) => ({ name: customer.name, value: customer.name }));
  const employeeOptions = employees?.map((employee) => ({ name: employee.name, value: employee.name }));

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(updateLead({ ...values, id: lead.id, created_at: moment().format("dd-MM-YYYY") }));
    toast({
      description: "Lead is added",
    });
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" size="icon">
          <MdModeEditOutline className="text-2xl" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Lead</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="customer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select customer" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {customerOptions.map((customer) => (
                            <SelectItem value={customer.value as string} key={customer.value}>
                              {customer.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {statusOptions.map((status) => (
                            <SelectItem value={status.value as string} key={status.value}>
                              {status.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assigned to (employee)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employee" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {employeeOptions?.map((employee) => (
                            <SelectItem value={employee.value as string} key={employee.value}>
                              {employee.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
