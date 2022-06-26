import React from 'react'
 import {default as Pop} from '../components/Intro/PopularCateogries';
import {default as Recipes} from '../components/Booking/Recipe';
import {default as Modal1} from '../components/Booking/modal';
import {default as Modal2} from '../components/Booking/modal2';
import {default as Launch} from '../components/Intro/launch';
import {default as Portion} from '../components/Intro/seasonalfav';
import {default as Portiontwo} from '../components/Intro/lastestrecipes';
import {default as Login} from '../components/Register/Login';
function Home() {
  return (
    <div className='container'>
        <Launch/>
        <Pop/>
        <Portiontwo/>
        <Portion/>
        {/* <Sidebar/> */}
        <Modal1/>
        <Modal2/>
    </div>
  )
}

export default Home