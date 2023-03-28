import { useEffect, useRef } from "react";

export default function useRendererDebugger(cssClass: string) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.className = `${cssClass} ${cssClass}--rendered`;
    }

    // Uncomment for debugging purposes
    // console.log({ref, cssClass });

    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.className = cssClass;
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  });

  return ref;
}