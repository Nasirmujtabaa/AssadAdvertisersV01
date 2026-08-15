import { useEffect, useRef, useState } from "react";

/* Custom cursor — dot + ring both follow a smoothed position so they stay in sync,
   works site-wide, no mix-blend-mode (so visible on every background). */

  
export const Counter = ({ value, suffix = "", duration = 1600 }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(Math.round(value * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value, duration]);

  const formatted = value >= 1000000
    ? (display / 1000000).toFixed(display >= 1000000 ? 0 : 1) + "M"
    : value >= 1000
    ? (display / 1000).toFixed(0) + "k"
    : display;

  return <span ref={ref}>{formatted}{suffix}</span>;
};

/* Tilt card — mouse-tracking 3D tilt */
export const TiltCard = ({ children, max = 16, className = "", style = {} }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max;
    const ry = (x - 0.5) * max;
    el.style.transform = `${style.baseTransform || ""} rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `${style.baseTransform || ""}`;
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ ...style, transform: style.baseTransform || "" }}
    >
      {children}
    </div>
  );
};

/* Parallax wrapper — translateY based on scroll progress */
export const Parallax = ({ children, speed = 0.15, className = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const y = (rect.top - window.innerHeight / 2) * speed * -1;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [speed]);
  return <div ref={ref} className={className}>{children}</div>;
};
