import Link from "next/link";

export default function SideBar() {
  return (
    <div className="fixed min-w-[200px] min-h-screen left-0 border-r border flex flex-col gap-4 py-4 px-2">
      <Link
        href={"/employees"}
        className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground bg-accent px-2"
      >
        Employees
      </Link>
      <Link
        href={"/customers"}
        className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground bg-accent px-2"
      >
        Customers
      </Link>
    </div>
  );
}
