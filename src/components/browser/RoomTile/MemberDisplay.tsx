import React from "react";

import {CSSGrid} from "react-stonecutter";

import {Member} from "../../../common/classes/Member";
import MemberProfile from "./MemberProfile";

interface MemberDisplayProps {
    members: Member[]
}

function MemberDisplay({members}: MemberDisplayProps) {
    return (
        <div className="member-display">
            <div className="line">
                <div/><div/><div/><div/><div/>
            </div>
            <div className="members">
                <CSSGrid
                    component="ul"
                    columns={1}
                    lengthUnit="rem"
                    columnWidth={17.2}
                    itemHeight={3.08}
                    duration={300}
                >
                    {
                        members.map((member, index) => {
                            const key = (member.icon === "-1")
                                ? index
                                : member.nickname + member.icon;
                            return (
                                <li key={key}>
                                    <MemberProfile member={member}/>
                                </li>
                            )
                        })
                    }
                </CSSGrid>
            </div>
        </div>
    );
}

export default MemberDisplay;
