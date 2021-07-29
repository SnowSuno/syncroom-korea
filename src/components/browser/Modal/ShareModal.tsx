import React from "react";
import "./ShareModal.css";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../modules";
import useInput from "../../../common/hooks/useInput";
import {closeModal} from "../../../modules/modal";

import {encodeShareLink} from "../../../common/util/shareLink";

import {ReactComponent as Link} from "../../../resource/img/icon/link.svg";


function ShareModal() {
    const {roomName, status} = useSelector((state: RootState) => state.modal);
    // const dispatch = useDispatch();
    const password = useInput('');
    // const close = () => dispatch(closeModal());

    const shareLink: string = encodeShareLink(
        {roomName, password: password.value});

    return (
        <div className="share modal">
            <div className="title">
                <Link/>
                <span>{roomName}</span>
            </div>
            <div className="link">
                <input type="text"/>
                <button>
                    <span>복사</span>
                </button>
            </div>


            <div>
                <div className="checkbox">
                    <div className="box"/>
                    <span className="desc">비밀번호 포함하기</span>
                </div>
                <input type="text" placeholder="비밀번호를 입력하세요"/>
            </div>
        </div>
    );
}

export default ShareModal;
