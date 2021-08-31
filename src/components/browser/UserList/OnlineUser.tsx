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



    roomTile?.scrollIntoView({behavior: "smooth", block: "center"});


}

export default OnlineUser;
