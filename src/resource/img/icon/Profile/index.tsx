import React, {ReactElement} from "react";
import "./style.css";

import Drums from "./drums.svg?react";
import Bongos from "./bongos.svg?react";
import Bass from "./bass.svg?react";
import Electric from "./electric.svg?react";
import Acoustic from "./acoustic.svg?react";
import Keyboard from "./keyboard.svg?react";
import Piano from "./piano.svg?react";
import Trumpet from "./trumpet.svg?react";
import Saxophone from "./saxophone.svg?react";
import Flute from "./flute.svg?react";
import Violin from "./violin.svg?react";
import DJ from "./dj.svg?react";
import Vocal from "./vocal.svg?react";
import Stage from "./stage.svg?react";
import Private from "./user.svg?react";

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
                    : <img src={icon.replace("http://", "https://")} alt=""/>
            }
        </>
    )
}

export default Profile;
