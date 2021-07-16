import React from "react";
import {Country, CountryType} from "../../../../common/classes/types";

import {ReactComponent as KoreaFlag} from "./korea.svg";
import {ReactComponent as JapanFlag} from "./japan.svg";
import {ReactComponent as OtherFlag} from "./other.svg";

interface FlagProps {
    country: CountryType
}

function Flag({country}: FlagProps) {
    const height: string = '2rem';
    switch (country) {
        case Country.KOREA:
            return <KoreaFlag height={height}/>
        case Country.JAPAN:
            return <JapanFlag height={height}/>
        default:
            return <OtherFlag height={height}/>
    }
}

export default Flag;