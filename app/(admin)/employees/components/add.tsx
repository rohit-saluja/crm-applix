import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function Add() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}>Add New</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Employees</DialogTitle>
          <DialogDescription>
            <Input />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
