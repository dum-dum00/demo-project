import React from "react";
import ReactDOM from "react-dom";

export default function CreateModal({ onClose, children }) {
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={onClose}
          ></div>

          <div className="inline-block align-bottom bg-create border-4 border-white p-5 px-8  rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-2/5 my-12">
            {children}
           
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
