import { storiesOf } from "@storybook/html/dist/client/preview";
import { htmlStory } from "../story-helpers";
import ejs from "ejs";
import html from "./typography.stories.html";
import { text } from "@storybook/addon-knobs";
import "./typography.css";

storiesOf("OpenMRS Styleguide", module).add("Typography & Font", () => {
  const boldText = text("Bold text", "Bolded text");
  const italicText = text("Italic text", "Italic text");
  const underlinedText = text("Underlined text", "Underlined text");
  const title1Text = text("Title 1 text", "Title 1 text");
  const title2Text = text("Title 2 text", "Title 2 text");
  const title3Text = text("Title 3 text", "Title 3 text");
  const title4Text = text("Title 4 text", "Title 4 text");
  const title5Text = text("Title 5 text", "Title 5 text");

  return htmlStory(
    ejs.render(html, {
      boldText,
      italicText,
      underlinedText,
      title1Text,
      title2Text,
      title3Text,
      title4Text,
      title5Text
    })
  );
});
