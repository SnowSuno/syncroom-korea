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
            <TabCard>공지공지</TabCard>
            <TabCard>공지공지</TabCard>
            <TabCard>공지공지</TabCard>
        </TabPage>
    )
}

export default Notice;
