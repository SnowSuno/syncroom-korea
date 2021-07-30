import React, {useState} from "react";
import "./ShareModal.css";

import {useSelector} from "react-redux";
import {RootState} from "../../../modules";
import useInput from "../../../common/hooks/useInput";

import {Status} from "../../../common/classes/types";

import {shareLinkDomain, encodeShareLink} from "../../../common/util/shareLink";

import {ReactComponent as Link} from "../../../resource/img/icon/link.svg";


function ShareModal() {
    const {roomName, status} = useSelector((state: RootState) => state.modal);

    const password = useInput('');
    const [checked, setChecked] = useState(status === Status.PRIVATE);
    const checkedClass = checked ? 'checked' : 'unchecked';
    const onClick = () => {
        password.set('');
        setChecked(!checked);
    };

    const shareLink: string = encodeShareLink(
        {roomName, password: password.value}
    );
    const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => event.target.select();

    return (
        <div className="share modal">
            <div className="title">
                <Link/>
                <span>{roomName}</span>
            </div>
            <div className="link">
                <input
                    type="text"
                    value={shareLinkDomain + shareLink}
                    onFocus={handleFocus}
                />
                <button
                    disabled={(checked && (password.value.length === 0))}
                >
                    <span>복사</span>
                </button>
            </div>

            {status === Status.PRIVATE
                ? <div>
                    <div className="checkbox" onClick={onClick}>
                        {/*<input type="checkbox" id="password"/>*/}
                        {/*<label htmlFor="password">비밀번호 포함하기</label>*/}
                        <div className={`box ${checkedClass}`}>
                            <svg viewBox="0 0 21 21">
                                <polyline points="5 10.75 8.5 14.25 16 6"/>
                            </svg>
                        </div>
                        <span className="desc">비밀번호 포함하기</span>
                    </div>
                    <div className={`password ${checkedClass}`}>
                        <input
                            type="text"
                            placeholder="비밀번호를 입력하세요"
                            disabled={!checked}
                            {...password}
                        />
                    </div>
                </div>

                : <div />
            }
        </div>
    );
}

export default ShareModal;
