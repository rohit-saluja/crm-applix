"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="fixed min-w-[200px] min-h-screen left-0 border-r border flex flex-col gap-4 py-4 px-2">
      <Link
        href={"/employees"}
        className={`${classNames({
          "bg-accent": pathname.includes("employees"),
        })}  flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground px-2`}
      >
        Employees
      </Link>
      <Link
        href={"/customers"}
        className={`${classNames({
          "bg-accent": pathname.includes("customers"),
        })}  flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground px-2`}
      >
        Customers
      </Link>
    </div>
  );
}
