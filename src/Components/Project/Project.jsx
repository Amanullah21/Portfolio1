import React, { useState } from "react";
import styled from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import Modal from "react-modal";
import RoyalBrother from "../Images/RoyalBrother.png";
import Travlix from "../Images/Travlix.png";
import GoogleGrage from "../Images/googleGrage.png";
import Adidas from "../Images/Adidas.PNG";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div id="project">
      <h1 className={styled.mid}>
        <span style={{ color: "orange" }}>My</span> Projects
      </h1>

      {/* Project no 1 adidas */}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={Adidas} alt="Adidas" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Adidas</h2>
          <div className={styled.box}>
            <h4>Clone of Adidas Website</h4>
            <p>
              Adidas is a German base company. That designs and manufactures
              shoes, clothing and accessories. It is the largest sportswear
              manufacturer in Europe, and the second largest in the world, after
              Nike.
              <p>It is Solo Project</p>
              <p onClick={() => setIsOpen3(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen3}>
              <h1 style={{ color: "orange" }}>Adidas</h1>
              <h4 className={styled.color}>It is Solo Project</h4>
              <p>
                Role:- Created Home, Men and Product page, adding filtering and
                Sorting functionality, add to card, show bag, add shipping
                details and buy it.
              </p>
              <p></p>
              <h5>Tech Stack : React || Redux || MUI || JSON Server </h5>

              <button onClick={() => setIsOpen3(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>Tech Stack : React || Redux || MUI || JSON Server </h5>
          <div className={styled.flex}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Amanullah21/Adidas"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amanullah21.github.io/adidas"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* project 2 */}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={RoyalBrother} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Royal Brother</h2>
          <div className={styled.box}>
            <h4>Clone of Royal Brother</h4>
            <p>
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
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Amanullah21/RoyalBrother"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://royal-brother-1amanpce-gmailcom.vercel.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>

      {/* //project no 3*/}

      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={Travlix} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Travelix Website</h2>
          <div className={styled.box}>
            <h4>Clone of Travlix Website</h4>
            <p>
              It is a tourism website which provides details for planning one’s
              holiday and travel to the best tourist places across the globe.
              <p className={styled.blue} onClick={() => setIsOpen(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen}>
              <h1 style={{ color: "orange" }}>Travlix</h1>
              <p>
                <h3> Tech Stack: HTML, CSS, JAVASCRIPT, JSON-server</h3>
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
              target="_blank"
              rel="noreferrer"
              className={styled.size}
              href="https://github.com/Amanullah21/Travelix-Clone"
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className={styled.size}
              href="https://amanullah21.github.io/Travelix-Clone/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      {/* ----project3 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img className={styled.img} src={GoogleGrage} alt="logo" />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2 style={{ color: "orange" }}>Google Digital Garage</h2>
          <div className={styled.box}>
            <h4>Clone of Google Digital Garage</h4>
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
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Amanullah21/Google_garage"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amanullah21.github.io/Google_garage"
              className={styled.size}
            >
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
