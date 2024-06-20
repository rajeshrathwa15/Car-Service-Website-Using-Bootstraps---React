import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img src={require("../assets/images/logo.png")} alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/furnitures">
                        Furnitures
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/bookservice">
                        Book Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item d_none">
                      <Link className="nav-link" to="/login">
                        <i
                          className="fa fa-user-circle padd_right"
                          aria-hidden="true"
                        ></i>
                        Login/Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      {/* ********************************** */}
      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <img src={require("../assets/images/logo.png")} alt="#" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* ********************************** */}
      <nav
        class="navbar navbar-expand-lg navbar-light bg-dark"
        style={{ backgroundColor: "#141629" }}
      >
        <div class="container-fluid">
          <Link to="/">
            <img src={require("../assets/images/logo.png")} alt="#" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/furnitures"
                >
                  Furnitures
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/bookservice"
                >
                  Book Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item d_none">
                <Link
                  className="nav-link ml-2 mr-2 mt-2 text-white h6 fw-bolder"
                  to="/login"
                >
                  <i
                    className="fa fa-user-circle padd_right"
                    aria-hidden="true"
                  ></i>
                  Login/Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
