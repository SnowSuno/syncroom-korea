import React from "react";

import { Outlet } from "react-router-dom";

import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";
export const Layout: React.FC = () => (
  <>
    <Outlet />
    <Modal />
    <Sidebar />
  </>
);
