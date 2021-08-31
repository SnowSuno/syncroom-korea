import React from "react";



interface OnlineUserProps {
    userName: string;
    roomId: number;
}


function OnlineUser({userName, roomId}: OnlineUserProps) {


    return (
        <div>
            {userName} - {roomId}
        </div>
    );
}

export default OnlineUser;
