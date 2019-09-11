import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./icons.stories.html";
import { select, text } from "@storybook/addon-knobs";
import "./icons.js";
import { options } from "../colors/colors.stories";

export const icons = {
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
storiesOf("OpenMRS Styleguide", module).add("Icons", () => {
  const iconNames = Object.values(icons);

  const iconChoice = select("Icon", icons, "visibility");

  const colorOptions = Object.assign({ Default: "default" }, options);

  const color = select("Color", colorOptions, "default");

  const fill = color === "default" ? "" : ` fill="var(${color})"`;

  const href = `#omrs-icon-${iconChoice}`;

  const size = text("Icon size (1rem = 16px)", "1.5");

  return htmlStory(ejs.render(html, { href, iconNames, fill, size }));
});
