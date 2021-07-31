import React from "react";
import "./Join.css";

import {decodeShareLink} from "../../common/util/shareLink";
import {joinRoom} from "../../common/util/joinRoom";

import {ReactComponent as SyncroomLogo} from "../../resource/img/logo/syncroom.svg";

interface JoinProps {
    location: JoinInfoProps;
}
interface JoinInfoProps {
    search: string;
}

function Join({location: {search}}: JoinProps) {
    return (
        <div className="join-page">

            <SyncroomLogo />
            <div className="info">
                <JoinInfo search={search}/>
            </div>
        </div>
    );
}
function JoinInfo({search}: JoinInfoProps) {
    try {
        const {roomName, password} = decodeShareLink(search.slice(1));
        console.log({roomName, password});
        if (password !== undefined) {
            joinRoom(roomName, password, false);
            return (
                <div>
                    리디렉트 중
                </div>
            )
        } else {

            return (
                <div>
                    비밀번호를 입력하세요
                </div>
            );
        }
    } catch (e) {
        // console.log(e);
        return (
            <div>
                링크가 잘못되었습니다
            </div>
        );
    }
}

export default Join;

// FROM old Join/index.js
// import makeJoinURI from "../../../common/util/joinURI";
// import shareURI from "../../../common/util/shareURI";
//
// function Join({location:{search}, history}) {
//     // /**
//     //  * @param params.room
//     //  * @param params.pw
//     //  */
//     // const {room, pw = ""} = Object.fromEntries(
//     //     decodeURI(search).slice(img).split('&').map(s => s.split('='))
//     // );
//     const [room, pw=""] = shareURI.decode(search.slice(1));
//
//     const joinURI = makeJoinURI(room, pw, 4, 2);
//
//     if (!room) {
//         history.push('./notfound');
//     } else {
//         window.location.href = joinURI;
//     }
//
//     return (
//         <div>
//             <span>redirect page</span>
//             <br/>
//             <a href={joinURI}>수동 입장</a>
//         </div>
//     )
// }
//
// export default Join;
