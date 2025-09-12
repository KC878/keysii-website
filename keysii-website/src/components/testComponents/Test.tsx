import React, { useEffect, useRef } from "react";

const Test = () => {
  const arrays = [1, 2, 3, 4, 5, 6, 7];

  const scrollRef = useRef<HTMLDivElement>(null); // get the reference of that div with a data type
  const lastScrollLeft = useRef<number>(0); // define a container number for left-scroll

  useEffect(() => {
    const el = scrollRef.current; // store scrollRef container to a variable
    if (!el) return; // safety check if there is still no reference -> skip

    lastScrollLeft.current = el.scrollLeft; // assign the value of el. // reference from scrollRef.current - with a property .scrollLeft which is going to be a number

    console.log("LastScrollLeft: ", lastScrollLeft.current);
  }, [arrays.length]); // add listener to when there are changes in arrays

  // handleScroll for scrllUi
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    // set Type Reat.UIEvent --> specifically for div element

    const target = e.currentTarget; // store event and property currentTarget here
    console.log("Target: ", target);

    const current = target.scrollLeft; // store to current -> target (e.currentTarget) and add prop .scrollLeft
    console.log("Current: ", current);

    lastScrollLeft.current = current; // store and remember lastScrollLeft = current
    console.log(lastScrollLeft.current);
  };

  useEffect(() => {
    // create useEffect
    const el = scrollRef.current; // store current ref
    if (!el) return; // skip if null

    const wheelHandler = (e: WheelEvent) => {
      // add wheelHandler
      if (el) {
        // if exist check
        el.scrollLeft += e.deltaY; //
        console.log("Delta asdfsdfs: ", e.deltaY);

        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("wheel", wheelHandler, { passive: false }); // call the addevent listener type wheel, function WheelHandler will do the task, { passive: false} because it stated the e.preventDefault meaning you hijacked the event.

    return () => {
      el.removeEventListener("wheel", wheelHandler); // clear the eventListener to avoid stacking
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
    >
      {arrays.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px",
            // color: hover === item.id ? "#1a4d80" : "#7e7e7e",
            borderRadius: "30px",
            width: "300px",
            minWidth: "300px",
            height: "300px",
            padding: "10px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {String(scrollRef.current)}
        </div>
      ))}
    </div>
  );
};

export default Test;
