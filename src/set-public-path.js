export default window.System.resolve("@openmrs/esm-styleguide").then(url => {
  __webpack_public_path__ = url.slice(0, url.lastIndexOf("/") + 1);
});
