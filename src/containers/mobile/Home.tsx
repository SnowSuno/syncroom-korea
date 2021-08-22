import React from "react";
import "./Home.css";

import {ReactComponent as Logo} from "../../resource/img/logo/syncroom.svg";

function Home() {

    return (
        <div id="temp-mobile-page">
            <div className="title">모바일 버전은 아직 지원하지 않습니다<br/>ㅠㅠ</div>
            <Logo />
            <p>데스크톱 버전 웹사이트는 모바일 환경에서 제대로 표시되지 않을 수 있습니다</p>

            <p>Safari 14.1 미만 버전(2021년 4월 업데이트)에서는 레이아웃이 제대로 표시되지 않을 수 있습니다. </p>

        </div>
    );
}

export default Home;