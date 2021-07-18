import React, {ReactElement} from "react";

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
    "13": <Stage />
}

function Profile({icon}: ProfileProps) {
    return (
        <div className="icon">
            {
                icon in iconMap
                    ? iconMap[icon]
                    : <img src={icon} alt=""/>
            }
        </div>
    )
}

export default Profile;
