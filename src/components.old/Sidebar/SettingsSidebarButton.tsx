import React from "react";

import useLink from "../../common/hooks/useLink";

import {closeSidebar} from "../../modules/sidebar";
import {useDispatch} from "react-redux";

interface SettingsSidebarButtonProps {
    href: string;
    label: string;
}

function SettingsSidebarButton({href, label}: SettingsSidebarButtonProps) {
    const link = useLink();
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    const move = () => {
        link.to(href)();
        close();
    }

    return (
        <button onClick={move}>
            {label}
        </button>
    )
}

export default SettingsSidebarButton;
