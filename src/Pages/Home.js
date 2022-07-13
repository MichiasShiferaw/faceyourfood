import React from 'react'
 import {default as Pop} from '../components/PopularComp/PopularCateogries';
// import {default as Recipes} from '../components/Booking/Recipe';
// import {default as Modal1} from '../components/Modal/modal';
// import {default as Modal2} from '../components/Modal/modal2';
import {default as Launch} from '../components/Intro/launch';
import {default as Portion} from '../components/Intro/seasonalfav';
import {default as Portiontwo} from '../components/Intro/lastestrecipes';
import {default as Login} from '../components/Register/Login';
import Newsletter from '../components/Newsletter/newsletter';
import Assistance from '../components/Assistance/assistance';
import { welcome } from '../components/Assistance/assist_data';
import Cookies from '../components/Cookies/Cookie';


// import ToastDemo from '../components/ToastDemo';

function Home() {
  return (
    <div className='myhome container'>
        <Launch/>
        <Pop/>

        <Newsletter/>
        <Portiontwo/>
        
        <Portion/>
        {/* <Sidebar/> */}
        {/* <Modal1/>
        <Modal2/> */}
        <Cookies/>
        <Login/>
        <hr/>
        <Assistance page={welcome}/>

        {/* <Cookies/> */}
    </div>
  )
}

export default Home