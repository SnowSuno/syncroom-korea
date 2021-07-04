import {useState, useEffect} from "react";

const pixelsToRem = px => {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
const middle = (a, b, c) => {
    let x = a - b;

    let y = b - c;
    let z = a - c;

    if (x * y > 0)
        return b;

    else if (x * z > 0)
        return c;
    else
        return a;
}

function useScrollTransition(start, end, initial, final) {
    const [state, setState] = useState(initial);

    useEffect(() => {
        const onScroll = () => {
            const y = middle(start ,pixelsToRem(window.scrollY), end);
            const current = ((initial - final) * y + (final*start) - (initial*end)) / (start - end);
            setState(current);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [end, final, initial, start]);

    return state;
}

export default useScrollTransition;
