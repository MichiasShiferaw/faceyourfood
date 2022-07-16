import React, { Component } from "react";
import Settings from "./Settings/setting";
import Preference from "./Preference";
import { Link } from "react-router-dom";

function History() {
  return <div>Yo</div>;
}

function Favourite() {
  return <div> My Favourite
    
  </div>;
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
    console.log(event.target.value);
    <Link to={event.target.value}/>
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
            <ul class="settingoptions nav nav-pills flex-column mb-auto fs-5" onChange={this.onChangeValue}>
      <li class="nav-item">
        <input
                type="radio"
                name="listGroupCheckableRadios"
                id="myAccount"
                value="Account"
              />
              <label
              
                className="list-group-item hello rounded-3 py-3 nav-link link-dark"
                type="radio"
                htmlFor="myAccount"
                
              >My Account
              </label>
      </li>
      <li className="nav-item">
       <input
                className="list-group-item-check pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="favourites"
                value="Favourites"
              />
              <label
                className="list-group-item hello rounded-3 py-3 nav-link link-dark"
                htmlFor="favourites"
              >
                My Favourites
              </label>

      </li>
      <li className="nav-item">
                      <input
                className="list-group-item-check pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="history"
                value="History"
              />
              <label
                className="list-group-item rounded-3 py-3 nav-link link-dark"
                htmlFor="history"
              >
                Bookmark
              </label>
      </li>
      <li className="nav-item">
        <input
                className="list-group-item-check pe-none"
                type="radio"
                name="listGroupCheckableRadios"
                id="preference"
                value="Preferences"
              />
              <label
                className="list-group-item rounded-3 py-3 nav-link link-dark"
                htmlFor="preference"
              >
                Settings
              </label>
      </li>

    </ul>
           
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
