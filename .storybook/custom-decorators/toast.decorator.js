import { useEffect } from "@storybook/client-api";
import { showToast } from "../../src/toasts/toasts.js";

function getButton() {
  return document.querySelectorAll(".toast-clicked");
}

export const withToast = storyFn => {
  useEffect(() => {
    getButton().forEach(tab =>
      tab.addEventListener(
        "click",
        showToast({ description: "This is a toast" })
      )
    );
  }, []);
  return storyFn();
};
