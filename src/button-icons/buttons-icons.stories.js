import { storiesOf } from "@storybook/html";
import html from "./buttons-icons.stories.html";
import "./buttons-icons.css";
import ejs from "ejs";
import { text, withKnobs } from "@storybook/addon-knobs";
import { htmlStory } from "../story-helpers";

storiesOf("OpenMRS Styleguide", module).add("Button icons", () => {
  return htmlStory(ejs.render(html, {}));
});
