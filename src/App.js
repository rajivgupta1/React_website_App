// import { Routes, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  Home from './components/Home/Home';
import React from 'react'
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
// import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Routes>

    Hello mite how are you ?
    
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/services" component={Services} />
     <Route exact path="/contact" component={Contact} />
    {/* <Redirect to="/" /> */}
    {/* </Routes> */} 

    <Navbar />
    <Home />

    <About/>
    <Services/>
    <Contact/>
    

    </>
  )
}

export default App