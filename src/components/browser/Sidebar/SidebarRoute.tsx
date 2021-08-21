import React from "react";

import {SidebarClassType} from "../../../modules/sidebar/sidebarClass";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {closeSidebar} from "../../../modules/sidebar";

interface SidebarRouteProps {
    route: SidebarClassType;
    children: JSX.Element;
}

function SidebarRoute({route, children}: SidebarRouteProps) {
    const {sidebarClass} = useSelector((state: RootState) => state.sidebar);
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    const isOpen: boolean = (route === sidebarClass);

    return (
        <div className={isOpen ? "open" : "closed"}>
            {isOpen ? <div className="overlay" onClick={close} /> : null}
            {children}
        </div>
    );
}

export default SidebarRoute;
