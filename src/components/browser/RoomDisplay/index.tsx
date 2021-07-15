import React from "react";

import {CSSGrid} from 'react-stonecutter';
import {useResponsiveCols} from "../../../common/hooks/useResponsiveCols";

function RoomDisplay() {
    const style = {
        tileWidth: 21.5,   // rem
        tileHeight: 26.3,  // rem
        gridWidth: 86,     // %
        gutter: 0.85,      // rem
    };
    const column = useResponsiveCols({
        itemWidth: style.tileWidth,
        gridWidth: style.gridWidth
    });

    return (
        <div className="room-display">
            <CSSGrid
                component="ul"
                columns={column}
                lengthUnit="rem"
                columnWidth={style.tileWidth}
                gutterHeight={style.gutter}
                gutterWidth={style.gutter}
                duration={300}
            >
                {/*something.map(something) will go here*/}
            </CSSGrid>
        </div>
    );
}

export default RoomDisplay;
