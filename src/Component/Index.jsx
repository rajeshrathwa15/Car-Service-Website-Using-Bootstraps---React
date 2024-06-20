import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Furnitures from "./Furnitures";
const Index = () => {
  return (
    <>
      <section className="banner_main">
        <div id="banner1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters,
                        </p>
                        <Link to="/about">More Info </Link>
                        <Link to="/contact">Contact Us</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img
                            src={require("../assets/images/car.png")}
                            alt="#"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src={require("../assets/images/thr.png")} alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src={require("../assets/images/thr1.png")} alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <h3>AUTO DIAGNOSE</h3>
                <i>
                  <img src={require("../assets/images/thr2.png")} alt="#" />
                </i>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed d
                  veniam, adipiscing elit, sed d veniam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Furnitures />
    </>
  );
};
export default Index;
