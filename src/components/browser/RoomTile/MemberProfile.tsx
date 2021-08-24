import React from "react";

import {Member} from "../../../common/classes/Member";
import Profile from "../../../resource/img/icon/Profile";

interface MemberProfileProps {
    member: Member
}

function MemberProfile({member}: MemberProfileProps) {
    return (
        <div className="member">
            <div className="icon"><Profile icon={member.icon}/></div>
            <div className="nickname">{member.nickname}</div>
        </div>
    );
}

export default React.memo(MemberProfile);
