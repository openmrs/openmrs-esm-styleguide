import { storiesOf } from "@storybook/html/dist/client/preview";
import html from "./forms.stories.html";
import { htmlStory } from "../story-helpers";
import "./forms.css";
import { select, boolean } from "@storybook/addon-knobs";
import ejs from "ejs";

storiesOf("OpenMRS Styleguide", module).add("Forms", () => {
  const inputType = select(
    "Type",
    {
      CheckBox: "checkbox",
      Radio: "radio"
    },
    "checkbox"
  );

  const determineInputType = inputType =>
    inputType === "checkbox" ? "checkbox" : "radio";

  const determineStyle = inputType =>
    inputType === "checkbox" ? "omrs-checkbox" : "omrs-radio-button";

  return htmlStory(
    ejs.render(html, {
      determineInputType,
      inputType,
      determineStyle
    })
  );
});
