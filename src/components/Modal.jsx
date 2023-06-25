import React from "react";

import CloseButton from "@images/close_btn.svg";

import "@sass/components/_modal.scss";

const Modal = (props) => {
  const { isOpen, closeModal, children } = props;

  return isOpen ? (
    <div className="Modal">
      <div className="Modal__body">
        <div className="Modal__backgroun"></div>
        <img
          className="Modal__close_btn"
          src={CloseButton}
          alt="closeButton"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
