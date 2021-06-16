import React from 'react'
import Intro from './Components/Intro';
import Topbar from './Components/Topbar';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import "./App.scss";
import {useState} from "react";
import Menu from './Components/Menu';
function App() {

  const [menuOpen ,setMenuOpen]= useState(false);
  return (
    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work />
        
        <Contact/>
    </div>
      
    </div>
  );
}

export default App;
