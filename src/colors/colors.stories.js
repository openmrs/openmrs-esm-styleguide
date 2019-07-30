import { storiesOf } from "@storybook/html";
import html from "./colors.stories.html";
import "./colors.css";

storiesOf("OpenMRS", module).add("Colors", () => html);
