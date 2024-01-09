import React from "react";

import Logo from "../../resource/img/logo/title.svg?react";
import MenuIcon from "../../resource/img/icon/menu.svg?react";
import SettingsIcon from "../../resource/img/icon/settings.svg?react";

import { openSidebar } from "../../modules/sidebar";
import { useDispatch } from "react-redux";
import { SidebarClass } from "../../modules/sidebar/sidebarClass";

/**
 * @deprecated
 */
function Title() {
  const dispatch = useDispatch();

  return (
    <div className="Title">
      <button
        className="menu side-btn"
        onClick={() =>
          dispatch(openSidebar({ sidebarClass: SidebarClass.MENU }))
        }
      >
        <MenuIcon />
        <div>MENU</div>
      </button>
      <div>
        <div className="logo-container">
          <Logo />
        </div>
      </div>
      <button
        className="settings side-btn"
        onClick={() =>
          dispatch(openSidebar({ sidebarClass: SidebarClass.SETTINGS }))
        }
      >
        <div>설정</div>
        <SettingsIcon />
      </button>
    </div>
  );
}

export default React.memo(Title);
