import React from "react";
import styled from "./Intro.module.css";
// import { Link } from "react-scroll";
import TypeWriter from "../TypeWriter/TypeWriter";
const Intro = () => {
  return (
    
    <div id="intro">
      <h1 className={styled.h1}>About <span style={{ color: "orange" }}>Me</span></h1>
      <h3 className={styled.color}>Hi, My Name is</h3>
      <p className={styled.fontS}><span style={{ color: "orange" }}>Md</span> Amanullah</p>
      <p className={styled.fontS2}>
        <TypeWriter />
      </p>
      <h3 className={styled.left}>
        My name is <span style={{ color: "orange" }}>Md Amanullah</span>, I am a Front-End Web developer and a blogger
        having experience of solving more than 100+ DSA problems across
        different platforms like Leetcode, Hackerrank, Geeksforgeeks and
        self-attained skill set which contains most used and compatible JS
        framework - React JS.
      </h3>
      <a
        className={styled.img}
        target="_blank" rel="noreferrer"
        href="https://www.linkedin.com/in/amanullah21/"
      >
        <button className={styled.btn}>Let's Chat</button>
      </a>
      <a
        className={styled.img}
        target="_blank" rel="noreferrer"
        href="https://drive.google.com/file/d/1-z07miUCgTmRkGmKEMz6bH9bizbQzA1V/view?usp=sharing"
        download
      >
        <button className={styled.btn}>See My Resume</button>
      </a>
    </div>
  );
};

export default Intro;
