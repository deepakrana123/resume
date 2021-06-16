import React from 'react'
import "./Topbar.scss";
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
function Topbar({menuOpen,setMenuOpen}) {
   
    return (
        <div className={"topbar  "+ (menuOpen && "active") }>
            <div className="wrapper">
            <div className="left">
            <a href="intro" className="logo"> intro</a>
            <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>1909448495</span>
            </div>
            <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>snsn@gmail.com</span>
            </div>
            </div>
            <div className="right">
            <div className="hamburger " onClick={()=>setMenuOpen(!menuOpen)} >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default Topbar;
