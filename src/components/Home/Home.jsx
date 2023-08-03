import React from 'react'
import web from "../ast/web.webp"
import { NavLink } from 'react-router-dom'
import './Home.css';
import Common from '../../Common';

const Home = () => {
  return (
    <>
    <Common 
       name="Grow your business with" imgsrc={web} visit='/services' 
     btname= "Get Started"
    />
     </>
  )
}

export default Home