import React, { useEffect, useState } from "react";

import Refresh from "../../resource/img/graphics/reload.svg?react";

import Filter from "../Filter";
import classNames from "classnames";
import { useRooms } from "@/api/hooks";
import { useQueryClient } from "react-query";

function Toolbar() {
  const { isFetching } = useRooms();
  const queryClient = useQueryClient();

  const getRooms = () => queryClient.invalidateQueries("rooms");

  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (isFetching) setRotate(true);
  }, [isFetching]);

  return (
    <div className="Toolbar">
      <Filter />
      <button className="refresh" onClick={getRooms}>
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
