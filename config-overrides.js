// import theo kiểu JS common
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
  useBabelRc()
);