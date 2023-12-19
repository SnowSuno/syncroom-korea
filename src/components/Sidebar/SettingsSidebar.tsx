import React from "react";
import "./SettingsSidebar.scss";

import SettingsSidebarButton from "./SettingsSidebarButton";

import { useDispatch } from "react-redux";
import { closeSidebar } from "../../modules/sidebar";

import Settings from "../../resource/img/icon/settings.svg?react";
import Arrow from "../../resource/img/icon/right-arrow.svg?react";

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
          <Arrow fill="#FFFFFF" />
        </button>
      </div>
      <div className="body">
        <SettingsSidebarButton href="/notice" label="공지사항" />
        <SettingsSidebarButton
          href="mailto:kr.syncroom@gmail.com"
          label="문의하기"
        />
        <SettingsSidebarButton
          href="https://github.com/syncroomkr/syncroomkr.github.io"
          label="소스코드 보기"
        />
        <SettingsSidebarButton
          href="/buymeacoffee"
          label="개발자에게 커피 사주기"
        />
      </div>
    </div>
  );
}

export default SettingsSidebar;
