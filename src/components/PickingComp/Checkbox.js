import React, { Component } from "react";

export default class Checkbox extends Component {
  render() {
    const { id, name, handleChange, checked } = this.props;

    return (
                // <div className="row">
        <div aria-label="Toggle Sort">

        <input checked={checked} onChange={handleChange} name={name} id={id*100} type="checkbox" className="col btn-check" autoComplete="off"/>
        <label className="btn btn-outline-primary" htmlFor={id*100}>{name} Stars<i className="bi bi-star-fill"/></label>
      </div>
    );
  }
}