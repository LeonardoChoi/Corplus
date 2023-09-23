import ReactDOM from "react-dom";
import React from "react";
import "../index.css";
import { useEffect } from "react";

function LoginModal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  return ReactDOM.createPortal(
    <div>
      {/* position absolute makes the element go to the top left corner of the closest parent that has a position other than static. Since here there is no parent with a position other than static then the element is placed in the top left corner of the entire html document */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
      {/* inset-0 = if the element is position absolute the element will expand to fill the closest parent elemtn with a non-static position. Since the gray background here doesnt have a parent with non-static position it expands to the entire html doc and the second elemten has an inset of 40 which makes it like a smaller square in the center of the html doc. */}
    </div>,
    document.querySelector(".modal-container")
  );
}

export default LoginModal;
