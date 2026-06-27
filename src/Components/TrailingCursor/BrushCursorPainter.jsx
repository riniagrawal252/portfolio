import React, { useEffect, useRef } from "react";

const colors = [
  "rgba(255,240,180,.35)",
  "rgba(255,220,220,.35)",
  "rgba(220,240,255,.35)",
  "rgba(220,255,230,.35)"
];

const BrushCursorPainter = () => {
  const cursorRef = useRef(null);
  const colorIndex = useRef(0);
  const moveCount = useRef(0);

  useEffect(() => {
    const paintables = document.querySelectorAll(".paintable");

    paintables.forEach((area) => {
      if (area.querySelector("canvas")) return;

      area.style.position = "relative";

      const canvas = document.createElement("canvas");
      canvas.width = area.offsetWidth;
      canvas.height = area.offsetHeight;

      canvas.style.position = "absolute";
      canvas.style.left = 0;
      canvas.style.top = 0;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = 0;

      area.prepend(canvas);

      [...area.children].forEach((child) => {
        if (child !== canvas) {
          child.style.position = "relative";
          child.style.zIndex = 2;
        }
      });
    });

    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      moveCount.current++;

      if (moveCount.current % 60 === 0) {
        colorIndex.current = (colorIndex.current + 1) % colors.length;
      }

      paintables.forEach((area) => {
        const rect = area.getBoundingClientRect();

        if (
          e.clientX > rect.left &&
          e.clientX < rect.right &&
          e.clientY > rect.top &&
          e.clientY < rect.bottom
        ) {
          const canvas = area.querySelector("canvas");
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = colors[colorIndex.current];
          ctx.beginPath();
          ctx.arc(
            e.clientX - rect.left,
            e.clientY - rect.top,
            45,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () =>
      window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        width: 35,
        height: 35,
        borderRadius: "50%",
        background: "#fff",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference"
      }}
    />
  );
};

export default BrushCursorPainter;