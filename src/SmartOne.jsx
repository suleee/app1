import React from "react";
import { Name } from "./Name";

class SmartOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    };
    this.cnt = 1;
  }
  makeYellow() {
    if (this.cnt % 2) {
      this.setState({ color: "khaki" });
    } else {
      this.setState({ color: "black" });
    }
    this.cnt++;
  }
  render() {
    return (
      <div
        className="SmartOne"
        style={{ color: this.state.color }}
        onClick={() => this.makeYellow()}
      >
        <Name name={this.props.name} /> Click me
      </div>
    );
  }
}

export default SmartOne;
