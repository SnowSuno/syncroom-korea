import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  toggleSidebar: () => void;
}

export const Header: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <header className="">
      <Button onClick={toggleSidebar}>open</Button>
      <h1>Header</h1>
    </header>
  );
};
