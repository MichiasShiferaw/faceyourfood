import './App.css';

////Need these
 import {default as Footer} from './components/Footer/footer';
 import {default as Sidebar} from './components/Sidebar/sidebar';

  import {default as NavBar } from './components/Intro/Navbar/navbar'

import React, {Component, useEffect, useState} from "react";
//Link
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Errorpage from './Pages/Errorpage';

import Recipes from './Pages/Recipes';
import Categories from './Pages/Categories/Categories';
import Options12 from './Pages/Meals/Option';
import FAQ from './Pages/FAQ';
import Recipes1 from './Pages/Recipes1';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends Component {
  render() { 
  return (
    
    
    <Router>
      <ScrollToTop/>
      <NavBar/>
      <Sidebar/>



      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>   
        <Route path="/profile/:username" element={<Profile/>}/> 



         <Route path="/categories" element={<Categories/>}/> 
         <Route path="/categories/:cato/*" element={<Options12/>}/>
         <Route path="/categories/:cato/:meal" element={<Recipes/>}/>

        <Route path="/bakery/:meal/*" element={<Recipes/>}/>
        <Route path="/bakery/*" element={<Options12/>}/> 
        <Route path="/dessert/:meal/*" element={<Errorpage/>}/>
        <Route path="/fastfood/:meal/*" element={<Errorpage/>}/>
        <Route path="/breakfast/:meal/*" element={<Errorpage/>}/>
        <Route path="/snacks/:meal/*" element={<Errorpage/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/recipes" element={<Recipes1/>}/>  
         {/* <Route path="user" element={<About />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<FAQ />} />
          <Route path="*" element={<Errorpage />} />
        </Route> */}
        <Route path="*" element={<Errorpage/>}/>    
      </Routes>

      <Footer/>
    </Router>
    
  );
}
}

export default App;

