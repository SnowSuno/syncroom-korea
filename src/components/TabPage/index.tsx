import React, { ReactNode } from "react";
import "./style.scss";

import classNames from "classnames";

import useLink from "../../common/hooks/useLink";

import Arrow from "../../resource/img/icon/left-arrow.svg?react";

interface TabPageProps {
  className: string;
  title: string;
  children?: ReactNode;
}

function TabPage({ className, title, children }: TabPageProps) {
  const link = useLink();

  return (
    <div className={classNames("TabPage", className)}>
      <div className="header">
        <button onClick={link.to("/")}>
          <Arrow />
        </button>
        <p>{title}</p>
      </div>
      <div className="body">{children}</div>
    </div>
  );
}

export default TabPage;
