import React from "react";
import "./MenuSidebar.scss";

import UserList from "../UserList";

import {closeSidebar} from "../../modules/sidebar";
import {useDispatch} from "react-redux";

import useLink from "../../common/hooks/useLink";

import {ReactComponent as Logo} from "../../resource/img/logo/title.svg";
import {ReactComponent as Arrow} from "../../resource/img/icon/left-arrow.svg";


function MenuSidebar() {
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    const link = useLink();

    return (
        <div className="menu sidebar">
            <div className="header-container">
                <button onClick={close}>
                    <Arrow />
                </button>
                <Logo />
            </div>
            <div className="button-container">
                <button
                    onClick={link.toExternal("https://sionuu.com/syncroomkr/")}
                >
                    SYNCROOM 한글 패치 다운로드
                </button>
                <button
                    onClick={link.toExternal("https://syncroom.yamaha.com/play/")}
                >
                    Original Website
                </button>
            </div>

            <UserList />
        </div>
    );
}
// const linkTo = (url: string) => () => {
//     window.open(url, '_blank')?.focus();
// };

export default MenuSidebar;

