import React from 'react'
 import {default as Pop} from '../components/PopularComp/PopularCateogries';
import {default as Homecomp} from '../components/Intro/Homecomp';
import {default as Seasonalfav} from '../components/Intro/seasonalfav';
import {default as Lastestrecipes} from '../components/Intro/lastestrecipes';
import {default as Login} from '../components/Register/Logincomp';
import Newsletter from '../components/Newsletter/newsletter';
import Assistance from '../components/Assistance/assistance';
import { welcome } from '../components/Assistance/assist_data';
import Cookies from '../components/Cookies/Cookie';

// import ToastDemo from '../components/ToastDemo';

function Home() {
  
  return (
    <div className='myhome container'>
        <Homecomp/>
        <Pop/>

        <Newsletter/>
        <Lastestrecipes/>
        
        <Seasonalfav/>
        {/* <Sidebar/> */}
        {/* <Modal1/>
        <Modal2/> */}
        <Cookies/>
        {/* <Login/> */}
        <hr/>
        <Assistance page={welcome}/>

        {/* <Cookies/> */}
    </div>
  )
}

export default Home