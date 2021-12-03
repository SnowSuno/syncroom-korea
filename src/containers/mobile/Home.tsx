import React from "react";
import "./Home.css";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";

import {ReactComponent as Logo} from "../../resource/img/logo/syncroom.svg";


function Home() {


    return (

        <div id="temp-mobile-page">
            <div className="Title">모바일 버전은 아직 지원하지 않습니다<br/>ㅠㅠ</div>
            <Logo />
        </div>
    );
}

export default Home;
