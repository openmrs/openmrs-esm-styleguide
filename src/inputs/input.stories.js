import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./input.stories.html";
import { radios, boolean, select } from "@storybook/addon-knobs";
import "./input.css";

storiesOf("OpenMRS Styleguide", module).add("Inputs", () => {
  const inputType = select(
    "Type",
    {
      Underlined: "underlined",
      Filled: "filled",
      Outlined: "outlined"
    },
    "outlined"
  );

  const isDanger = boolean("is Danger", false);

  const determineStyle = (inputType, isDanger) => {
    let styles = `omrs-input-${inputType}`;
    isDanger ? (styles = `${styles} omrs-input-danger`) : "";
    return styles;
  };
  return htmlStory(
    ejs.render(html, {
      determineStyle,
      inputType,
      isDanger
    })
  );
});
