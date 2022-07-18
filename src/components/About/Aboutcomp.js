import {useTranslation} from "react-i18next";
import React from "react";

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
              <a className="btn btn-primary btn-lg" href="https://github.com/MichiasShiferaw/draftfyf" rel="noreferrer" target="_blank">{t("github")}</a>
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
            <div class="text-center">
                <h2>Get In Touch</h2>
                <p class="lead">Question to ask? Fill out the form to contact the team directly...</p>
            </div>

            <div class="row justify-content-center my-5">
                <div class="col-lg-6">
                    <form>
                        <label for="email" class="form-label">Email Address:</label>
                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-envelope-fill"></i>
                            </span>
                            <input type="email" class="form-control" id="email" placeholder="e.g. mario@example.com"/>

                            <span class="input-group-text">
                                <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to">
                                <i class="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>
                        </div>

                       

                        <label for="name" class="form-label">Name:</label>

                        <div class="mb-4 input-group">
                            <span class="input-group-text">
                                <i class="bi bi-person-fill"></i>
                            </span>
                            <input type="text" class="form-control" id="name" placeholder="e.g. Mario"/>

                            <span class="input-group-text">
                                <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really">
                                    <i class="bi bi-question-circle text-muted"></i>
                                </span>
                            </span>
                        </div>



                        <label for="subject" class="form-label">What is your question about?</label>
                        
                        <div class="input-group mb-4">
                            <span class="input-group-text">
                                <i class="bi bi-chat-right-dots-fill"></i>
                            </span>
                        <select id="subject" class="form-select">
                            <option value="recipe" selected>Recipe</option>
                            <option value="application" >Application</option>
                            <option value="other">Other query</option>
                        </select>
                        </div>

                        <div class="form-floating mb-4 mt-5">
                            <textarea id="query" class="form-control"></textarea>
                            <label for="query">Enter your feedback here</label>
                        </div>

                        <div class="mb-4 text-center">
                            <button type="submit" class="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
    </div> 
    </div>
  );
}

export default About;
