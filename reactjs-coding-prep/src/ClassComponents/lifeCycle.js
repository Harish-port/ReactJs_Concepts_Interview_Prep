import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        <h1>LifeCycle event of a component</h1>
      </div>
    );
  }
}
