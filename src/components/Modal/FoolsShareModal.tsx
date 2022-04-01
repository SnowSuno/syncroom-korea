import React, {useState} from "react";
import "./FoolsShareModal.scss";

import {useSelector} from "react-redux";
import {RootState} from "../../modules";
import useInput from "../../common/hooks/useInput";

import {Status} from "../../common/classes/properties";


import {CopyToClipboard} from "react-copy-to-clipboard";

import {ReactComponent as Link} from "../../resource/img/icon/link.svg";


function ShareModal() {
    const {roomName, status} = useSelector((state: RootState) => state.modal);

    const {input: password} = useInput('');
    const isPrivate = status === Status.PRIVATE;
    const [checked, setChecked] = useState(true);
    const checkedClass = checked ? 'checked' : 'unchecked';
    const onClick = () => setChecked(!checked);

    const shareLink = "https://syncroom.kr/buymeacoffee"
    const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => event.target.select();
    const [copied, setCopied] = useState(false);

    return (
        <div className="fools-share modal">
            <div className="title">
                <Link/>
                <span>{roomName}</span>
            </div>
            <p style={{color: "red", padding: 0, margin: 0}}>이거 무슨 링크일지 너무너무 궁금하지 않나요?</p>
            <p style={{color: "red", padding: 0, margin: 0}}>막 클릭해보고 공유해보고 싶고 그러지 않나요?</p>
            <div className="link">
                <input
                    type="text"
                    value={shareLink}
                    onFocus={handleFocus}
                    readOnly={true}
                />
                <CopyToClipboard text={shareLink}>
                    <button
                        onClick={() => setCopied(true)}
                        disabled={(isPrivate && checked && (password.value.length === 0))}
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
                참고로 이 링크 페이지 만우절 전에도 원래 있던거에요...
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

export default React.memo(ShareModal);
