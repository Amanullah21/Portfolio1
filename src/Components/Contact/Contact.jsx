import React  from "react";
import styled from "./Contact.module.css";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact">
      <h1 className={styled.h1}>Contact <span style={{ color: "orange" }}>Me</span></h1>
      <div className={styled.contact}>
        <a
          className={styled.color3}
          target="_blank" rel="noreferrer"
          href="https://github.com/Amanullah21"
        >
          <AiFillGithub className={styled.color} />
          <br />
        </a>
        <a
          className={styled.color3}
          target="_blank" rel="noreferrer"
          href="https://twitter.com/home?lang=en"
        >
          <AiFillTwitterCircle className={styled.color} />
          {/* <br /> */}
        </a>{" "}
        <a
          className={styled.color3}
          target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/in/amanullah21/"
        >
          <AiFillLinkedin className={styled.color} />
          {/* <br /> */}
        </a>{" "}
        <a
          className={styled.color3}
          target="_blank" rel="noreferrer"
          href="mailto:1amanpce@gmail.com"
        >
          <AiFillMail className={styled.color} />
          {/* <br /> */}
        </a>
        <a className={styled.color3} target="_blank" rel="noreferrer" href="tel:7070476900">
          <AiFillPhone className={styled.color} />
          <br />
        </a>
      </div>
      <div className={styled.mail_section}>
        <span style={{ color: "orange" }}>Mail </span>
        <a href="mailto:1amanpce@gmail.com"> 1amanpce@gmail.com</a> <br />
        <span style={{ color: "orange" }}> Contact</span>{" "}
        <a href="tel:555-555-5555"> 7070476900</a>
      </div>
      <br />
    </div>
  );
};

export default Contact;
