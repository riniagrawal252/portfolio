import React, { useEffect, useRef, useState } from "react";

const BrushCursorPainter = () => {
  const cursorRef = useRef(null);
  const [brushColor, setBrushColor] = useState("rgb(238, 237, 229)");
  const [moveCount, setMoveCount] = useState(0);

  const colors = ["rgb(248, 245, 248)", "rgb(230, 230, 238)", "rgb(240, 244, 245)", "rgb(238, 243, 241)", "rgb(247, 240, 239)"];

  // Reset everything on refresh / first load
  useEffect(() => {
    const paintableAreas = document.querySelectorAll(".paintable");

    paintableAreas.forEach((area) => {
      // Reset background
      area.style.backgroundColor = "#ffffff";
      area.dataset.active = "false";

      // If canvas exists, clear it
      const canvas = area.querySelector("canvas");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }, []); // runs once on mount

  useEffect(() => {
    const paintableAreas = document.querySelectorAll(".paintable");

    const handleMouseMove = (e) => {
      // Move cursor
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }

      paintableAreas.forEach((area) => {
        const rect = area.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (inside) {
          const canvas = area.querySelector("canvas");
          if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = brushColor;
            ctx.beginPath();
            ctx.arc(
              e.clientX - rect.left,
              e.clientY - rect.top,
              35,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }

          area.style.transition = "background-color 0.6s ease";
          area.style.backgroundColor = brushColor;
          area.dataset.active = "true";
        } else if (area.dataset.active === "true") {
          area.style.transition = "background-color 1.2s ease";
          area.style.backgroundColor = brushColor;
          area.dataset.active = "false";
        }
      });

      setMoveCount((prev) => prev + 1);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [brushColor]);

  useEffect(() => {
    if (moveCount > 0 && moveCount % 40 === 0) {
      const nextBrushIndex = (colors.indexOf(brushColor) + 1) % colors.length;
      setBrushColor(colors[nextBrushIndex]);
    }
  }, [moveCount]);

  // Attach canvases on first load
  useEffect(() => {
    const paintableAreas = document.querySelectorAll(".paintable");

    paintableAreas.forEach((area) => {
      if (!area.querySelector("canvas")) {
        let canvas = document.createElement("canvas");
        canvas.width = area.offsetWidth;
        canvas.height = area.offsetHeight;
        canvas.style.position = "absolute";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = 0;
        area.style.position = "relative";
        area.prepend(canvas);

        const content = document.createElement("div");
        while (area.childNodes.length > 1) {
          content.appendChild(area.childNodes[1]);
        }
        content.style.position = "relative";
        content.style.zIndex = 1;
        area.appendChild(content);

        area.style.backgroundColor = "#ffffff";
        area.dataset.active = "false";
      }
    });
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          backgroundColor: brushColor,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "background-color 0.3s ease",
          zIndex: 9999,
        }}
      ></div>
    </>
  );
};

export default BrushCursorPainter;
