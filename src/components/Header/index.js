import React from "react";
import "./style.css"

function Header() {


    return (
        <div className='header'>
            <button className='menu'>
                <span>MENU</span>
            </button>
            <div className='title'>SYNCROOM KOREA</div>
            <button className='settings'>설정</button>
        </div>
    )
}

export default Header;
