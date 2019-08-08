import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./button.stories.html";
import { radios, boolean, select } from "@storybook/addon-knobs";
import "./button.css";

storiesOf("OpenMRS Styleguide", module).add("Buttons", () => {
  const buttonType = select(
    "Type",
    {
      Filled: "filled",
      Outlined: "outlined",
      Text: "text"
    },
    "filled"
  );

  const styleType = radios(
    "Style type",
    {
      Action: "action",
      Neutral: "neutral",
      Destructive: "destructive",
      Disabled: "disabled"
    },
    "action"
  );

  const isRounded = boolean("Rounded", false);

  const determineStyle = (buttonType, styleType) =>
    `omrs-btn omrs-${buttonType}-${styleType}`;

  return htmlStory(
    ejs.render(html, { determineStyle, buttonType, styleType, isRounded })
  );
});
