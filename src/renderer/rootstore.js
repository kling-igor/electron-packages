const { remote } = window.require("electron");

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
    // if (window.interop) window.interop.loadPackage(this);
    // const foo = remote.require("./PACKAGES/package");
    // foo(this);

    // const path = remote.require("path");
    // console.log(path.dirname("/home/igor/.bashrc"));

    const foo = remote.require("./PACKAGES/package");
    const Foo = foo();
    const inst = new Foo();
    inst.bar();
  }
}

export default new Store();
