import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuopen={menuOpen} setmenuopen={setMenuOpen}/>
      <Menu menuopen={menuOpen} setmenuopen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        {/* <Testimonials/> */}
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
