import React, { useEffect,useRef } from 'react';
import "./Intro.scss";
import {init} from "ityped";
function Intro() {

  const textRef=useRef();
  useEffect(() =>{
        console.log(textRef);
        init(textRef.current,
           { showCursor: false,
            backDelay:500,
            backSpeed:400,
             strings: ['Use with React.js!', 'Yeah!' ] })
  },[]);  
  
  return (
        <div className="intro" id="intro"> 
          <div className="left">
          <div className="imgcontainer">
          <img src="https://tse1.mm.bing.net/th?id=OIP.2kJisXufF3BaRvlO4ZgoLAHaFj&pid=Api&rs=1&c=1&qlt=95&w=155&h=116"
            alt=""/>
          </div>
          </div>
          <div className="right">
             <div className="wrapper">
             <h1>Hii there</h1>
             <h2>Hii there</h2>
             <h3>Hii there<span ref={textRef}></span></h3>
             </div>
             <a href="portfolio">
             <img src="https://tse2.mm.bing.net/th?id=OIP.YXhMN6Lia9SvoFwnd9UJBwHaHa&pid=Api&P=0&w=300&h=300"
              alt="/"/></a>
          </div>
        </div>
    )
}

export default Intro

