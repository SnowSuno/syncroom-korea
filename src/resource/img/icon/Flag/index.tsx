import React from "react";
import { Country, CountryType } from "../../../../common/classes/properties";

import KoreaFlag from "./korea.svg?react";
import JapanFlag from "./japan.svg?react";
import OtherFlag from "./other.svg?react";

interface FlagProps {
  country: CountryType;
}

function Flag({ country }: FlagProps) {
  const style = { height: "2rem", width: "2rem" };
  switch (country) {
    case Country.KOREA:
      return <KoreaFlag style={style} />;
    case Country.JAPAN:
      return <JapanFlag style={style} />;
    default:
      return <OtherFlag style={style} />;
  }
}

export default Flag;
