import Data from './carInfo.json';
import React, { Component } from "react";


export class CarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year1:'2022',
      make1:'Audi',
      size1:'Coupe',
      model1:'R8',
      unqiueTags:[]
    };
    this.onYearChange = this.onYearChange.bind(this);
    this.onMakeChange = this.onMakeChange.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onModelChange = this.onModelChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);

  }

  onYearChange(event) {

    this.setState({
      year1: event.target.value,
      model1:1,
      make1:1,
      size1:1,
      unqiueTags:[]
    });
  }

    onMakeChange(event) {

    this.setState({
      make1: event.target.value,
            model1:1,
      size1:1,
      unqiueTags:[]
    });


  }

    onSizeChange(event) {
    this.setState({
      
      size1: event.target.value,
      model1:1,
      unqiueTags:[]
    });

  }

    onModelChange(event) {

    this.setState({
      model1: event.target.value
    });
  }


  onSubmitForm() {
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        {/* <ConfirmModal 
        year1={this.state.year1}  onYearChange={this.onYearChange.bind(this)} 
        model1={this.state.model1}  onModelChange={this.onModelChange.bind(this)} 
        size1={this.state.size1} onSizeChange={this.onSizeChange.bind(this)} 
        make1={this.state.make1} onMakeChange={this.onMakeChange.bind(this)} /> */}
        <select value={this.state.year1} name="Year" onChange={this.onYearChange} className="form-select my-3" aria-label="Default select Year">
            {/* {Data[0][2005]} */}
            
             {Object.keys(Data).map((opt)=>(
              <option value={opt}>{opt}</option>
            ))} 
            
        </select>

        <select value={this.state.make1} name="Make" onChange={this.onMakeChange} className="form-select my-3" aria-label="Default select Make">
            <option>Select Make</option>
             {Object.keys(Data[this.state.year1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            ))} 
        </select>

        <select value={this.state.size1} name="Size" onChange={this.onSizeChange} className="form-select my-3" aria-label="Default select Size">
            <option>Select Size</option>

            { Data[this.state.year1][this.state.make1] ? Object.keys(Data[this.state.year1][this.state.make1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            )) : null }
            
        </select>

        <select value={this.state.model1} name="Model" onChange={this.onModelChange} className="form-select my-3" aria-label="Default select Model">
            <option>Select Model</option> 
            { Data[this.state.year1]?.[this.state.make1]?.[this.state.size1] ? (Data[this.state.year1][this.state.make1][this.state.size1]).map((opt)=>(
              <option value={opt}>{opt}</option>
            )) : null }

        </select>
        
              <button onClick={this.onSubmitForm}>Submit</button>
      </div>
    );
  }
}

