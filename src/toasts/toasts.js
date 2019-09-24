import React from "react";
import ReactDOM from "react-dom";

const toastsContainer = document.createElement("div");
document.body.appendChild(toastsContainer);

export function showToast(options) {
  ReactDOM.render(
    <div className="omrs-toast">
      <p className="text">{options.description}</p>
      <div className="divider" />
      <div className="omrs-toast-div">
        <button className="omrs-toast-btn">Close</button>
      </div>
    </div>,
    toastsContainer
  );

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(toastsContainer);
  }, 4000);
}
