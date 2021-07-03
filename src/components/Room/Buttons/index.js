import React from "react";
import "./style.css"

function Buttons({color, tempJoin, join}) {


    return (
        <div className="buttons">
            <button className='share'>공유</button>
            <div className='join-buttons'>
                <button
                    className='temp'
                    onClick={() => window.location.href=tempJoin}
                >임시 입장
                </button>
                <button
                    className='join'
                    style={{background: color}}
                    onClick={() => window.location.href=join}
                >참여하기
                </button>
            </div>
        </div>
    )
}

export default Buttons;