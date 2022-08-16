import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  workInProgressPortfolio,
  upcomingPortfolio,
} from "../../data";



export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title:"Featured"
    },
    {
      id: "workInProgress",
      title: "Work in Progress"
    },
    {
      id: "upcoming",
      title: "Upcoming"
    }
  ];

  useEffect(()=>{
    
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "workInProgress":
        setData(workInProgressPortfolio);
        break;
      case "upcoming":
        setData(upcomingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  },[selected])

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="container">
          {data.map((data=>
            <div className="item">
            
              <img src={data.img} alt={data.title} />
              <h3><a href={data.link} target="blank">{data.title}</a></h3>
            
            </div>
          ))}
        
      </div>
    </div>
  );
}
