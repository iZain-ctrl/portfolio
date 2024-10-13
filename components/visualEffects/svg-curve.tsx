import { useEffect, useRef, useCallback } from "react";

export default function SvgCurve() {
  const path = useRef<SVGPathElement | null>(null);
  const progress = useRef(0);
  const reqId = useRef<number | null>(null);
  const x = useRef(0.5);
  const time = useRef(Math.PI / 2);

  const setPath = useCallback((value: number) => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttribute(
        "d",
        `M 0 50 Q ${width * x.current} ${50 + value} ${width} 50`
      );
    }
  }, []);

  const animateIn = useCallback(() => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
      time.current = Math.PI / 2;
    }

    setPath(progress.current);
    reqId.current = requestAnimationFrame(animateIn);
  }, [setPath]);

  const animateOut = useCallback(() => {
    let newProgress = progress.current * Math.sin(time.current);

    setPath(newProgress);
    progress.current = progress.current * 0.96; // Simpler lerp logic for smoother deceleration
    time.current += 0.2;

    if (Math.abs(progress.current) > 0.5) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      time.current = Math.PI / 2;
      progress.current = 0;
    }
  }, [setPath]);

  const resetAnimation = useCallback(() => {
    if (reqId.current !== null) {
      cancelAnimationFrame(reqId.current);
    }
    animateOut();
  }, [animateOut]);

  const manageMouseMove = useCallback((e: React.MouseEvent) => {
    const { movementY } = e;
    const box = (e.target as HTMLElement).getBoundingClientRect();
    x.current = (e.clientX - box.left) / box.width;
    progress.current += movementY;
  }, []);

  useEffect(() => {
    setPath(progress.current);

    const handleResize = () => {
      setPath(progress.current);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setPath]);

  return (
    <div className="line">
      <span
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
        className="box"
      ></span>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}

