import React, {useCallback} from "react";

import {useDispatch} from "react-redux";
import {deleteUser} from "../../../modules/user";

import {ReactComponent as Delete} from "../../../resource/img/icon/x.svg";

interface OfflineUserProps {
    userName: string;
    isActive: boolean;
}

function OfflineUser({userName, isActive}: OfflineUserProps) {
    const dispatch = useDispatch();

    const deleteSelf = useCallback(() => {
        dispatch(deleteUser(userName));
    }, [dispatch, userName]);

    return (
        <div className="Offline User">
            <svg className="indicator" viewBox="0 0 2 2">
                <circle cx="1" cy="1" r="1"/>
            </svg>
            <span>{userName}</span>
            <button
                className="delete"
                onClick={deleteSelf}
                disabled={!isActive}
            >
                <Delete />
            </button>
        </div>
    );
}

export default OfflineUser;
