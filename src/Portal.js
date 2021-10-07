import { useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("puerto");

const Portal = ({ children, className }) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const classList = ["portal-container"];

    if (className) className.split(" ").forEach((item) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, className]);

  return createPortal(children, el);
};

export default Portal;
