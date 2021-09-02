import React from "react";



interface OfflineUserProps {
    userName: string;
}


function OfflineUser({userName}: OfflineUserProps) {


    return (
        <div>
            - {userName}
        </div>
    );
}

export default OfflineUser;
