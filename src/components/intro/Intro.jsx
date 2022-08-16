import "./intro.scss";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from "react";
import Typical from 'react-typical'

export default function intro() {

  return (
    <div className="intro" id="intro">
    <div className="left">
    <div className="iconImg">
     <span> &#60;/&#62; </span>
    </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Om Tekade</h1>
        <h3>Freelance 
        <span> 
        <Typical
          steps={[' Developer', 2000, ' Web Designer', 2000]}
          loop={Infinity}
          wrapper="b"
          />    
          </span> 
        </h3>
      </div>
      <a href="#portfolio">
       <span> <ArrowDownwardIcon/> </span>
      </a>
    </div>
    </div>
  )
}
