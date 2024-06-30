import React from "react";
import pic from "../Assets/pari.jpg";
import edd from "../Assets/edd.jpg";
import exp1 from "../Assets/exp2.jpg";

const HeroPage = () => {
  return (
    <main>
      <div className="container-fluid home">
        <div className="row">
          <div className="col-xl-8 col-md-7 col-xs-12 home-content p-5 ">
            <h3>Hello, It's Me</h3>
            <h1>Falguni Pawar</h1>
            <h3>
              And I'm a <span>React.JS Developer</span>
            </h3>
            <br />
            <p>
              Enthusiastic and detail-oriented React Developer with a solid
              foundation in React.js, and front-end development principles.
              Skilled in building responsive web applications and eager to
              contribute to innovative projects while continuously enhancing my
              technical skills.
            </p>

            <div className="social-media">
              <a href="#">
                <box-icon type="logo" name="instagram"></box-icon>
              </a>
              <a href="#">
                <box-icon name="linkedin" type="logo"></box-icon>
              </a>
              <a href="#">
                <box-icon type="logo" name="twitter"></box-icon>
              </a>
              <a href="#">
                <box-icon type="logo" name="facebook"></box-icon>
              </a>
            </div>

            <a
              href="https://falguni.tiiny.site/"
              target="_blank"
              download
              className="btn"
            >
              <h6>Download CV </h6>
            </a>
          </div>
          <div className="col-xl-4 col-md-5 col-xs-12  home-img">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row" id="edu">
          <div className="col-xl-5 col-md-6 col-xs-12 eduimg">
            <img src={edd} />
          </div>

          <div className="col-xl-7 col-md-6 col-xs-12 ">
            <h1>Education</h1>

            <ul class="list-group list-group-flush">
              <li class="list-group-item" className="btechbg">
                Degree <strong>(BTECH)</strong> <br />
                <strong>Government College of Engineering Jalgaon</strong>
                <p>
                  Bachelor of Technology (B.Tech) in Electronics and
                  Telecommunication Engineering [North Maharashtra University],
                  [Jalgaon, India] [Year of Completion 2023] CGPA: [8.83]
                  Distinction: First Class with Distinction !!!
                </p>
              </li>

              <li class="list-group-item" className="dipbg">
                Diploma <br />
                <strong>Government Polytechnic Nashik</strong>
                <p>
                  Diploma in Electronics and Telecommunication Engineering
                  [Autonomous Institute], [Nashik, India] [Year of Completion
                  2020] Percentage: [84.81%] Distinction: First Class with
                  Distinction !!!
                </p>
              </li>
              <li class="list-group-item" className="sscbg">
                SSC <br />
                <strong>R.A.Anand Rushiji School</strong>
                <p>
                  Completing my schooling from R.A.Anand rushiji school [Nashik,
                  India] 10th Grade Marks: [82.20%] [Year of Completion 2017]
                  <br />
                  Distinction: First Class with Distinction !!!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-xs-12 exptext ">
            <ol className="list-group list-group-flush" id="expp">
              <h1>Experience</h1>
              <li class="list-group-item active">Work Experience</li>

              <li class="list-group-item">
                <strong>Enut Technology Pvt Ltd. (UI developer Intern)</strong>
                <p>
                  <ul>
                    <li>
                      In-depth understanding of Web development services,
                      including basic languages such as HTML, CSS, Javascript,
                      React JS, Bootstrap, and more.
                    </li>
                    <li>
                      Proficient in designing, deploying, and managing
                      fault-tolerant, highly available, and managing Web
                      Application.
                    </li>
                    <li>
                      Strong knowledge of Frontend development with best
                      practices, such as Bootstrap Framework.
                    </li>
                    <li>
                      Hands-on experience in Projects, actively contributed to
                      the successful development of the live projects like Women
                      shop, Attendance system.
                    </li>
                  </ul>
                </p>
              </li>
            </ol>
          </div>

          <div className="col-xl-6 col-md-6 col-xs-12 expimg">
            <img src={exp1} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" id="box">
          <div className="col-xl-12  col-xs-12 ">
            <h1>Skills</h1>
            <ul>
              <li>Problem Solving | </li>
              <li>Positive Thinking | </li>
              <li>Hard Working | </li>
              <li>Troubleshooting | </li>
              <li>Decision Making </li>
            </ul>
          </div>

          <div className="col-xl-12 col-xs-12 mb-5">
            <h1>Certification</h1>
            <ul>
              <li>
                Web Development <strong>(Internshala) </strong> |
              </li>
              <li>
                C Programming <strong>(Great Learning) </strong> |
              </li>
              <li>
                Mern Stack Development <strong>(Enut Technology) </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
