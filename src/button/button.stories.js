import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./button.stories.html";
import { radios, boolean, select, button } from "@storybook/addon-knobs";
import "./button.css";

storiesOf("OpenMRS Styleguide", module).add("Buttons", () => {
  const buttonType = select(
    "Type",
    {
      Unstyled: "unstyled",
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

  const isLarge = boolean("Large", false);

  const determineStyle = (buttonType, styleType, isRounded, isLarge) => {
    let styles = `omrs-btn`;
    if (buttonType === "unstyled") {
      return `omrs-unstyled`;
    }
    styles = `${styles} omrs-${buttonType}-${styleType}`;
    if (!isRounded && isLarge) {
      return `${styles} omrs-btn-lg`;
    } else if (isRounded && !isLarge) {
      return `${styles} omrs-rounded`;
    } else if (isRounded && isLarge) {
      return `${styles} omrs-rounded-lg`;
    }
    return styles;
  };
  return htmlStory(
    ejs.render(html, {
      determineStyle,
      buttonType,
      styleType,
      isRounded,
      isLarge
    })
  );
});
