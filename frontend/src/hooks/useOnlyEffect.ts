import { useEffect, useRef } from "react";

const useOnlyEffect: typeof useEffect = (cb, deps) => {
  const firstTimeCalled = useRef(false);
  useEffect(() => {
    if (firstTimeCalled.current) {
      return cb();
    } else {
      firstTimeCalled.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useOnlyEffect;
