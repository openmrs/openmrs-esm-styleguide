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
      Visibility: "visibility"
    },
    "visibility"
  );

  const href = `#omrs-icon-${iconChoice}`;

  return htmlStory(ejs.render(html, { href }));
});
