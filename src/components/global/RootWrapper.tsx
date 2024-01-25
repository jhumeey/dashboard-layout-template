"use client";
import { MobileSidebar, Desktopbar, Navbar } from "@/components/navbar";
import { useState } from "react";
import { RootProps } from "./types";

const RootWrapper = ({children}: RootProps) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <MobileSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Desktopbar />
      <div className="lg:pl-72">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default RootWrapper;
