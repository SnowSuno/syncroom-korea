import React, {useEffect, useMemo, useState} from "react";
import classNames from "classnames";
import "./style.scss";

import {TransitionGroup, CSSTransition} from "react-transition-group";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import {useSelector} from "react-redux";
import {RootState} from "../../modules";
import {SidebarClass} from "../../modules/sidebar/sidebarClass";

import Manage from "./Manage";
import OnlineUser from "./OnlineUser";
import OfflineUser from "./OfflineUser";


function UserList() {
    const {userList} = useSelector((state: RootState) => state.user);
    const {users} = useSelector((state: RootState) => state.syncroom)
    const {sidebarClass} = useSelector((state: RootState) => state.sidebar)

    const [isActive, setActive] = useState<boolean>(false);
    const [isAdd, setAdd] = useState<boolean>(false);

    useEffect(() => {
        if (sidebarClass !== SidebarClass.MENU) {
            setActive(false);
            setAdd(false);
        }
    }, [sidebarClass])

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

                <TransitionGroup component="div">
                    {onlineUsers.map((userName) => (
                        <CSSTransition key={userName} timeout={200} classNames="wrap">
                            <OnlineUser
                                userName={userName}
                                roomId={users[userName]}
                                isActive={isActive}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>

                <div className="status-tag">
                    오프라인 ― {offlineUsers.length}
                </div>

                <TransitionGroup component="div">
                    {offlineUsers.map((userName) => (
                        <CSSTransition key={userName} timeout={200} classNames="wrap">
                            <OfflineUser
                                userName={userName}
                                isActive={isActive}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>

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
    users: Record<string, string>
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
