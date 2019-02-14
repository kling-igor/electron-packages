const PackageView = require("./component");

function activate(context) {
  console.log("[NODE] CTX:", context);
  console.log(typeof context);
  // const win = context.win;
  // win.addPackage({ view: PackageView });
  // context.registerPackage("HELLO!!!");
}

module.exports = activate;
