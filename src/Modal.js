import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);
  elRef.current.id = "monkey";
  console.log(elRef.current, "REF");

  return createPortal(<div id="chimp">{children}</div>, elRef.current);
};

export default Modal;
