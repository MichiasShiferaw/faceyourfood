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
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
    <label className="form-check-label" for="flexSwitchCheckDefault">Recommend Recipes</label>
    </div>

    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" for="flexSwitchCheckDefault">Cookies Enabled</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
    <label className="form-check-label" for="flexSwitchCheckDefault">Record Activity on my Account</label>
    </div>
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
    <label className="form-check-label" for="flexSwitchCheckDefault">Keep my favourites private</label>
    </div>
    </div>

    {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form> */}
</div>
<hr/>
<div>
<div className="input-group pt-5 mb-3">
    <div className="form-helper">Example helper</div>
  <label className="input-group-text" htmlFor="inputGroupSelect01">Choose the language</label>
  <select className="form-select" id="inputGroupSelect01">
    
    <option selected>Choose...</option>
    {AllLang.map((recipe,index)=>(
        <option key={index} value={recipe.title} className="col-4" title={recipe.title}>
              {recipe.title}

        </option>))}
  </select>
  <button className='btn btn-lg btn-primary'>Save</button>
</div>

<div className="js-search-hints" aria-describedby="Tips for searching">
<div className="fc-medium d-flex flex__allitems6 sm:fd-column p12 js-search-hints-text">
    <div className="flex--item">
        <div className="mb12">
            <span className="ff-mono fc-dark">[tag]</span>
            <span className="fc-black-500">search within a tag</span>
        </div>
        <div className="mb12">
            <span className="ff-mono fc-dark">user:1234</span>
            <span className="fc-black-500">search by author</span>
        </div>
        <div className="mb12">
            <span className="ff-mono fc-dark">"words here"</span>
            <span className="fc-black-500">exact phrase</span>
        </div>
            <div className="sm:mb12">
                <span className="ff-mono fc-dark">collective:"Name"</span>
                <span className="fc-black-500">collective content</span>
            </div>
    </div>
    <div className="flex--item">
        <div className="mb12">
            <span className="ff-mono fc-dark">answers:0</span>
            <span className="fc-black-500">unanswered questions</span>
        </div>
        <div className="mb12">
            <span className="ff-mono fc-dark">score:3</span>
            <span className="fc-black-500">posts with a 3+ score</span>
        </div>
            <div className="mb12">
                <span className="ff-mono fc-dark">is:question</span>
                <span className="fc-black-500">type of post</span>
            </div>
        <div className="">
            <span className="ff-mono fc-dark">isaccepted:yes</span>
            <span className="fc-black-500">search within status</span>
        </div>
    </div>
</div>
<div className="p12 bt bc-black-075 mtn1">
    <div className="d-flex gs8 jc-space-between ai-center fw-wrap">
        <div className="flex--item">
                <a className="s-btn s-btn__filled s-btn__xs" href="/questions/ask">
                    Ask a question
                </a>
        </div>
        <div className="flex--item fs-fine">
            <a href="https://stackoverflow.com/help/searching">Search help</a>
        </div>
    </div>
</div></div>
</div>
    </div>
  )
}

export default Preference