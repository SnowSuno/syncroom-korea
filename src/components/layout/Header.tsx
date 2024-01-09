import React from "react";

import { Logo } from "@/assets";
import Toolbar from "@/components/Header/Toolbar";

interface Props {
  toggleSidebar: () => void;
}

export const Header: React.FC<Props> = () => {
  return (
    <header
      className="absolute left-fold top-0 right-0
        flex flex-row h-fold
        items-center px-2 gap-6
        z-20
      "
    >
      {/*<Button variant="ghost" size="icon" onClick={toggleSidebar}>*/}
      {/*  <Menu />*/}
      {/*</Button>*/}
      <span className="w-64">
        <Logo className="h-16" />
      </span>
      <Toolbar />
    </header>
  );
};
