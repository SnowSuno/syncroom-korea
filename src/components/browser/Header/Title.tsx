import React from "react";
import "./style.css"

import {ReactComponent as Logo} from "../../../resource/img/logo/title.svg";
import {ReactComponent as MenuIcon} from "../../../resource/img/icon/menu.svg";
import {ReactComponent as SettingsIcon} from "../../../resource/img/icon/settings.svg";

function Title() {
    return (
        <div className='title'>
            <button className='menu side-btn'>
                <MenuIcon />
                <text>MENU</text>
            </button>
            <div>
                <div className='logo-container'>
                    <Logo height='87%'/>
                </div>
            </div>
            <button className='settings side-btn'>
                <text>설정</text>
                <SettingsIcon />
            </button>
        </div>
    )
}

export default Title;
