import publicPathPromise from "./set-public-path.js";

publicPathPromise.then(() =>
  Promise.all([
    import("./canvas/canvas.css"),
    import("./colors/colors.css"),
    import("./typography/typography.css"),
    import("./spacing/spacing.css"),
    import("./cards/cards.css"),
    import("./button/button.css")
  ])
);
