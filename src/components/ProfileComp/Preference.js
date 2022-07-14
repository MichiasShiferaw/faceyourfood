import React from 'react'
import { AllLang } from "../Data/Language";

function Preference() {
  return (
    <div>
        <h3>Manage what you share on Youtube</h3>
        <p>Choose what we can sell to the black web</p>
        <hr/>

<div>

Toggle for Preference
<div className='fs-4'>
    <div className="form-check form-switch ">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Recommend Recipes</label>
    </div>

    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Cookies Enabled</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Record Activity on my Account</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Keep my favourites private</label>
    </div>
    </div>
</div>
<hr/>
<div>
<div className="input-group pt-5 mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Choose the language</label>
  <select className="form-select" id="inputGroupSelect01">
    
    <option selected>Choose...</option>
    {AllLang.map((recipe,index)=>(
        <option key={index} value={recipe.title} className="col-4" title={recipe.title}>
              {recipe.title}

        </option>))}
  </select>
  <button className='btn btn-lg btn-primary'>Save</button>
  <small class="w-100 ms-2 form-text text-muted">Select a Language</small>
</div>

</div>
    </div>
  )
}

export default Preference