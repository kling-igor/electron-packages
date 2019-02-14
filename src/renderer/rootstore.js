// const { remote } = require("electron");

import { observable, action, computed, transaction, toJS, set } from "mobx";

class Store {
  @observable packages = [];

  @observable value = "";

  @action.bound
  setValue(value) {
    this.value = value;
  }

  @action.bound
  registerPackage(pack) {
    console.log("REGISTERING PACKAGE:", pack);
  }

  @action.bound
  loadPackage() {
    if (window.interop) window.interop.loadPackage(this);
  }
}

export default new Store();
