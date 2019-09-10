import { storiesOf } from "@storybook/html";
import html from "./buttons-icons.stories.html";
import "./button-icons.css";
import ejs from "ejs";
import { text, withKnobs } from "@storybook/addon-knobs";
import { htmlStory } from "../story-helpers";
import { select } from "@storybook/addon-knobs";

storiesOf("OpenMRS Styleguide", module).add("Button icons", () => {
  const icons = {
    Visibility: "visibility",
    Menu: "menu",
    Search: "search",
    "Arrow back": "arrow-back",
    "Arrow downward": "arrow-downward",
    "Arrow upward": "arrow-upward",
    "Chevron left": "chevron-left",
    "Chevron right": "chevron-right",
    "Supervised user circle": "supervised-user-circle"
  };

  const sizeOptions = {
    Medium: "medium",
    Large: "large"
  };

  const iconChoice = select("Icon", icons, "visibility");

  const size = select("Size", sizeOptions, "medium");

  const href = `#omrs-icon-${iconChoice}`;

  const btnSize = `omrs-btn-icon-${size}`;

  return htmlStory(ejs.render(html, { href, btnSize }));
});
