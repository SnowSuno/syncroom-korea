import React from "react";
import "./Notice.scss";


import TabPage from "../components/TabPage";
import TabCard from "../components/TabCard";


function Notice() {
    return (
        <TabPage
            className="Notice"
            title="공지사항"
        >
            <TabCard
                title={"SYNCROOM KOREA 정식 출시!"}
                tag={"22/01/26"}
            >
                <p>
                    여러분들이 싱크룸을 훨씬 편하게 사용할 수 있도록 만들기 시작했던 "SYNCROOM KOREA"가 반 년의 시간 끝에 최종 완성되었습니다!
                    응원해주신 분들 모두 감사드립니다!<br/>
                    <br/>
                    앞으로도 더 편리한 사용을 위해 업데이트를 지속적으로 할 예정입니다!<br/>
                    <br/>
                    많은 사용과 관심 부탁드리며 공방에서도 많은 홍보 부탁드려요 :D
                </p>
            </TabCard>
            <TabCard
                title={"초보들을 위한 기능 가이드"}
                tag={"22/01/26"}
            >
                <p>
                    SYNCROOM KOREA를 처음 사용하시는 분들을 위해 대표적인 기능들의 설명을 준비했습니다. <br/>
                    <br/>
                    <strong>검색</strong><br/>
                    유저 닉네임, 방제, 방설명, 태그 등을 입력하면 해당 내용이 들어 있는 방만 표시됩니다. <br/>
                    <br/>
                    <strong>국가 필터</strong><br/>
                    한국 방만(혹은 일본 방만) 표시됩니다. (방제 + 방설명 일본어의 유무로 구분됩니다)<br/>
                    <br/>
                    <strong>세션 필터</strong><br/>
                    본인의 세션을 고르면 본인 세션이 <i>없는</i> 방만 표시됩니다. <br/>
                    <br/>
                    <strong>공개 방 필터</strong><br/>
                    비밀번호가 없는/있는 방만 표시됩니다. <br/>
                    <br/>
                    <strong>유저 즐겨찾기</strong><br/>
                    닉네임을 옆의 별을 눌러 유저를 즐겨찾기할 수 있으며, 메뉴 탭에서 즐겨찾기한 유저의 접속 여부를 한눈에 확인할 수 있습니다.<br/>
                    즐겨찾기 유저의 추가 및 관리는 메뉴 탭에서도 가능하며, 온라인 상태의 유저를 누르면 그 유저가 있는 방을 바로 찾을 수 있습니다.<br/>
                    <br/>
                    <strong>방 링크 공유</strong><br/>
                    방의 참여 링크를 복사합니다. 링크를 받은 사람은 링크를 눌러 방에 바로 접속할 수 있습니다. <br/>
                    비밀번호가 있는 방의 경우, 비밀번호 없이 링크만으로 접속 가능하도록 할 수 있습니다. <br/>
                    <br/>
                    <strong>빈 방 알림</strong><br/>
                    방에 인원이 모두 찬 경우, 방에 자리가 날 경우 알림을 받도록 설정할 수 있습니다.
                </p>
            </TabCard>
        </TabPage>
    )
}

export default Notice;
