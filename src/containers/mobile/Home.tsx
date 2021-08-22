import React from "react";
import "./Home.css";

import {ReactComponent as Logo} from "../../resource/img/logo/syncroom.svg";

function Home() {

    return (
        <div id="temp-mobile-page">
            <div className="title">모바일 버전은 아직 지원하지 않습니다<br/>ㅠㅠ</div>
            <Logo />
            <p>데스크톱 버전 웹사이트는 모바일 환경에서 제대로 표시되지 않을 수 있습니다</p>


        </div>
    );
}

export default Home;