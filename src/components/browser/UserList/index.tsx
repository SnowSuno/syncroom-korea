import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import {addUser, deleteUser} from "../../../modules/user";


import useInput from "../../../common/hooks/useInput";

function UserList() {
    const {userList} = useSelector((state: RootState) => state.user);
    const {rooms} = useSelector((state: RootState) => state.syncroom);

    const dispatch = useDispatch();
    const userArray = Array.from(userList);
    userArray.sort();

    const input = useInput('');

    const add = () => {
        dispatch(addUser(input.value));
    };

    return (
        <div>
            <input type="text" {...input}/>
            <button onClick={add}>추가</button>

            <ul>
                {userArray.map((nickname) => {
                    return <li>{nickname}</li>
                })}
            </ul>
        </div>
    );
}

export default UserList;
