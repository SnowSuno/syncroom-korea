import React from "react";
import {Country, CountryType} from "../../../../common/classes/properties";

import {ReactComponent as KoreaFlag} from "./korea.svg";
import {ReactComponent as JapanFlag} from "./japan.svg";
import {ReactComponent as OtherFlag} from "./other.svg";

interface FlagProps {
    country: CountryType
}

function Flag({country}: FlagProps) {
    const style = {height: "2rem", width: "2rem"}
    switch (country) {
        case Country.KOREA:
            return <KoreaFlag style={style}/>
        case Country.JAPAN:
            return <JapanFlag style={style}/>
        default:
            return <OtherFlag style={style}/>
    }
}

export default Flag;