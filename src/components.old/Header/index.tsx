import React from "react";
import classNames from "classnames";
import "./style.scss"

import Title from "./Title";
import Toolbar from "./Toolbar";

import useScrollTrigger from "../../common/hooks/useScrollTrigger";
import {remToPx} from "../../common/hooks/unitConversion";

function Header() {
    const trigger = useScrollTrigger(remToPx(2));

    return (
        <div className={classNames(
            'Header',
            {small: trigger, big: !trigger}
        )}>
            <Title />
            <Toolbar />
        </div>
    )
}

export default React.memo(Header);
