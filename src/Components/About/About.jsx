import React from 'react'
import styled from "./About.module.css"
import img from "./aman.jfif"

const About = () => {
  return (
    <div id="about" className={styled.flex}>
      <div className={styled.div1}>
          <h3 className={styled.top}>I'm a highly resourceful and passionate Full Stack Web Developer. I love designing websites and I am looking for more opporunity to work in coding.</h3>
          <h3>Passionate about creating a positive user experience, I enjoy working with and adapting to technologies as they develop.</h3>
          <h3>I build things for Web Platforms, Young Entrepreneur and a Lover of Life!</h3>
      </div>
      <div className={styled.div2}>
          <img className={styled.img} src={img} alt="photo1"/>
      </div>
    </div>
  )
}

export default About
