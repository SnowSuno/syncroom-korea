import React, {useCallback, useMemo} from "react";
import classNames from "classnames";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../modules";

import {MemberType} from "../../common/classes/Member";
import Profile from "../../resource/img/icon/Profile";

import Star from "../../resource/img/icon/star.svg?react";
import {addUser, deleteUser} from "../../modules/user";

interface MemberProps {
    member: MemberType;
}

function Member({member: {type, icon, nickname}}: MemberProps) {
    const userList = useSelector((state: RootState) => state.user.userList);
    const dispatch = useDispatch();

    const starred = useMemo(() => userList.includes(nickname), [nickname, userList]);

    const onClick = useCallback(() => {
        if (starred) {
            dispatch(deleteUser(nickname));
        } else {
            dispatch(addUser(nickname));
        }
    }, [starred, nickname, dispatch]);


    return (
        <div className="Member">
            <div className="icon"><Profile icon={icon}/></div>
            <div className="nickname">{nickname}</div>
            {type === "general" ? <Star
                className={classNames(
                    "star",
                    {starred: starred}
                )}
                onClick={onClick}
            /> : null
            }
        </div>
    );
}

export default React.memo(Member);
