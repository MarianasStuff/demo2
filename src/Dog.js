import React, { Component } from "react";

export default class App extends Component {
  handleClick = () => {
    // use the prop function giveTreat
    this.props.giveTreat(this.props.name);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <p>{this.props.name}</p>
        <p>{this.props.treat}</p>
        {/* <button onClick={this.handleClick}>Give Treat</button>
         */}
        <button onClick={() => this.props.giveTreat(this.props.name)}>
          Give Treat
        </button>
      </div>
    );
  }
}
