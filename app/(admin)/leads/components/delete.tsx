"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useAppDispatch } from "@/app/store/hooks";
import { Button } from "@/components/ui/button";
import { Lead } from "@/app/types/lead";
import { deleteLead } from "@/app/store/features/lead-slice";

export default function Delete({ lead }: { lead: Lead }) {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  function onSubmit() {
    dispatch(deleteLead(lead));
    toast({
      description: "Employee is deleted",
    });
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
          <DialogTitle>Delete Customer</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4">
              <h1>Are you sure you want to delete this lead?</h1>
              <div className="flex justify-end items-center gap-2">
                <Button variant={"outline"} type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button variant={"destructive"} onClick={() => onSubmit()}>
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
