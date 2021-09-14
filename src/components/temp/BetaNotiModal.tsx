// entry point : src\
//

import React, {useState} from "react";
import "./BetaNotiModal.css";

const TEST_VERSION = document.URL === "https://syncroomkr.github.io/"
    ? "ALPHA"
    : "BETA";

function BetaNotiModal() {
    const [open, setOpen] = useState<boolean>(true);

    return (
        open
            ? <div id="beta-noti-modal">
                <div className="overlay" onClick={() => setOpen(false)}/>
                <div className="temp-modal">
                    <div className="title">SYNCROOM KOREA {TEST_VERSION} TEST에 오신 것을 환영합니다!</div>
                    Syncroom Korea는 한국 사용자들이 더 편하게 싱크룸 방 입장 페이지를 이용할 수 있도록 만들어진 웹사이트입니다.
                    <br/>
                    <div style={{color: 'red'}}>* {TEST_VERSION} 버전이라 구현되지 않은 기능 및 일부 버그가 존재합니다!!</div>
                    <div className="issues">
                        <div style={{fontSize: "1.1rem", fontWeight: 500}}>미구현 기능 / 발견된 버그</div>
                        <ul>
                            <li>알림 기능은 아직 구현되지 않음</li>
                            <li>설정 사이드바에 기능들이 추가되지 않음</li>
                            <li>IOS Safari 14.0 이하의 버전에서 레아아웃 깨짐 발생</li>
                            <li>같은 프로필, 이름의 사용자가 같은 방 참여시 한 명만 표시됨</li>
                        </ul>

                    </div>
                    <div className="issues">
                        <div style={{fontSize: "1.1rem", fontWeight: 500}}>업데이트 사항 (2021.09.14)</div>
                        <ul>
                            <li>"즐겨찾기 멤버" 기능 업데이트!</li>
                            <li><strong>불쌍한 고3 개발자 입시하러 가서 당분간 업데이트 없습니다ㅠㅠ</strong></li>
                        </ul>

                    </div>

                    <div className="contact">
                        버그 제보 또는 기능 제안은 <a href="mailto:kr.syncroom@gmail.com" color="#505050">
                            kr.syncroom@gmail.com
                        </a>으로 부탁드립니다.
                    </div>
                </div>
            </div>
            : <></>
    );
}

export default BetaNotiModal;
