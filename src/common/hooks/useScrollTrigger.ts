import {useState, useEffect} from "react";
import {remToPx} from "./unitConversion";

function useScrollTrigger(threshold: number) {
    const [trigger, setTrigger] = useState(false);
    const thresholdPx = remToPx(threshold);

    useEffect(() => {
        const onScroll = () => {
            setTrigger(window.scrollY > thresholdPx);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [thresholdPx]);

    return trigger;
}

export default useScrollTrigger;
