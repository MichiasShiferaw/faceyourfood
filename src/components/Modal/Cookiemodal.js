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
  <div className="modal-dialog tester101">
    <div className="modal-content bg-success">
      <div className="modal-header">
        <h5 className="modal-title" id="cookieModalLabel">Cookies for FYF</h5>
        <button type="button" className="btn-close" onClick={this.handleShow}></button>
      </div>
      <div className="modal-body">
<h2>Cookie Description</h2>
<p className='p-0 fs-5 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, .</p>
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
