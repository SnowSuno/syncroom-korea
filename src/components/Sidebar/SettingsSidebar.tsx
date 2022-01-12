import React from "react";
import "./SettingsSidebar.scss";

import {useDispatch} from "react-redux";
import {closeSidebar} from "../../modules/sidebar";

import {ReactComponent as Settings} from "../../resource/img/icon/settings.svg";
import {ReactComponent as Arrow} from "../../resource/img/icon/right-arrow.svg";


function SettingsSidebar() {
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    return (
        <div className="settings sidebar">
            <div className="header-container">
                <div>
                    <Settings />
                    <span>설정</span>
                </div>
                <button onClick={close}>
                    <Arrow fill="#FFFFFF"/>
                </button>
            </div>

        </div>
    );
}

export default SettingsSidebar;
