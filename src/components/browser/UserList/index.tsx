import React, {useMemo, useState} from "react";
import classNames from "classnames";
import "./style.scss";

import {useSelector} from "react-redux";
import {RootState} from "../../../modules";

import Manage from "./Manage";
import OnlineUser from "./OnlineUser";
import OfflineUser from "./OfflineUser";


function UserList() {
    const {userList} = useSelector((state: RootState) => state.user);
    const {users} = useSelector((state: RootState) => state.syncroom);

    const [isActive, setActive] = useState<boolean>(false);
    const [isAdd, setAdd] = useState<boolean>(false);

    const handleActive = (state: boolean) => setActive(state);
    const handleAdd = (state: boolean) => setAdd(state);


    const {onlineUsers, offlineUsers} = useMemo(
        () => handleUsers(userList, users),
        [userList, users]);

    return (
        <div className={classNames(
            "UserList",
            {active: isActive},
            {add: isAdd}
        )}>
            <Manage {...{isActive, handleActive, isAdd, handleAdd}}/>
            <div>온라인 - {onlineUsers.length}</div>
            <div>
                {onlineUsers.map((userName) => (
                    <OnlineUser userName={userName} roomId={users[userName]}/>
                ))}
            </div>

            <div>오프라인 - {offlineUsers.length}</div>
            <div>
                {offlineUsers.map((userName) => (
                    <OfflineUser userName={userName}/>
                ))}
            </div>
        </div>
    );
}

interface handleUserReturn {
    onlineUsers: string[];
    offlineUsers: string[];
}

const handleUsers = (
    userList: string[],
    users: {[name: string]: number}
): handleUserReturn => {
    const onlineUsers: string[] = [];
    const offlineUsers: string[] = [];

    userList.forEach((user) => {
        if (users.hasOwnProperty(user)) {
            onlineUsers.push(user);
        } else {
            offlineUsers.push(user);
        }
    })
    return {onlineUsers, offlineUsers};
}

export default UserList;
