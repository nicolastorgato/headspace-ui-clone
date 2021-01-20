import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/index.jsx";
// import About from "./pages/about.jsx";
// import Menu from "./pages/menu.jsx";
import DropdownMenu from "./components/DropdownMenu";
import Banner from "./components/Banner";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const HideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', HideMenu);

    return () => {
      window.removeEventListener('resize', HideMenu);
    }
  })



  return (
    <div className='transition duration-500'>
      <Banner />
      
      <Navbar toggle={toggle}/>
      <DropdownMenu isOpen={isOpen} toggle={toggle}/>

      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
