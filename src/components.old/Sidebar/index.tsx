import React from "react";
import "./style.scss";

import {SidebarClass} from "../../modules/sidebar/sidebarClass";

import SidebarRoute from "./SidebarRoute";
import MenuSidebar from "./MenuSidebar";
import SettingsSidebar from "./SettingsSidebar";

function Sidebar() {
    return (
        <div className="SidebarContainer">
            <SidebarRoute route={SidebarClass.MENU}>
                <MenuSidebar />
            </SidebarRoute>
            <SidebarRoute route={SidebarClass.SETTINGS}>
                <SettingsSidebar />
            </SidebarRoute>
        </div>
    );
}

export default Sidebar;
