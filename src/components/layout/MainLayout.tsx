import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import { Header, SideBar } from "@/components/layout";
import Modal from "@/components/Modal";
import { ScrollArea } from "@/components/ui/scroll-area";

export const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex flex-col h-full">
      <Header toggleSidebar={() => setIsSidebarOpen(open => !open)} />
      <section className="flex-1 flex flex-row items-stretch overflow-hidden">
        <SideBar open={isSidebarOpen} />
        <ScrollArea className="flex-1 mt-16">
          <Outlet />
        </ScrollArea>
      </section>
      <Modal />
      {/*<DeprecatedSidebar />*/}
    </main>
  );
};
