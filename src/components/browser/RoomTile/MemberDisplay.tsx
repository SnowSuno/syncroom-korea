import React from "react";

import {Member} from "../../../common/classes/Member";
import Profile from "../../../resource/img/icon/Profile";

interface MemberDisplayProps {
    members: Member[]
}


function MemberDisplay({members}: MemberDisplayProps) {
    return (
        <div className="member-display">
            {members.map((member, index) => (
                <div className="member" key={index}>
                    <Profile icon={member.icon}/>
                    <span>{member.nickname}</span>
                </div>
            ))}
        </div>
    );
}

export default MemberDisplay;
