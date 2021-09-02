import React from "react";



interface OfflineUserProps {
    userName: string;
}


function OfflineUser({userName}: OfflineUserProps) {


    return (
        <div className="Offline User">
            <svg viewBox="0 0 2 2">
                <circle cx="1" cy="1" r="1"/>
            </svg>
            {userName}
        </div>
    );
}

export default OfflineUser;
