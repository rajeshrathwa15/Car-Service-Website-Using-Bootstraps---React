import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <div className="container">
        <div className="card p-0 ml-auto mr-auto col-6 mt-5 mb-5">
          <div className="card-header">
            <h1 className="text-center font-weight-bold">
              <span className="text-success">R</span>egister
            </h1>
          </div>
          <div className="card-body">
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
                    <label for="name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
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
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
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
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="Address">Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                </div>
              </div>
              <span>Allready Have an Account </span>
              <Link to="/login" className="font-weight-bold text-primary">
                Login Here
              </Link>
              <br />
              <button type="submit" className="btn button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
