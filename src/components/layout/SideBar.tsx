import React, { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import tw from "twin.macro";
import { Menu } from "lucide-react";

interface Props {
  open: boolean;
}

export const SideBar: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      className="bg-gray-200 overflow-hidden"
      initial={false}
      animate={open ? tw`w-expand` : tw`w-fold`}
    >
      <Button
        variant="ghost"
        size="icon"
        tw="m-3"
        onClick={() => setOpen(open => !open)}
      >
        <Menu />
      </Button>
      <div tw="w-expand">
        {/*<div tw="flex flex-row items-center">*/}
        {/*  <span>Syncroom Korea</span>*/}
        {/*</div>*/}
      </div>
      {/*sidebar*/}
    </motion.section>
  );
};
