import {useEffect, useState} from "react";
import {remToPx} from "./unitConversion";

type props = {
    itemWidth: number  // in rem unit
    gridWidth: number  //in percentage unit
}

export function useResponsiveCols({itemWidth, gridWidth}: props) {
    const [columns, setColumns] = useState<number>(0);

    const itemWidthPx = remToPx(itemWidth);

    useEffect(() => {
        function handleResize() {
            const frameWidth: number = document.getElementById("home")?.clientWidth || 0;
            setColumns(
                Math.floor((frameWidth * (gridWidth / 100)) / itemWidthPx)
            );
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [gridWidth, itemWidthPx]);

    return columns;
}