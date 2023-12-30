import React, { useEffect, useState } from "react";

import Refresh from "../../resource/img/graphics/reload.svg?react";

import Filter from "../Filter";
import classNames from "classnames";
import { useRooms } from "@/api/hooks";
import { yamaha } from "@/api/client/yamaha";

function Toolbar() {
  const { isFetching } = useRooms();
  const { invalidate } = yamaha.useGetRooms();

  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (isFetching) setRotate(true);
  }, [isFetching]);

  return (
    <div className="Toolbar">
      <Filter />
      <button className="refresh" onClick={invalidate}>
        <Refresh
          height={20}
          width={20}
          className={classNames({ rotate })}
          onAnimationIteration={() => !isFetching && setRotate(false)}
        />
      </button>
    </div>
  );
}

export default React.memo(Toolbar);
