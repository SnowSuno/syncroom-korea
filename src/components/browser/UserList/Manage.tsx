import React, {useCallback, useMemo, useState} from "react";
import classNames from "classnames";

import {useDispatch} from "react-redux";
import useInput from "../../../common/hooks/useInput";
import {addUser} from "../../../modules/user";

import {ReactComponent as Plus} from "../../../resource/img/icon/plus.svg";
import {ReactComponent as Return} from "../../../resource/img/icon/return.svg";


function Manage() {
    const [isActive, setActive] = useState<boolean>(false);
    const [addFriendOpen, setAddFriendOpen] = useState<boolean>(false);
    const stateClass = isActive ? (addFriendOpen ? "add" : "active") : ""

    const dispatch = useDispatch();


    const {input, setValue} = useInput('');

    const onClickPlus = useCallback(() => {
        if (input.value || !addFriendOpen) {
            if (addFriendOpen) {
                dispatch(addUser(input.value.trim()));
                console.log(input.value);
                setValue("");
            }
            setAddFriendOpen(!addFriendOpen);
        }

    }, [addFriendOpen, setAddFriendOpen, dispatch, input.value]);

    return (
        <div className={classNames(
            "Manage",
            {active: isActive},
            {add: addFriendOpen}
        )}>
            <span>즐겨찾기 멤버</span>

            <button
                className="multi"
                onClick={() => {
                    setActive(!isActive);
                    setAddFriendOpen(false);
                }}
            >
                {isActive ? '돌아가기': '관리'}
            </button>

            <button
                className="background return"
            >
                <Return />
            </button>

            <input 
                type="text"
                placeholder="닉네임을 입력하세요"
                {...input}
            />
            
            <button
                className="background plus"
                onClick={onClickPlus}
            >
                <Plus />
            </button>




        </div>
    );
}


export default Manage;
