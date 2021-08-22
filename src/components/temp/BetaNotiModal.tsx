// entry point : src\
//

import React, {useState} from "react";
import "./BetaNotiModal.css";


function BetaNotiModal() {
    const [open, setOpen] = useState<boolean>(true);

    return (
        open
            ? <div id="beta-noti-modal">
                <div className="overlay" onClick={() => setOpen(false)}/>
                <div className="temp-modal">
                    <div className="title">SYNCROOM KOREA BETA TEST에 오신 것을 환영합니다!</div>
                    Syncroom Korea는 한국 사용자들이 더 편하게 싱크룸 방 입장 페이지를 이용할 수 있도록 만들어진 웹사이트입니다.
                    <br/>
                    (대충 공지 내용 적을 예정)
                </div>
            </div>
            : <></>
    );
}

export default BetaNotiModal;
