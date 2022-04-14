import React from 'react'
import About from './About/About'
import { Blog } from './Blog/Blog'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Project from './Project/Project'
import SideBar from './Sidebar/SideBar'
import Skills from './Skills/Skills'

const Main = () => {
  return (
    
    <>
      <Navbar/>
      <SideBar/>  
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Blog/>
      <Contact/>
    </>
  )
}

export default Main
