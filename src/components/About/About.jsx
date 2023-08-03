import React from 'react'
import web from "../src/ast/web.webp"
import { NavLink } from 'react-router-dom'
import './About.css';
import Common from '../../Common';

const About = () => {
  return (
    <>
     <Common 
      name="Welcome to About page" imgsrc={web} visit='/contact' 
     btname= "Contact Now" />
     </>
  )
}

export default About;