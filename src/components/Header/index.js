import React from "react";
import "./style.css"

import useScrollTransition from "../../hooks/useScrollTransition";

import {ReactComponent as Title} from "../../resource/img/logo/title.svg";
import {ReactComponent as MenuIcon} from "../../resource/img/icon/menu.svg";
import {ReactComponent as SettingsIcon} from "../../resource/img/icon/settings.svg";

function Header() {
    const scroll = 5.8;

    // const headerHeight = 5.8;
    const defaultWidth = 13.6;
    // const rate = (defaultWidth - headerHeight) / headerHeight;
    //
    // const scrollY = useScroll();

    const height = useScrollTransition(0, scroll, 5.8, 4.6);
    const width = useScrollTransition(0, scroll, defaultWidth, 4.6);
    const opacity = useScrollTransition(0, scroll, 1, 0);
    const textWidth = useScrollTransition(0, scroll, 5, 0);
    const lightness = useScrollTransition(0, scroll, 100, 96);
    const titleWidth = useScrollTransition(0, scroll, 100, 0);


    return (
        <div className='header' style={{height: `${height}rem` ,background: `hsl(220, 19%, ${lightness}%)`}}>
            <button className='menu' style={{width: `${width}rem`}}>
                <MenuIcon />
                <text style={{opacity, width: `${textWidth}rem`}}>MENU</text>
            </button>
            <div>
                <div className='title' style={{width: `${titleWidth}%`}}>
                    <Title height='87%'/>
                </div>
            </div>
            <button className='settings' style={{width: `${width}rem`}}>
                <text style={{opacity, width: `${textWidth}rem`}}>설정</text>
                <SettingsIcon />
            </button>
        </div>
    )
}

export default Header;
