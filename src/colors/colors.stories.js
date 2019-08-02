import { storiesOf } from "@storybook/html";
import html from "./colors.stories.html";
import "./colors.css";
import { htmlStory } from "../story-helpers";
import { select } from "@storybook/addon-knobs";
import ejs from "ejs";

storiesOf("OpenMRS Styleguide", module).add("Colors", () => {
  const options = {
    "Primary blue": "--omrs-primary-blue",
    "Text black": "--omrs-text-black",
    "Inactive grey": "--omrs-inactive-grey",
    "Background canvas": "--omrs-background-canvas"
  };

  const defaultValue = "--omrs-primary-blue";

  const chosenColor = select("OpenMRS Color", options, defaultValue);

  return htmlStory(ejs.render(html, { chosenColor }));
});
