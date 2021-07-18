import React, {ReactElement} from "react";

import {ReactComponent as Bass} from "./bass.svg";

interface ProfileProps {
    icon: string
}

const iconMap: {[index: string]: ReactElement} = {
    "1": <Bass />,
}

function Profile({icon}: ProfileProps) {
    if (icon in iconMap) {
        return iconMap[icon];
    } else {
        return <img src={icon} alt=""/>
    }
}

export default Profile;
