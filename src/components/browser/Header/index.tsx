import React from "react";
import "./style.css"

import Title from "./Title";
import Toolbar from "./Toolbar";

import useScrollTrigger from "../../../common/hooks/useScrollTrigger";

function Header() {
    const trigger = useScrollTrigger(2);

    return (
        <div className={(trigger ? 'small' : 'big') + ' header'}>
            <Title />
            <Toolbar />
        </div>
    )
}

export default Header