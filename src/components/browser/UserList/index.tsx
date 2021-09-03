import React, {useMemo, useState} from "react";
import classNames from "classnames";
import "./style.scss";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

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

            <SimpleBar className="users">
                <div className="status-tag">
                    온라인 ― {onlineUsers.length}
                </div>
                {onlineUsers.map((userName) => (
                    <OnlineUser userName={userName} roomId={users[userName]}/>
                ))}
                <div className="status-tag">
                    오프라인 ― {offlineUsers.length}
                </div>
                {offlineUsers.map((userName) => (
                    <OfflineUser userName={userName} key={userName}/>
                ))}
                <div className="padding" />
            </SimpleBar>
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

export default React.memo(UserList);
