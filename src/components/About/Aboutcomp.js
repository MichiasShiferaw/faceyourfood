import {useTranslation} from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  const {t} = useTranslation(["aboutPage","footerPage"]);
  return (
    <div className="pb-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        {/* <div className="container-fluid py-5"> */}
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="display-5 fw-bold">{t("aboutPage:aboutUs")}</h1>
              <p className="lead my-4">
                {t("aboutPage:aboutPart1")}
                <span style={{ color: "#FFA500" }}>
                  <b> #1</b>
                </span>{" "}
                {t("aboutPage:aboutPart2")}<span style={{ color: "#FFA500" }}>
                  <b><i> {t("aboutPage:aboutPart3")}</i></b>
                </span>{" "} {t("aboutPage:aboutPart4")}
                <br/>{t("aboutPage:aboutPart5")} 
              </p>
              <div className="">
              <a className="btn btn-primary btn-lg me-4" href="https://github.com/MichiasShiferaw/draftfyf" rel="noreferrer" target="_blank">{t("github")}</a>
              <Link to="/FAQ"className="btn btn-outline-secondary btn-lg">FAQ</Link>
              </div>
            </div>
            <div className="col-md-4 text-center d-none d-md-block">
              <img
                className="img-fluid w-100 d-none d-sm-block"
                src="assets/images/chef2.gif"
                alt=""
              />
            </div>
          </div>

      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 text-white bg-dark rounded-3">
            <img className="img-fluid" src="/assets/images/momkid.jpg" alt="unity"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>{t("footerPage:contactUs")}</h2>
            <p>
              <ul className="list-unstyled fs-4">
                <li>
                  {t("footerPage:monday")}
                </li>
                <li>
                  {t("footerPage:saturday")}
                </li>
                <li>
                  {t("footerPage:sunday")}
                </li>
                <li>
                  {t("footerPage:phone")}
                </li>
                <li>
                  FAX: 253-561-5432
                </li>
              </ul>
            </p>
            <a className="btn btn-outline-secondary" href="mailto: admin@faceyourfood.ca">{t("footerPage:EmailUs")}</a>
          </div>
        </div>
      </div>

      <div className="mt-5 text-white">
            <div className="text-center">
                <h2>Get In Touch</h2>
                <p className="lead">Question to ask? Fill out the form to contact the team directly...</p>
            </div>

            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                    <form>
                        <label htmlFor="email" className="form-label">Email Address:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            <input type="email" className="form-control" id="email" placeholder="e.g. username@example.com"/>

                            <span className="input-group-text">
                                <span className="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                <i className="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>
                        </div>

                       

                        <label htmlFor="name" className="form-label">Name:</label>

                        <div className="mb-4 input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input type="text" className="form-control" id="name" placeholder="e.g. Julie"/>

                            <span className="input-group-text">
                                <span className="tt" data-bs-placement="bottom" title="Pretty self explanatory really">
                                    <i className="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>
                        </div>



                        <label htmlFor="subject" className="form-label">What is your question about?</label>
                        
                        <div className="input-group mb-4">
                            <span className="input-group-text">
                                <i className="bi bi-chat-right-dots-fill"></i>
                            </span>
                        <select id="subject" className="form-select">
                            <option value="recipe" selected>Recipe</option>
                            <option value="application" >Application</option>
                            <option value="other">Other query</option>
                        </select>
                        </div>

                        <div className="form-floating mb-4 mt-5">
                            <textarea id="query" className="form-control"></textarea>
                            <label htmlFor="query">Enter your feedback here</label>
                        </div>

                        <div className="mb-4 text-center">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
    </div> 
    </div>
  );
}

export default About;
