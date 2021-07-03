import React from "react";
import "./style.css"
import {ReactComponent as Title} from "../../resource/img/logo/title.svg";
import {ReactComponent as MenuIcon} from "../../resource/img/icon/menu.svg";
import {ReactComponent as SettingsIcon} from "../../resource/img/icon/settings.svg";

function Header() {


    return (
        <div className='header'>
            <button className='menu'>
                <MenuIcon />
                <span>MENU</span>
            </button>
            <Title height='80px'/>
            <button className='settings'>
                <div>설정</div>
                <SettingsIcon />
            </button>
        </div>
    )
}

export default Header;
