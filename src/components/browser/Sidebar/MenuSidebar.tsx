import React from "react";
import "./MenuSidebar.css";

import {closeSidebar} from "../../../modules/sidebar";
import {useDispatch} from "react-redux";


import {ReactComponent as Logo} from "../../../resource/img/logo/title.svg";


function MenuSidebar() {
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    return (
        <div className="menu sidebar">
            <div className="header-container">
                <button onClick={close}>
                    -
                </button>
                <Logo />
            </div>
            qwerqwer
            qwerqwer
            qwerqwer
        </div>
    );
}

export default MenuSidebar;

