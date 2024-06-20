import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </a>
                    Locatins
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </a>
                    +91 9087654321
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    demo@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Copyright 2024 All Right Reserved By
                    <Link to="/"> Car service</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
