import { storiesOf } from "@storybook/html";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./button.stories.html";
import { radios, boolean } from "@storybook/addon-knobs";
import "./button.css";

storiesOf("OpenMRS Styleguide", module).add("Buttons", () => {
  const styleType = radios(
    "Button style type",
    {
      Filled: "omrs-filled",
      Outlined: "omrs-outlined",
      Link: "omrs-link",
      "Unstyled (for accessibility)": "omrs-unstyled"
    },
    "omrs-filled"
  );

  const isRounded = boolean("Rounded", false);

  return htmlStory(ejs.render(html, { styleType, isRounded }));
});
