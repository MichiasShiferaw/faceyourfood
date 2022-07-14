import { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true
    };
    console.log(props["icon"]);

    let stepsource= this.props["icon"];

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    this.setState({ toggle1: !this.state.toggle1 });
    console.log("Icon Clicked")
  }

  render() {
    return (
      <a href="#0" onClick={this.onToggle}>
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
