import publicPathPromise from "./set-public-path.js";

publicPathPromise.then(() =>
  import(/* webpackChunkName: "styleguide-entry" */ "./styleguide-entry")
);
