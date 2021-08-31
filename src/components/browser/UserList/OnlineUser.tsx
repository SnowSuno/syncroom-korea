import React, {useCallback} from "react";

import {useDispatch} from "react-redux";
import {closeSidebar} from "../../../modules/sidebar";

interface OnlineUserProps {
    userName: string;
    roomId: number;
}


function OnlineUser({userName, roomId}: OnlineUserProps) {
    const dispatch = useDispatch();

    const findUserRoom = useCallback(() => {
        dispatch(closeSidebar());
        moveTo(roomId);
    }, [roomId])


    return (
        <div>
            {userName} - {roomId}
            <button onClick={findUserRoom}>go</button>
        </div>
    );
}

const moveTo = (roomId: number) => {
    const roomTile = document.getElementById(roomId.toString());

    if (roomTile) {
        roomTile.scrollIntoView({behavior: "smooth", block: "center"});
        roomTile.animate([
            {boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)"},
            {boxShadow: "0 0 0.8rem rgba(20, 20, 20, 1)", offset: 0.1},
            {boxShadow: "0 0 0.8rem rgba(20, 20, 20, 1)", offset: 0.8},
            {boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)"},
        ], 2000);
    }




}

export default OnlineUser;
