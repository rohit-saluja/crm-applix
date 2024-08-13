"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";

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
        <span className="flex items-center gap-4 ">
          <MdOutlinePersonOutline className="text-lg" />
          <span>Employees</span>
        </span>
      </Link>
      <Link
        href={"/customers"}
        className={`${classNames({
          "bg-accent": pathname.includes("customers"),
        })}  flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground px-2`}
      >
        <MdPersonAddAlt className="text-lg" />
        <span>Customers</span>
      </Link>
    </div>
  );
}
