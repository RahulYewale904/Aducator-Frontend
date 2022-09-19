import React from "react";
import AboutIMG from "../assets/images/Jumbo_ABout.svg";
import "../style/Jumbo_About.css";
import onlineCourse from "../assets/images/online-learning.png";
import Books from "../assets/images/open-book.png";
import Professional from "../assets/images/businessman.png";

export default function About() {
  return (
    <div>
      <div className="about_main">
        <div className="about_wrapper">
          <div className="about_left sm:hidden">
            <img src={AboutIMG} className="About_img" alt="Error" />
          </div>

          <div className="about_right">
            <div className="about_heading">
              <p className=" text-xl text-primeBlue font-bold">
                Learn & Upload Anything
              </p>
              <h1>Benefits About Online Learning Expertise</h1>
            </div>

            <div className="about_details">
              <section className="a_dt">
                <img src={onlineCourse} className="a_dt_icons" alt="Error" />
                <div className=" about_desc">
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                    Online Courses
                  </p>
                  <p>
                    Find Courses And comment on that..
                  </p>
                </div>
              </section>

              <section className="a_dt">
                <img src={Professional} className="a_dt_icons" alt="Error" />
                <div className=" about_desc">
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                    Learn with Expert
                  </p>
                  <p>
                     Best Teachers upload courses and projects.
                  </p>
                </div>
              </section>

              <section className="a_dt">
                <img src={Books} className="a_dt_icons" alt="Error" />
                <div className=" about_desc">
                  <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                    Free Uplading Facility
                  </p>
                  <p>
                    Upload Project and Publication Paper of your Categories. 
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
