import { useState, useEffect } from "react";

export default function useDraggable(el) {
  const [{ dx }, setOffset] = useState({ dx: 0 });

  useEffect(() => {
    const handleMouseDown = event => {
      const startX = event.pageX - dx;
      //   const startY = event.pageY - dy;

      const handleMouseMove = event => {
        const newDx = event.pageX - startX;
        // const newDy = event.pageY - startY;
        setOffset({ dx: newDx });
      };

      document.addEventListener("mousemove", handleMouseMove);

      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMouseMove);
        },
        { once: true }
      );
    };

    el.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      el.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [dx]);

  useEffect(() => {
    el.current.style.transform = `translate3d(${dx}px, 0, 0)`;
  }, [dx]);
}
