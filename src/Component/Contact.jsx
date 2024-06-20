import React from "react";
const Contact = () => {
  return (
    <>
      <div class="footer p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>

            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Full Name"
                      type="type"
                      name="Full Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      Message="Name"
                    >
                      Message
                    </textarea>
                  </div>
                  <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <button className="send_btn">Send</button>
                  </div>
                  <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <ul className="social_icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map">
                <figure>
                  <img src={require("../assets/images/map.jpg")} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
