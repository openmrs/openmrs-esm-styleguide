import { storiesOf } from "@storybook/html";
import html from "./button-icons.stories.html";
import "./button-icons.css";
import ejs from "ejs";
import { text, withKnobs } from "@storybook/addon-knobs";
import { htmlStory } from "../story-helpers";

storiesOf("OpenMRS Styleguide", module).add("button icons", () => {
  return htmlStory(ejs.render(html, {}));
});
