import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject(({ store }) => ({ store }))
@observer
export default class App extends Component {
  constructor(props) {
    super(props);
    this.hash = window.location.hash.replace("#", "");
  }

  render() {
    const { store } = this.props;
    return (
      <>
        <div>Hello {store.value}</div>
        <button onClick={() => store.loadPackage()}>LOAD PACKAGE</button>
        <>
          {store.packages.map((Item, i) => (
            <Item key={i} />
          ))}
        </>
      </>
    );
  }
}
