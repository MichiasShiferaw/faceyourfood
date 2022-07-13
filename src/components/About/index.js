import React from "react";

function About() {
  return (
    <div className="pb-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="display-5 fw-bold">About Us</h1>
              <p className="lead my-4">
                Created in 1999, Car Doctor was ranked{" "}
                <span style={{ color: "#FFA500" }}>
                  <b>#1</b>
                </span>{" "}
                in 21st Century Auto Repair Stores in the last three years. Car
                Doctor performs simple jobs to more complex with our World Class
                Mechanics. Car Doctor was awarded Highest Customer Satisfaction
                Award among all mechanic shops in North America.{" "}
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Check Out My Github
              </button>
            </div>
            <div>
              <img
                className="img-fluid w-100 d-none d-sm-block"
                src="assets/images/me.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>FYF Mission</h2>
            <p>
              This website is strictly to demonstrate my knowledge in React
              through heurtistic and interactive processes
            </p>
            <button className="btn btn-outline-light" type="button">
              FYF Mission
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Contact Us</h2>
            <p>
              <ul className="list-unstyled fs-4">
                <li>
                  Monday-Friday: <i>09:30-20:30</i>
                </li>
                <li>
                  Saturday: <i>09:00-18:00</i>
                </li>
                <li>
                  Sunday: <i>09:00-17:00</i>
                </li>
                <li>
                  Phone: <i>623-342-6434</i>
                </li>
                <li>
                  FAX: <i>253-561-5432</i>
                </li>
              </ul>
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Email US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
