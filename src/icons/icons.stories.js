import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./icons.stories.html";
import { select } from "@storybook/addon-knobs";
import "./icons.js";

storiesOf("OpenMRS Styleguide", module).add("Icons", () => {
  const iconChoice = select(
    "Icon",
    {
      Visibility: "visibility",
      Menu: "menu",
      Search: "search",
      "Arrow back": "arrow-back",
      "Arrow downward": "arrow-downward",
      "Arrow upward": "arrow-upward",
      "Chevron left": "chevron-left",
      "Chevron right": "chevron-right",
      "Supervised user circle": "supervised-user-circle"
    },
    "visibility"
  );

  const href = `#omrs-icon-${iconChoice}`;

  return htmlStory(ejs.render(html, { href }));
});
