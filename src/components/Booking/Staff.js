export default function Booking() {


  return (

          <div className="list-group">
            <button type="button" className="list-group-item btn btn-secondary list-group-item-action d-flex justify-content-between align-items-start">
                <div className="ms-0 me-auto">
                    <i className="bi bi-question-circle-fill"></i> <b>No Preference</b>
                    </div>
            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
                <div className="ms-0 me-auto">
                <div className="fw-bold"><i className="bi bi-person-circle me-0"></i> Maddox</div>
                Manager
                </div>
                <span className="badge bg-primary badge-pill">4.6 <i className="bi bi-star-fill"></i></span>

            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div className="ms-0 me-auto">
                <div className="fw-bold"><i className="bi bi-person-circle me-0"></i> Duncan</div>
                Supervisor
                </div>
                <span className="badge bg-primary badge-pill">4.7 <i className="bi bi-star-fill"></i></span>
            </button>
            <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div className="ms-0 me-auto">
                <div className="fw-bold"><i className="bi bi-person-circle me-0"></i> Kathryn</div>
                Senior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">4.9 <i className="bi bi-star-fill"></i></span>
            </button>
                        <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div className="ms-0 me-auto">
                <div className="fw-bold"><i className="bi bi-person-circle me-0"></i> Travis </div>
                Junior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">4.7 <i className="bi bi-star-fill"></i></span>
            </button>

                        <button type="button" className="list-group-item btn btn-success list-group-item-action d-flex justify-content-between align-items-center">
<div className="ms-0 me-auto">
                <div className="fw-bold justify-content-start" ><i className="bi bi-person-circle me-0"></i> Robert</div>
                Junior Mechanic
                </div>
                <span className="badge bg-primary badge-pill">5.0 <i className="bi bi-star-fill"></i></span>
            </button>
            </div>

  );
}