import React, { Component } from 'react'
import Settings from './Settings/setting'
import Preference from './Preference';

function History() {
  return (
    <div>Yo</div>
  )
}

function Favourite() {
  return (
    <div> My Favourite</div>
  )
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedOpt:"Preferences"
    };
     this.onChangeValue = this.onChangeValue.bind(this);
  }
  // onChange(selected) {
  //   console.log('%s selected', selected);
  //   this.setState({ selected });
  // }

    onChangeValue(event) {
      this.setState({
        selectedOpt:event.target.value
      });

  }


renderSwitch(param) {
  switch(param) {
    case 'Favourites':
      return <Favourite/>;
    case 'History':
      return <History/>;
    case 'Preferences':
      return <Preference/>;
    default:
      return <Settings/>;
  }
}

  render(){

  return (



    <>

<div className='row mb-3'>
    
    <div className='col-6 col-sm-2'>
      <h4 className='pt-2'>Settings</h4>
<div onChange={this.onChangeValue} className="settingoptions list-group-sm list-group list-group-checkable d-grid gap-2 border-0  bg-light pe-2 pb-5">
  
  
    <input type="radio" name="listGroupCheckableRadios" id="myAccount" value="Account"/>
    <label className="list-group-item hello rounded-3 py-3" type="radio" htmlFor="myAccount">
    My Account
    {/* <span className="d-block small opacity-50">123</span> */}
  </label>

  <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="favourites" value="Favourites"/>
  <label className="list-group-item hello rounded-3 py-3" htmlFor="favourites">
    My Favourites
    {/* <span className="d-block small opacity-50">Some other text goes here</span> */}
  </label>

  <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="history" value="History"/>
  <label className="list-group-item rounded-3 py-3" htmlFor="history">
    History
    {/* <span className="d-block small opacity-50">And we end with another snippet of text</span> */}
  </label>

  <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="preference" value="Preferences"/>
  <label className="list-group-item rounded-3 py-3" htmlFor="preference">
    My Preferences
    {/* <span className="d-block small opacity-50">This option is disabled</span> */}
  </label>
</div>
</div>
<div className='col-sm-6 col-lg-10'>{this.state.selectedOpt} Option
{this.renderSwitch(this.state.selectedOpt)}
</div>



</div>
{/* 
    <div className="card ">
        <div className="card-header"> 
            <ul className="nav nav-tabs card-header-tabs pull-right"  id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" >Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" >Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" >Contact</a>
                </li>
            </ul>
        </div>

        <div className="card-body">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.123</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </div>
    </div> */}

    {/* <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date" href="#selectDate">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul> */}

{/*  
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
    <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">123</div>
  <div className="tab-pane fade active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">.adsasadasdasdasd.</div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div> */}

<div>

</div>
</> 
  )
}
}

export default Index


