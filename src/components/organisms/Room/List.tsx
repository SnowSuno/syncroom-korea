import React, { type PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";

export const RoomList: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <li className="grid grid-cols-auto-fit gap-2">
    <AnimatePresence mode="popLayout">{children}</AnimatePresence>
  </li>
);
