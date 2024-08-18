"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Employee } from "@/app/types/employee";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useDeleteEmployeeMutation } from "@/app/store/services/employee";

export default function Delete({ employee }: { employee: Employee }) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [deleteEmployee, { isLoading }] = useDeleteEmployeeMutation();

  async function onSubmit() {
    try {
      await deleteEmployee(employee.id as number).unwrap();
    } catch (e: any) {
      toast({ description: e.data.error, variant: "destructive" });
      throw e;
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline" size="icon">
          <MdOutlineDelete className="text-2xl" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Employees</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4">
              <h1>Are you sure you want to delete this employee?</h1>
              <div className="flex justify-end items-center gap-2">
                <Button variant={"outline"} type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant={"destructive"} onClick={() => onSubmit()} disabled={isLoading}>
                  Delete
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
