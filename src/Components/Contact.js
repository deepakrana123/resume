import React,{useState} from 'react';
import "./Contact.scss";

function Contact() {

   const [message,setmessage]=useState(false); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        setmessage(true);
        

    };
    return (
        <div className="contact">
        <div className="left">
        <img src=""/>
        </div>
        <div className="right">
        <h2>Contact</h2>
        <form onClick={handleSubmit}>
        <input type = "text" placeholder = "Email"></input>
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
        {message && <span>Thanks , i ll reply soon:</span>}
        </form>
        
        </div>            
        </div>
    )
}

export default Contact
