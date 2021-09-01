import React, {useMemo} from "react";
import "./style.scss";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {addUser, deleteUser} from "../../../modules/user";

import Manage from "./Manage";
import OnlineUser from "./OnlineUser";
import OfflineUser from "./OfflineUser";


import useInput from "../../../common/hooks/useInput";

function UserList() {
    const {userList} = useSelector((state: RootState) => state.user);
    const {users} = useSelector((state: RootState) => state.syncroom);

    // const dispatch = useDispatch();


    // const {input, setValue} = useInput('');

    // const add = () => {
    //     dispatch(addUser(input.value.trim()));
    //     setValue("");
    // };

    const {onlineUsers, offlineUsers} = useMemo(
        () => handleUsers(userList, users),
        [userList, users]);

    return (
        <div className="UserList">
            {/*<input type="text" {...input}/>*/}
            {/*<button onClick={add}>추가</button>*/}
            <Manage />
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

const handleUsers = (userList: string[], users: {[name: string]: number}): handleUserReturn => {
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
