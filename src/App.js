import './App.css';

////Need these
 import {default as Footer} from './components/Footer/footer';

  import {default as NavBar } from './components/Intro/Navbar/navbar'

import React, {Component, Suspense, useEffect} from "react";
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
import Login from './Pages/Login';
import Account from './components/ProfileComp/Settings/Account';
import Favourite from './components/ProfileComp/Settings/Favourite';
import Preference from './components/ProfileComp/Settings/Preference';
import Launch from './Pages/Launch';

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
    // Loading... instead of null
    <Suspense fallback={null}>
    <Router>
      <ScrollToTop/>
      <NavBar/>



      <Routes>

        <Route path="/" element={<Launch/>}/>  
        <Route path="/home" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>
         <Route path="profile" element={<Profile/>}>
          <Route path="account" element={<Account />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="preference" element={<Preference />} />

        </Route>


         <Route path="/categories" element={<Categories/>}/> 
         <Route path="/categories/:cato/*" element={<Options12/>}/>
         <Route path="/categories/:cato/:meal" element={<Recipes/>}/>
        <Route path="/recipes" element={<Recipes1/>}/>  
        <Route path="/sign/:id1" element={<Login/>}/> 

        <Route path="*" element={<Errorpage/>}/>    
      </Routes>

      <Footer/>
    </Router>
    </Suspense>
    
  );
}
}

export default App;

