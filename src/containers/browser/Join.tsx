import React from "react";
import "./Join.css";
import {Link} from "react-router-dom"

import {decodeShareLink} from "../../common/util/shareLink";
import {joinRoom} from "../../common/util/joinRoom";

import {ReactComponent as SyncroomLogo} from "../../resource/img/logo/syncroom.svg";
import {ReactComponent as Lock} from "../../resource/img/icon/lock.svg";
import useInput from "../../common/hooks/useInput";

interface JoinProps {
    location: JoinInfoProps;
}
interface JoinInfoProps {
    search: string;
}

function Join({location: {search}}: JoinProps) {
    return (
        <div className="join-page">
            <Link to="/" className="return">
                <svg viewBox="0 0 2 2" height="1.2rem">
                    <polyline
                        points="1,0.5 0.5,1 1,1.5"
                        stroke="#686a6e"
                        strokeWidth="0.01rem"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
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
    const inputPassword = useInput('');
    const Install: JSX.Element = (
        <div className="install">
            싱크룸이 설치되어 있지 않다면 <Link to="/" className="link">설치하기</Link>
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
