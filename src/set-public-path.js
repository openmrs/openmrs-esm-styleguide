export default function() {
  const url = window.System.resolve("@openmrs/esm-styleguide");
  __webpack_public_path__ = url.slice(0, url.lastIndexOf("/") + 1);
}
