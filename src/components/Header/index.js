import React from "react";
import "./style.css"

import Title from "./Title";
import Toolbar from "./Toolbar";

import useScroll from "../../hooks/useScroll";

function Header() {
    const y = useScroll();
    const main = (y < 2);

    return (
        <div className={(main ? 'big' : 'small') + ' header'}>
            <Title />
            <Toolbar />
        </div>
    )
}

export default Header