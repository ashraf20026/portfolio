import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.opacity = "1";
      }
    };

    const touchMoveCursor = (e) => {
      if (cursor && e.touches[0]) {
        cursor.style.left = e.touches[0].clientX + "px";
        cursor.style.top = e.touches[0].clientY + "px";
        cursor.style.opacity = "1";
      }
    };

    const touchEndCursor = () => {
      if (cursor) {
        cursor.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("touchstart", touchMoveCursor);
    document.addEventListener("touchmove", touchMoveCursor);
    document.addEventListener("touchend", touchEndCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("touchstart", touchMoveCursor);
      document.removeEventListener("touchmove", touchMoveCursor);
      document.removeEventListener("touchend", touchEndCursor);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
}
