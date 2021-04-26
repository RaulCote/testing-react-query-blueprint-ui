import { RefObject, useEffect } from "react";

const intersectionOptions = { root: null, rootMargin: "5px", threshold: 0.1 };

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  callback: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => void,
  shouldStop: boolean | undefined,
  options = intersectionOptions
) {
  useEffect(() => {
    const intersectionCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        callback(entry, observer);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (shouldStop) {
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [callback, ref, shouldStop, options]);
}
