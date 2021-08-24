import React, {useMemo} from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {addUser, deleteUser} from "../../../modules/user";


import useInput from "../../../common/hooks/useInput";

function UserList() {
    const {userList} = useSelector((state: RootState) => state.user);
    const {users} = useSelector((state: RootState) => state.syncroom);

    const dispatch = useDispatch();


    const input = useInput('');

    const add = () => {
        dispatch(addUser(input.value));
    };

    const {onlineUsers, offlineUsers} = useMemo(
        () => handleUsers(userList, users),
        [userList, users]);

    return (
        <div>
            <input type="text" {...input}/>
            <button onClick={add}>추가</button>

            <div>온라인 - {onlineUsers.length}</div>
            <ul>
                {onlineUsers.map((nickname) => {
                    return <li>{nickname}</li>
                })}
            </ul>

            <div>오프라인 - {offlineUsers.length}</div>
            <ul>
                {offlineUsers.map((nickname) => {
                    return <li>{nickname}</li>
                })}
            </ul>
        </div>
    );
}

interface handleUserReturn {
    onlineUsers: string[];
    offlineUsers: string[];
}

const handleUsers = (userList: string[], users: string[]): handleUserReturn => {
    const onlineUsers: string[] = [];
    const offlineUsers: string[] = [];

    userList.forEach((user) => {
        if (users.includes(user)) {
            onlineUsers.push(user);
        } else {
            offlineUsers.push(user);
        }
    })
    return {onlineUsers, offlineUsers};
}

export default UserList;
