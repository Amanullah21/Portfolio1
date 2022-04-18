import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,} from "react-icons/ai";
import styled from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={styled.fix}>
      <a className={styled.color3}  target="_blank"  rel="noreferrer" 
      href="https://github.com/Amanullah21">
        <AiFillGithub className={styled.color1} />
        <br />
      </a>
      <a className={styled.color3} target="_blank"  rel="noreferrer" 
       href="https://twitter.com/home?lang=en">
        <AiFillTwitterCircle className={styled.color} />
        <br />
      </a>{" "}
      <a
        className={styled.color3} target="_blank"  rel="noreferrer" 
        href="https://www.linkedin.com/in/amanullah21/"
      >
        <AiFillLinkedin className={styled.color} />
        <br />
      </a>{" "}
      <a className={styled.color3}  target="_blank"  rel="noreferrer"  href="mailto:1amanpce@gmail.com">
        <AiFillMail className={styled.color} />
        <br />
      </a>
      <a className={styled.color3}  target="_blank"  rel="noreferrer"  href="tel:7070476900">
        <AiFillPhone className={styled.color} />
        <br />
      </a>
    </div>
  );
};

export default SideBar;
