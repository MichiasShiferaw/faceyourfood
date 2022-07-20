import React, { Component } from 'react'

export default class Cookiemodal extends Component {
        constructor(props) {
        super(props);

        this.state = {
            modalState: true
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }
    render() {
        return (
          <div>
      <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} id="cookieModal" tabIndex="-1" aria-labelledby="cookieModalLabel" aria-hidden="true">
  <div className="modal-dialog text-grite tester101">
    <div className="modal-content bg-secondary">
      <div className="modal-header">
        <h5 className="modal-title" id="cookieModalLabel">Cookies for FYF</h5>
        <button type="button" className="btn-close" onClick={this.handleShow}></button>
      </div>
      <div className="modal-body">
<h2>Cookie Description</h2>
<p className='p-0 fs-5 mt-4'>We at FaceYourFood use cookies to ensure you have a personalised user experience, as well as to analyse our traffic and tailor content, ads and social media features. We share some of this information with our technology, analytics and marketing partners.</p>
      </div>
                 <div className="form-check h5">
            <input type="checkbox" className="form-check-input" id="agree-marketing"defaultChecked/>
            <label className="form-check-label" htmlFor="agree-marketing">I agree to receive marketing notifications with offers and news</label>
          </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={this.handleShow}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
  }
}
