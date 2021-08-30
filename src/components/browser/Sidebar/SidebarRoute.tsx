import React, {useMemo} from "react";
import classNames from "classnames";

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

    const isOpen: boolean = useMemo(() => route === sidebarClass, [route, sidebarClass]);

    return (
        <div className={classNames({open: isOpen, closed: !isOpen})}>
            <div className="overlay" onClick={close} />
            {children}
        </div>
    );
}

export default SidebarRoute;
