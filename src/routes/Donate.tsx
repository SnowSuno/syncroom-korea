import React from "react";
import "./Donate.scss";

import TabPage from "../components.old/TabPage";
import TabCard from "../components.old/TabCard";
import useLink from "../common/hooks/useLink";


function Donate() {
    const link = useLink();

    return (
        <TabPage
            className="Donate"
            title="개발자에게 커피 사주기"
        >
            <TabCard>
                <p>
                    SYNCROOM KOREA의 개발 및 운영 비용은 모두 개발자의 사비로 이루어지고 있습니다! <br/>
                    아무 대가 없이 이 사이트를 만드는 개발자들에게 커피 한 잔, 어떤가요?
                </p>

                <button
                    onClick={link.toExternal("https://toss.me/snowsuno")}
                >
                    커피 사주기
                </button>
            </TabCard>
        </TabPage>
    )
}

export default Donate;
