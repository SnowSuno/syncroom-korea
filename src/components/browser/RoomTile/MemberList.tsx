import React from "react";

import {CSSGrid, enterExitStyle} from "react-stonecutter";

import {MemberType} from "../../../common/classes/Member";
import MemberProfile from "./Member";

interface MemberListProps {
    members: MemberType[]
}

function MemberList({members}: MemberListProps) {
    const animationStyle = enterExitStyle.fromTop;

    return (
        <div className="MemberList">
            <div className="line">
                <div/><div/><div/><div/><div/>
            </div>
            <div className="MemberContainer">
                <CSSGrid
                    component="ul"
                    columns={1}
                    lengthUnit="rem"
                    columnWidth={17.2}
                    itemHeight={3.08}
                    duration={300}
                    {...animationStyle}
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

export default React.memo(MemberList);
