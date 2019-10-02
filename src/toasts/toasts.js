import React from "react";
import ReactDOM from "react-dom";

const toastsContainer = document.createElement("div");
document.body.appendChild(toastsContainer);

export function showToast(options) {
  ReactDOM.render(
    <div className="omrs-toast">
      <p className="text">This is a toast</p>
      <div className="divider" />
      <button className="omrs-btn-icon-medium omrs-toast-btn">
        <svg>
          <use xlinkHref="#omrs-icon-close" />
        </svg>
      </button>
    </div>,
    toastsContainer
  );

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(toastsContainer);
  }, 4000);
}
