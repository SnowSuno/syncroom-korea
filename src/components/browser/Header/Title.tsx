import React from "react";

import {ReactComponent as Logo} from "../../../resource/img/logo/title.svg";
import {ReactComponent as MenuIcon} from "../../../resource/img/icon/menu.svg";
import {ReactComponent as SettingsIcon} from "../../../resource/img/icon/settings.svg";

import {openSidebar} from "../../../modules/sidebar";
import {useDispatch} from "react-redux";
import {SidebarClass} from "../../../modules/sidebar/sidebarClass";

function Title() {
    const dispatch = useDispatch();

    return (
        <div className='Title'>
            <button
                className='menu side-btn'
                onClick={() => dispatch(
                    openSidebar({sidebarClass: SidebarClass.MENU})
                )}
            >
                <MenuIcon />
                <div>MENU</div>
            </button>
            <div>
                <div className='logo-container'>
                    <Logo height='87%'/>
                </div>
            </div>
            <button
                className='settings side-btn'
                onClick={() => dispatch(
                    openSidebar({sidebarClass: SidebarClass.SETTINGS})
                )}
            >
                <div>설정</div>
                <SettingsIcon />
            </button>
        </div>
    )
}

export default React.memo(Title);
