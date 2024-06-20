import React from "react";

const BookServiceModel = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-center font-weight-bold">
                <span className="text-success">B</span>ook
                <span className="text-success">C</span>ar
                <span className="text-success">S</span>ervice
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="name">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="number">Contect Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Contect Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="carcategory">Car Category</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select Any Option</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="sedan">Sedan</option>
                        <option value="semisuv">Semi Suv</option>
                        <option value="suv">SUV</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="date">Book Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="Time">Time</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select Any Option</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        Periodic service
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Ac service
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Batteries
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Tyres
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Detailing Services
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Car Spa & Cleaning
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Suspension & Fitments
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineCheckbox2">
                        Clutch & Body Parts
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <button type="submit" className="btn button">
                  Book Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookServiceModel;
