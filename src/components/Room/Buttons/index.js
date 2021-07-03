import React from "react";
import "./style.css"

function Buttons({color, tempJoin, join}) {


    return (
        <div className="buttons">
            <button className='share'>
                <text>공유</text>
            </button>
            <div className='join-buttons'>
                <button
                    className='temp'
                    onClick={() => window.location.href=tempJoin}
                >
                    <text>임시 입장</text>
                </button>
                <button
                    className='join'
                    style={{background: color}}
                    onClick={() => window.location.href=join}
                >
                    <text>참여하기</text>
                </button>
            </div>
        </div>
    )
}

export default Buttons;