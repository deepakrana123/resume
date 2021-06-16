import React,{useState} from 'react';

import "./Work.scss";
function Work() {

    const [current,setcurrent]=useState(0);

    const data=[
        { 
            id:"1",
            icon:"",
            title:"web desgin",
            desc:"fndsmnfdsmf",
            project:"rtf",
            img:"",
        },
        { 
            id:"2",
            icon:"",
            title:"web2 desgin",
            desc:"fndsmnfdsmf",
            project:"dfwe",
            img:"",
        },
        { 
            id:"3",
            icon:"",
            title:"web3 desgin",
            desc:"fndsmnfdsmf",
            project:"dfw",
            img:"",
        },
        { 
            id:"4",
            icon:"",
            title:"web4 desgin",
            desc:"fndsmnfdsmf",
            project:"df",
            img:"",
        },
    ]

    const handleClick=(way)=>{

        way ==="left" ? setcurrent(current > 0 ? current-1:2):
        setcurrent(current < data.length -1 ? current+1:0);
         

    };
    return (
        <div className="work" id="work">
            <div className="slider"style={{transfrom:`translateX(-${current*100}vw)`}}>
            {data.map((d)=>(
                <div className="container">
                <div className="item">
                <div className="left">
                <div className="leftcontainer">
                <div className="imgcontainer">
                <img src={d.icon} alt=""/></div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>{d.project}</span>
            </div>
                </div>
                <div className="right">
                        <img src={d.img} alt="/"/>
    
                </div>
                </div>
                </div>

            ))}
         
          
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.dX3K4QUJvby7vnIx-c7IqwHaHa&pid=Api&P=0&w=300&h=300"
             className="arrow left "  onClick={()=>handleClick("left")} alt=""/>
            <img src="https://tse1.mm.bing.net/th?id=OIP.LFRiEgXLEUqcWuJxPzeL9wHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
             className="arrow right" onClick={()=>handleClick("right")} alt=""/>
        </div>
    )
}

export default Work;
