const { remote } = require("electron");

window.interop = {
  loadPackage(context) {
    const activate = remote.require("./PACKAGES/package");
    activate(context);
  }
};

console.log("PRELOADED...");
