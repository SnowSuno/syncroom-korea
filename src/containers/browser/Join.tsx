import React from "react";
import {decodeShareLink} from "../../common/util/shareLink";

interface Location {search: string}
interface JoinProps {
    location: Location;
}

function Join({location: {search}}: JoinProps) {
    try {
        const {roomName, password} = decodeShareLink(search.slice(1));
    } catch (e) {
        console.log(e);
    }


    return <div>{roomName}</div>
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
