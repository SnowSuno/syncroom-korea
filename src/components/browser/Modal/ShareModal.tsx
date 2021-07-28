import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import useInput from "../../../common/hooks/useInput";
import {closeModal} from "../../../modules/modal";


function ShareModal() {
    const {roomName, status} = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();
    const password = useInput('');
    const close = () => dispatch(closeModal());

    return (
        <div className="share modal">
            <div className="title">
                <span>{roomName}</span>
            </div>
            <input type="text"/>


        </div>
    );
}

export default ShareModal;
