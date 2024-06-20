import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="card p-0  ml-auto mr-auto col-6 mt-5 mb-5">
          <div className="card-header">
            <h1 className="text-center font-weight-bold">
              <span className="text-success">L</span>ogin
            </h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <span>Don't Have an Account </span>{" "}
              <Link to="/register" className="font-weight-bold text-primary">
                Register Here
              </Link>
              <br />
              <button type="submit" className="btn button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
