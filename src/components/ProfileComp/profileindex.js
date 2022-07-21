import React from "react";
// import Settings from "./Settings/Account";
// import Preference from "./Settings/Preference";
import { Link, Outlet } from "react-router-dom";




function Profile1() {
const today = new Date();
const date1= (today.getMonth()+1)+"/"+today.getDate();

const time1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    function onChangeValue1() {
   console.log("hi");

    
	};



    return (
      <>



   <div className="row g-4 ">

           <nav id="sidebarMenu1" className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 pb-3">
        <h3 className="sidebar-heading d-flex justify-content-between align-items-center px-2 mt-4 mb-1 text-muted text-uppercase">
          <span>Settings</span>
          <a className="link-secondary" href="#/" aria-label="Settings">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>
          </a>
        </h3>
        <ul className="nav flex-column mb-2 " >
          <li className="nav-item list-group-item bg-light" value="Account"onClick={onChangeValue1}>
            <Link to="/profile/account" className="nav-link rounded-3 bg-light link-dark" aria-current="page" href="#/Account" value="Account">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
              My Account
            </Link>
          </li>
          <li className="nav-item list-group-item bg-light">
            
            <Link to="/profile/favourite" className="nav-link rounded-3 link-dark" href="#/Favourite">
              
              {/* <i style={{fontSize:"24px"}} className="bi bi-heart"/> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
              My Favourites
            </Link>
          </li>
          <li className="nav-item list-group-item bg-light">
             <Link to="/profile/preference" className="nav-link rounded-3  link-dark" href="#/Preference">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-sliders2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
</svg>
              Preference
            </Link>
          </li>
        </ul>

        

      </div>
    </nav>
            

                <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <div className="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        {/* <h1 className="h2"> {title1} Option</h1> */}
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2 fs-4">
            <button type="button" className="btn btn-lg btn-outline-secondary fw-bold text-grite">{date1}</button>
            <button type="button" className="btn btn-lg btn-outline-secondary fw-bold text-grite">{time1}</button>
          </div>

        </div>
      </div>
      <Outlet/>
    </main>
          </div>

        <div></div> 
      </>
    );
}

export default Profile1;
