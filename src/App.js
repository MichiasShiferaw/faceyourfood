import './App.css';

// import {default as ServiceCard} from './Services/ServiceCard';

// import {default as Subsection} from './Booking/subsection';
// import {default as Banner} from './Intro/index';
// import {default as Promo} from './Intro/promo';
// import {default as Prices} from './Pricing/prices';
// import {default as Team} from './Footer/team';


////Need these
 import {default as Footer} from './components/Footer/footer';
 import {default as Sidebar} from './components/sidebar';

  import {default as NavBar } from './components/Intro/Navbar/navbar'
//  import {default as Pop} from './components/Intro/PopularCateogries';
// import {default as Recipes} from './components/Booking/Recipe';
// import {default as Modal1} from './components/Booking/modal';
// import {default as Modal2} from './components/Booking/modal2';
// import {default as Launch} from './components/Intro/launch';
// import {default as Portion} from './components/Intro/secondportion';
// import {default as Portiontwo} from './components/Intro/secondportion2';
// import {default as Login} from './components/Register/Login';





//Link
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Errorpage from './Pages/Errorpage';
import Recipe from './components/Booking/Recipe';
import Categories from './Pages/Categories';
import Options12 from './Pages/Meals/Option';
import FAQ from './Pages/FAQ';


function App() {
  return (
    
    <Router>
      <NavBar/>
      <Sidebar/>
      
      {/* <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="profile">Profile</Link>



      </nav> */}
      <Routes>
    <Route path="/" element={<Home/>}/>  
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>   
      <Route path="/profile/:username" element={<Profile/>}/> 
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/categories/:cato/*" element={<Options12/>}/>
      <Route path="/bakery/:meal/*" element={<Recipe/>}/>
      <Route path="/bakery/*" element={<Options12/>}/> 
      <Route path="/dessert/:meal/*" element={<Errorpage/>}/>
      <Route path="/fastfood/:meal/*" element={<Errorpage/>}/>
      <Route path="/breakfast/:meal/*" element={<Errorpage/>}/>
      <Route path="/snacks/:meal/*" element={<Errorpage/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/recipes" element={<Recipe/>}/>   





       <Route path="*" element={<Errorpage/>}/>    
      </Routes>

      <Footer/>
    </Router>
//     <div className="App">
//       <div className='container'>

      
//        
//  <Launch/>
// <Pop/>
// <Portiontwo/>
// <Portion/>



//       <Sidebar/>
//       <Modal1/>
//       <Modal2/>
// <Recipe/>
// <Login/>
//       <Footer/>
      

//     </div>
//     </div>
    
  );
}

export default App;

