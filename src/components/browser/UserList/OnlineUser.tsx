import React, {useCallback} from "react";

import {useDispatch} from "react-redux";
import {closeSidebar} from "../../../modules/sidebar";

interface OnlineUserProps {
    userName: string;
    roomId: number;
    isActive: boolean;
}


function OnlineUser({userName, roomId, isActive}: OnlineUserProps) {
    const dispatch = useDispatch();

    const findUserRoom = useCallback(() => {
        if (!isActive) {
            dispatch(closeSidebar());
            moveTo(roomId);
        }
    }, [roomId, dispatch, isActive]);


    return (
        <div className="Online User" onClick={findUserRoom}>
            <svg viewBox="0 0 2 2">
                <circle cx="1" cy="1" r="1"/>
            </svg>
            {userName}
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
