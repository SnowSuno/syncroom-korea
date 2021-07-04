import {useState, useEffect} from "react";

const pixelsToRem = px => {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function useScroll() {
    const [y, setY] = useState(0);

    const onScroll = () => {
        setY(pixelsToRem(window.scrollY));
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return y;
}

export default useScroll;
