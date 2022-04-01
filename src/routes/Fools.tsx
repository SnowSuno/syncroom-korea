import React from "react";
import "./Fools.scss";

import TabPage from "../components/TabPage";
import TabCard from "../components/TabCard";
import useLink from "../common/hooks/useLink";

import image from "../resource/qwer.png";


function Fools() {
    const link = useLink();

    return (
        <TabPage
            className="Fools"
            title="개발자의★방"
        >
            <TabCard>
                <p>
                    오늘 아침 한시간만에 뚝딱 만든 만우절 이벤트 페이지 겸 근황토크입니다! <br/>
                    <br/>
                    일단 이 페이지를 보고 계시다면 저희가 만든 싱크룸 코리아를 많이 써주시고 있다는 의미겠죠. <br/>
                    정말 많이 써주셔서 감사합니다..!!
                    <br/><br/>
                    
                    <strong>Q. 요즘 업데이트가 왜 이렇게 없나요? 버그도 많고..</strong><br/>
                    현생 살기에 너무 바빠서 업뎃을 많이 못했습니다...죄송합니다...
                    <br/><br/>
                    
                    <strong>Q. 개발자님들 싱크룸도 하시나요?</strong><br/>
                    각각 늅늅이(베이스, 개발자), 파나(드럼, 디자이너)라는 닉네임으로 활동중입니다!
                    만났을때 아는척 해주시면 행복사하는 저희 모습을 보실 수 있습니다 ㅎㅎ
                    <br/><br/>
                    
                    <strong>Q. 앞으로 다른 업데이트 계획은 없나요?</strong><br/>
                    사실 몇 달 전부터 개발 중이던 디자인 리뉴얼 버전이 있습니다!!...만.. <br/>
                    현생 문제로 현재 만들지는 못하고 있는 상황입니다ㅠㅠ
                    <br/><br/>
                    대신...
                    <br/>.
                    <br/>.
                    <br/>.
                    <img src={image} alt="" width="100%"/>
                    스포(?)를 준비했습니다!
                    <br/><br/>
                    물론 언제 개발 완료될지는 미지수지만... 최대한 빨리 새로운 업뎃 갖고 찾아뵙도록 하겠습니다!
                    <br/><br/>
                    학생 두 명이 진행한 미숙한 프로젝트에 이렇게 많이 관심 가져 주셔서 감사하고, 앞으로도 많이많이 써주세요!!
                </p>

                <button
                    onClick={link.toInternal("/")}
                >
                    나가기
                </button>
            </TabCard>
        </TabPage>
    )
}

export default Fools;
