import React from "react";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
}

export const SideBar: React.FC<Props> = ({ open }) => {
  return (
    <motion.div className="bg-red-500" animate={{ width: open ? 380 : 80 }}>
      sidebar
    </motion.div>
  );
};
