import { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      toggle1: false
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    this.setState({ toggle1: !this.state.toggle1 });
  }

  render() {
    return (
      <a href="#0" onClick={this.onToggle}>
        {this.state.toggle1 ? (
          <i className="bi bi-heart-fill pe-3 display-4" />
        ) : (
          <i className="bi bi-heart pe-3 display-4" />
        )}
      </a>
    );
  }
}

