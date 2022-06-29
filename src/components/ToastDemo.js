import React from 'react'

function ToastDemo() {
  return (
    <div>
        
        {/* <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="/assets/images/muffins/1.png" className="rounded me-2" alt="..."/>
    <strong className="me-auto">Bootstrap</strong>
    <small className="text-muted">11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div> */}

<div role="alert" aria-live="assertive" aria-atomic="true" className="toast" data-bs-autohide="false">
  <div className="toast-header1">
    <img src="/assets/images/muffins/1.png" className="rounded me-2" alt="..."/>
    <strong className="me-auto">Bootstrap</strong>
    <small>44 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Michias Shiferaw
  </div>
</div>
</div>
  )
}

export default ToastDemo