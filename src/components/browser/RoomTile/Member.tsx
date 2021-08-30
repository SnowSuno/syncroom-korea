import React from "react";

import {MemberType} from "../../../common/classes/Member";
import Profile from "../../../resource/img/icon/Profile";

interface MemberProps {
    member: MemberType
}

function Member({member}: MemberProps) {
    return (
        <div className="Member">
            <div className="icon"><Profile icon={member.icon}/></div>
            <div className="nickname">{member.nickname}</div>
        </div>
    );
}

export default React.memo(Member);
