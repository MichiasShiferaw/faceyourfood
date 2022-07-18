import { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true
    };

    let stepsource= this.props["icon"];

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    this.setState({ toggle1: !this.state.toggle1 });
  }

  render() {
    return (
      <a href="#/" className="text-forgreen" onClick={this.onToggle}>
        {this.state.toggle1 ? (
          <i className={this.props["icon"]}/>
        ) : (
          <i className={(this.props["icon"])+"-fill"} />
        )}
      </a>
    );
  }
}
//  pe-3 display-4
