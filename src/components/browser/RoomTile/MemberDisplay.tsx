import React from "react";

import {Member} from "../../../common/classes/Member";
import {findAllByDisplayValue} from "@testing-library/react";

interface MemberDisplayProps {
    members: Member[]
}


function MemberDisplay({members}: MemberDisplayProps) {
    return (
        <div className="member-display">
            {members.map((member, index) => (
                <div className="member" key={index}>
                    {/*<span>{member.icon}</span>*/}
                    <span>{member.nickname}</span>
                </div>
            ))}
        </div>
    );
}

export default MemberDisplay;
