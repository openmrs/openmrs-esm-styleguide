import { configure, addDecorator } from "@storybook/html";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
