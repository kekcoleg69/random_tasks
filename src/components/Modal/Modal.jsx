import React from "react";
import "./Modal.css";
export default function Modal({
  children,
  activeModal,
  setActiveModal,
  title,
}) {
  return (
    <div
      onClick={() => {
        setActiveModal(false);
      }}
      className={activeModal ? "active modal" : "modal"}
    >
      <div
        onClick={(evt) => {
          evt.stopPropagation();
        }}
        className="modal_content"
      >
        <p className="title">{title}</p>
        <button
          className="modal-close"
          onClick={() => {
            setActiveModal(false);
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
