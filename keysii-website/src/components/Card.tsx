import type { CardProps } from "../interfaces/interfaces";
import { useEffect, useRef, useState } from "react";

const Card: React.FC<CardProps> = ({ cardProps }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollLeft = useRef(0); // track last scroll position

  const [hover, setHover] = useState<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    lastScrollLeft.current = el.scrollLeft;
  }, [cardProps.length]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const current = target.scrollLeft;

    lastScrollLeft.current = current;
  };

  // const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  //   const el = scrollRef.current;
  //   if (!el) return;

  //   // Horizontal Scroll with vertical wheel
  //   el.scrollLeft += e.deltaY;

  //   // stop page vertical scroll
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // attach native wheel listener with passive: false

    const wheelHandler = (e: WheelEvent) => {
      if (el) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
        e.stopPropagation();
      }
    };
    el.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      el.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        width: "90vw",
        gap: "15px",
        padding: "10px",
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
      }}
      className="card-container"
    >
      {cardProps.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px",
            color: hover === item.id ? "#1a4d80" : "#7e7e7e",
            borderRadius: "30px",
            width: "300px",
            minWidth: "300px",
            height: "300px",
            padding: "10px",
            cursor: "pointer",
            flexShrink: 0, // prevent shrinking inside scroll container
            transition: "background 0.1s",
            transform: hover === item.id ? "scale(1.08)" : "scale(1)",
            backgroundColor: hover === item.id ? "lightblue" : "initial",

            boxShadow:
              hover === item.id
                ? "0 0 10px rgb(245, 244, 244), 0 0 20px #39FF14"
                : "none",
          }}
          onMouseEnter={() => {
            setHover(item.id);
          }}
          onMouseLeave={() => setHover(0)}
        >
          <h3 style={{ color: hover === item.id ? "#003366" : "lightgray" }}>
            {item.title}
          </h3>
          <hr
            style={{
              color: "azure",
              display: "flex",
              width: "100%",
            }}
          />
          <div>
            <item.icon key={item.id} className="social-icons" size={80} />
          </div>

          <p style={{ alignSelf: "baseline" }}>{item.disc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
