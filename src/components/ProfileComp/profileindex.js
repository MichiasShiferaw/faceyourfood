import React, { Component } from "react";
import Settings from "./Settings/setting";
import Preference from "./Preference";

function History() {
  return <div>Yo</div>;
}

function Favourite() {
  return <div> My Favourite</div>;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOpt: "Preferences",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.setState({
      selectedOpt: event.target.value,
    });
  }

  renderSwitch(param) {
    switch (param) {
      case "Favourites":
        return <Favourite />;
      case "History":
        return <History />;
      case "Preferences":
        return <Preference />;
      default:
        return <Settings />;
    }
  }

  render() {
    return (
      <>
        <div className="row g-5 ">
          <div className="col-md-2">
            <div className="position-sticky">
            <h4 className="pt-2">Settings</h4>
            <div
              onChange={this.onChangeValue}
              className="settingoptions list-group-sm w-50 list-group list-group-checkable d-grid gap-2 border-0  bg-light pe-2 pb-5"
            >
              <input
                type="radio"
                name="listGroupCheckableRadios"
                id="myAccount"
                value="Account"
              />
              <label
                className="list-group-item hello rounded-3 py-3"
                type="radio"
                htmlFor="myAccount"
              >
                My Account
              </label>

              <input
                className="list-group-item-check w-50 pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="favourites"
                value="Favourites"
              />
              <label
                className="list-group-item hello rounded-3 py-3"
                htmlFor="favourites"
              >
                My Favourites
              </label>

              <input
                className="list-group-item-check w-50 pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="history"
                value="History"
              />
              <label
                className="list-group-item rounded-3 py-3"
                htmlFor="history"
              >
                History/Bookmarked
              </label>

              <input
                className="list-group-item-check pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="preference"
                value="Preferences"
              />
              <label
                className="list-group-item rounded-3 py-3"
                htmlFor="preference"
              >
                My Preferences
              </label>
            </div>
            </div>
          </div>
          <div className="col-md-10">
            {this.state.selectedOpt} Option
            {this.renderSwitch(this.state.selectedOpt)}
          </div>
        </div>

        <div></div>
      </>
    );
  }
}

export default Index;
