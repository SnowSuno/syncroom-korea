import { useState, useEffect, useRef } from "react";

function useScrollTrigger(threshold: number) {
  const [trigger, setTrigger] = useState(false);
  const localState = useRef<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      const newState = window.scrollY > threshold;
      if (localState.current !== newState) {
        localState.current = newState;
        setTrigger(newState);
      }
    };
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  });
  return trigger;
}

export default useScrollTrigger;
