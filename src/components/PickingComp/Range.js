import React, { Component } from "react";

export default class Range extends Component {
     constructor(props) {
    super(props);
    // console.log(props);
     }
  render() {
    return (
      <div>
        <input
          type="range"
          className="ps-2 form-range"
          id="customRange2"
          maxValue={this.props.maxValue}
          minValue={1}
          value={this.props.value}
          onChange={value => this.props.handleOnChange(value)}
        />
      </div>
    );
  }
}