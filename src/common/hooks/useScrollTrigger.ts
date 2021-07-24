import {useState, useEffect} from "react";
import {remToPx} from "./unitConversion";

function useScrollTrigger(threshold: number) {
    const [trigger, setTrigger] = useState(false);
    const thresholdPx = remToPx(threshold);

    let currentState = false;
    useEffect(() => {
        const onScroll = () => {
            const newState = window.scrollY > thresholdPx;
            if (currentState !== newState) {
                currentState = newState;
                setTrigger(newState);
            }
        }
        window.addEventListener("wheel", onScroll, {capture: true, passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, [thresholdPx]);

    return trigger;
}

export default useScrollTrigger;
