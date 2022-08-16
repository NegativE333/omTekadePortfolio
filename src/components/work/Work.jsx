import "./work.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

export default function Work() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id:1,
      icon: "img/react.png",
      title: "React",
      desc: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",
      img: "img/react2.jpg"
    },
    {  
      id: 2,
      icon: "img/node.png",
      title: "Node js",
      desc: "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature.",
      img: "img/node1.png"
    },
    {  
      id: 3,
      icon: "img/bootstrap.jpg",
      title: "Bootsrtrap",
      desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      img: "img/bootstrap1.jpg"
    }
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 :0);
  }
  return (
    <div className="
    work" id="work">
    <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
      { data.map((data) => (<div className="container">
        <div className="item">
          <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={data.icon}/>
            </div>
            <h2>{data.title}</h2>
            <p>
            {data.desc}
            </p>
            <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src={data.img}/>
          </div>
        </div>
      </div>))}
    </div>
      <ArrowForwardIosIcon className="arrowFor" onClick={()=>handleClick("left")}/>
      <ArrowBackIosNewIcon className="arrowBack" onClick={()=>handleClick()}/>
    </div>
  )
}
