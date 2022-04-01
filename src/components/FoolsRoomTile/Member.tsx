import React from "react";
import classNames from "classnames";


import {MemberType} from "../../common/classes/Member";
import Profile from "../../resource/img/icon/Profile";

import {ReactComponent as Star} from "../../resource/img/icon/star.svg";

interface MemberProps {
    member: MemberType;
}

function Member({member: {type, icon, nickname}}: MemberProps) {
    const onClick = () => alert("★☆★저희는 여러분 마음속의 영원한 별★☆★")


    return (
        <div className="Member">
            <div className="icon"><Profile icon={icon}/></div>
            <div className="nickname">{nickname}</div>
            {type === "general" ? <Star
                className={classNames(
                    "star",
                    "starred"
                )}
                onClick={onClick}
            /> : null
            }
        </div>
    );
}

export default React.memo(Member);
