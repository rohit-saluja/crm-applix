import { ReactNode } from "react";
import { Header } from "../components/header";
import SideBar from "../components/side-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="ml-[200px] p-4">{children}</div>
    </div>
  );
}
