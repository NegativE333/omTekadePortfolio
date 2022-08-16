import "./portfolioList.scss";

export default function PortfolioList({title, active, id, setSelected}) {
  return (
    <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={()=> setSelected(id)}>
    {title}
    </li>
  )
}
