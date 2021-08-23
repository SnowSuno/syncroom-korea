import React from "react";
import "./MenuSidebar.css";

import UserList from "../UserList";

import {closeSidebar} from "../../../modules/sidebar";
import {useDispatch} from "react-redux";


import {ReactComponent as Logo} from "../../../resource/img/logo/title.svg";
import {ReactComponent as Arrow} from "../../../resource/img/icon/left-arrow.svg";


function MenuSidebar() {
    const dispatch = useDispatch();
    const close = () => dispatch(closeSidebar());

    const linkTo = (url: string) => () => {
        window.open(url, '_blank')?.focus();
    };

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
                    onClick={linkTo("https://sionuu.com/syncroomkr/")}
                >
                    SYNCROOM 한글 패치 다운로드
                </button>
                <button
                    onClick={linkTo("https://syncroom.yamaha.com/play/")}
                >
                    Original Website
                </button>
            </div>

            <UserList />
        </div>
    );
}

export default MenuSidebar;

