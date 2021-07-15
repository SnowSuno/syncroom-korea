import {useState, useEffect} from "react";
import {remToPx} from "./unitConversion";

function useScrollTrigger(threshold: number) {
    const [trigger, setTrigger] = useState(false);
    const thresholdPx = remToPx(threshold);

    const onScroll = () => {
        setTrigger(window.scrollY > thresholdPx);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return trigger;
}

export default useScrollTrigger;
