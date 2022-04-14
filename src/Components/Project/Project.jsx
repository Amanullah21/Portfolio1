import React, { useState } from "react";
import styled from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import Modal from "react-modal";
import RoyalBrother from "../Images/RoyalBrother.png";
import Travlix from "../Images/Travlix.png";
import GoogleGrage from "../Images/googleGrage.png";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div id="project">
      <h1 className={styled.mid}><span style={{ color: "orange" }}>My</span> Projects</h1>

      {/* project 1 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={RoyalBrother} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Royal Brother</h2>
          <div className={styled.box}>
            <p>
              {" "}
              CLone of Royal Brother <br />
              Royal Brothers is a bike and car rental company in India. Royal
              Brothers was founded in 2015 by three young engineers of
              Bengaluru. South India's first RTO authorised bike rental service.
              <p onClick={() => setIsOpen2(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen2}>
              <h1 style={{ color: "orange" }}>Royal brothers</h1>
              <p>
                Royal brothers was started in July 2015 with the intent to make
                bike rentals easier, affordable and convenient for everyone.
                Before we started two wheeler for rent was only available in
                select City.
              </p>
              <p></p>
              <h5>Tech Stack : React || Redux || MUI || JSON Server </h5>

              <button onClick={() => setIsOpen2(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>Tech Stack : React || Redux || MUI || JSON Server </h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/Amanullah21/Google_garage"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a href="/" className={styled.size}>
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* //project no 2 */}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={Travlix} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Travelix Website</h2>
          <div className={styled.box}>
            <p>
              Clone of Travlix Website <br />
              It is a tourism website which provides details for planning one’s
              holiday and travel to the best tourist places across the globe.
              <p className={styled.blue} onClick={() => setIsOpen(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen}>
              <h1 style={{ color: "orange" }}>Travlix</h1>
              <p>
                Clone of the Travelix Website It is a tourism website which
                provides details for planning one’s holiday and travel to the
                best tourist places across the globe. Completed this project in
                6 days. Team had 3 members.
                <h3> Tech Stack: HTML, CSS, JAVASCRIPT, JSON-server</h3>
                A collaborative project in 5 days with 3 people
                <br />
                Roles & Responsibility:- Lead the team, created about-us,
                section parts and managed the whole code on GitHub. learned to
                manage the whole code on GitHub, collaborate in a team and
                communicate with team members.
              </p>
              <button onClick={() => setIsOpen(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5> Tech Stack: HTML || CSS || JAVASCRIPT || JSON-server</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/Amanullah21/Travelix-Clone"
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://amanullah21.github.io/Travelix-Clone/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      {/* ----project2 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={GoogleGrage} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Google Digital Garage</h2>
          <div className={styled.box}>
            <p>
              Google Digital Garage was created by Google in 2015 as a nonprofit
              program designed to help people improve their digital skills. It
              offers free training, courses and certifications via an online
              learning platform.
              <p onClick={() => setIsOpen1(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen1}>
              <h1 style={{ color: "orange" }}>Google Digital Garage</h1>
              <p>
                Google Digital Garage is a Grow with Google programme that
                provides free training and tools to help grow your career or
                business in the UK. Since 2015, the Google Digital Garage has
                visited more than 500 locations across the UK, and trained more
                than 400,000 people.
              </p>
              <p>
                Learn digital skills for free at your own pace, with
                personalised training designed to help you develop your career,
                market your business and more.
              </p>
              <h5>HTML5 || CSS3|| JAVASCRIPT </h5>

              <button onClick={() => setIsOpen1(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>HTML5 || CSS3|| JAVASCRIPT </h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/Amanullah21/Google_garage"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a href="/" className={styled.size}>
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* ----project3 */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Project;
