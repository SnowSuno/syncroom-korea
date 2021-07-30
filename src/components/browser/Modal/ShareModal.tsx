import React, {useRef, useState} from "react";
import "./ShareModal.css";

import {useSelector} from "react-redux";
import {RootState} from "../../../modules";
import useInput from "../../../common/hooks/useInput";

import {Status} from "../../../common/classes/types";

import {shareLinkDomain, encodeShareLink} from "../../../common/util/shareLink";

import {CopyToClipboard} from "react-copy-to-clipboard";

import {ReactComponent as Link} from "../../../resource/img/icon/link.svg";


function ShareModal() {
    const {roomName, status} = useSelector((state: RootState) => state.modal);
    const linkField = useRef<HTMLInputElement>(null);

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
    const [copied, setCopied] = useState(false);

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
                    ref={linkField}
                />
                <CopyToClipboard text={shareLinkDomain + shareLink}>
                    <button
                        onClick={() => setCopied(true)}
                        disabled={(checked && (password.value.length === 0))}
                    >
                        <span>복사</span>
                    </button>
                </CopyToClipboard>

            </div>
            <div className={`copied ${copied ? '' : 'hide'}`}>
                <svg viewBox="0 0 21 21" height="0.8rem">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="#49C5B6"/>
                    <polyline
                        points="5 10.75 8.5 14.25 16 6"
                        stroke="#FFFFFF"
                        strokeWidth="0.2rem"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
                클립보드에 복사되었습니다
            </div>
            {status === Status.PRIVATE
                ? <div>
                    <div className="checkbox" onClick={onClick}>
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
