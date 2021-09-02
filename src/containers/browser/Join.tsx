import React from "react";
import "./Join.scss";
import {Link} from "react-router-dom"

import {decodeShareLink} from "../../common/util/shareLink";
import {joinRoom} from "../../common/util/joinRoom";

import {ReactComponent as SyncroomLogo} from "../../resource/img/logo/syncroom.svg";
import {ReactComponent as Lock} from "../../resource/img/icon/lock.svg";
import {ReactComponent as Return} from "../../resource/img/icon/return.svg";

import useInput from "../../common/hooks/useInput";

interface JoinProps {
    location: JoinInfoProps;
}
interface JoinInfoProps {
    search: string;
}

function Join({location: {search}}: JoinProps) {
    return (
        <div className="Join">
            <Link to="/" className="return">
                <Return />
                홈으로 돌아가기
            </Link>
            <div className="body">
                <SyncroomLogo/>
                <JoinInfo search={search}/>
            </div>
        </div>
    );
}

function JoinInfo({search}: JoinInfoProps) {
    const {input: inputPassword} = useInput('');
    const Install: JSX.Element = (
        <div className="install">
            싱크룸이 설치되어 있지 않다면 <a
            href="https://syncroom.yamaha.com/play/dl/"
            target="_blank"
            rel="noreferrer"
        >설치하기</a>
        </div>
    );

    try {
        const {roomName, password} = decodeShareLink(search.slice(1));
        console.log({roomName, password});
        if (password !== undefined) {
            joinRoom(roomName, password, false);
            return (
                <>
                    <div className="title">
                        {roomName} 방 참가 중…
                    </div>
                    <div className="prompt">
                        <button onClick={() => joinRoom(roomName, password, false)}>
                            <span>참가하기</span>
                        </button>
                    </div>
                    {Install}
                </>
            )
        } else {

            return (
                <>
                    <div className="title">
                        <Lock fill="#000000" />
                        {roomName} 방 참가
                    </div>
                    <div className="prompt">
                        <input
                            type="text"
                            placeholder="비밀번호를 입력하세요"
                            {...inputPassword}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') joinRoom(roomName, inputPassword.value, false)
                            }}
                        />
                        <button
                            className="password"
                            onClick={() => joinRoom(roomName, inputPassword.value, false)}
                        >
                            <span>참가하기</span>
                        </button>
                    </div>
                    {Install}
                </>
            );
        }
    } catch (e) {
        return (
            <>
                <div className="title">
                    잘못된 참가 링크입니다
                </div>
                <div className="desc">
                    방 참가 링크를 확인해 주세요
                </div>
            </>
        );
    }
}

export default Join;
