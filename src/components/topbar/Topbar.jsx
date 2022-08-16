import "./topbar.scss";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuopen, setmenuopen}) {
  return (
    <div className={"topbar "+ (menuopen && "active")}>
        <div className="wrapper">
            <div  className="left">
                <a href="#intro" className="logo">   &#60; omTekade /&#62; </a>
                <div className="itemContainer">
                <PhoneIcon className="icon"/>
                    <span>7020294825</span>
                </div>
                <div className="itemContainer">
                <EmailIcon className="icon"/>
                    <span>omtekade914@gmail.com</span>
                </div>
            </div>
           
            <div  className="right">
                <div className="hamburger" onClick={()=> setmenuopen(!menuopen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
