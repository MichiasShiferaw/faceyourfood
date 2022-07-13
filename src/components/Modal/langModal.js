import PickMeal from "../PickingComp/pickaMeal";

export default function langModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#expModal"
      >
        View More Language
      </button>

      <div
        className="modal fade"
        id="expModal"
        tabIndex="-1"
        aria-labelledby="expModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="expModalLabel">
                <i className="bi bi-egg-fried"></i>Pick A Muffin Meal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <PickMeal title1={"japanese"} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
