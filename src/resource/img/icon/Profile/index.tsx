import React, {ReactElement} from "react";
import "./style.css";

import {ReactComponent as Drums} from "./drums.svg";
import {ReactComponent as Bongos} from "./bongos.svg";
import {ReactComponent as Bass} from "./bass.svg";
import {ReactComponent as Electric} from "./electric.svg";
import {ReactComponent as Acoustic} from "./acoustic.svg";
import {ReactComponent as Keyboard} from "./keyboard.svg";
import {ReactComponent as Piano} from "./piano.svg";
import {ReactComponent as Trumpet} from "./trumpet.svg";
import {ReactComponent as Saxophone} from "./saxophone.svg";
import {ReactComponent as Flute} from "./flute.svg";
import {ReactComponent as Violin} from "./violin.svg";
import {ReactComponent as DJ} from "./dj.svg";
import {ReactComponent as Vocal} from "./vocal.svg";
import {ReactComponent as Stage} from "./stage.svg";
import {ReactComponent as Private} from "./user.svg";

interface ProfileProps {
    icon: string
}

const iconMap: {[index: string]: ReactElement} = {
    "0": <Drums />,
    "1": <Bongos />,
    "2": <Bass />,
    "3": <Electric />,
    "4": <Acoustic />,
    "5": <Keyboard />,
    "6": <Piano />,
    "7": <Trumpet />,
    "8": <Saxophone />,
    "9": <Flute />,
    "10": <Violin />,
    "11": <DJ />,
    "12": <Vocal />,
    "13": <Stage />,
    "-1": <Private />
}

function Profile({icon}: ProfileProps) {
    return (
        <>
            {
                icon in iconMap
                    ? iconMap[icon]
                    : <img src={icon} alt=""/>
            }
        </>
    )
}

export default Profile;
