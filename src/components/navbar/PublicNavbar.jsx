import React from "react";
import "../style/Navbar.css";
// import Logo from '../img/Logo.png'
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <>
      <div className="SideMenu flex justify-between items-center w-full ">
        <div className=" flex justify-between items-center w-full py-2 px-2">
          <div className=" ">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3 className=" text-xl font-bold">ADUCATOR</h3>
              <p className=" font-semibold">Online Education & Learning</p>
            </Link>
          </div>

          <div className=" ">
            <span
              className="uk-button uk-button-default uk-margin-small-right NavBurger"
              uk-toggle="target: #offcanvas-slide"
              uk-icon="icon: menu ; ratio:1.5"
            ></span>

            <div id="offcanvas-slide" uk-offcanvas="overlay: true">
              <div className="uk-offcanvas-bar sidebar rounded-r-lg">
                <div className="">
                  <h3 className=' text-lg'>Menu</h3>
                  <span className="uk-offcanvas-close" uk-icon="icon: close" />
                </div>

                <hr className="uk-divider-icon" />

                <div className=" flex flex-col justify-between w-full h-[80vh] ">
                  <div>
                    <ul className="uk-list" style={{ textDecoration: "none" }}>
                      
                    <Link style={{ textDecoration: "none" }} to="/about">
                    <li className="Links_nav_mobile">About </li>
                  </Link>

                      <Link className="Nav_Link_PC" to="/allcourses">
                      <li className="Links_nav_mobile">All Courses</li>
                    </Link>
                     
                      <Link style={{ textDecoration: "none" }} to="/Contact">
                        <li className="Links_nav_mobile">Contact </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <Link style={{ textDecoration: "none" }} to="/Login">
                
                       <div className=' flex justify-between w-full bottom-1  border-white'>
                       <p className=' text-lg font-semibold'>Login</p>
                       <span uk-icon="icon: sign-in; ratio: 1.5"></span>
                       </div>
                     
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pc_view flex w-[90%] mx-auto py-4 ">
        <div className="menu_logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className=" text-xl font-bold">ADUCATOR</h3>
            <p className=" font-semibold">Online Education & Learning</p>
          </Link>
        </div>

        <div className="menu_Links">
          <ul className="Pc_links">

          <Link style={{ textDecoration: "none" }} to="/about">
          <li>About </li>
        </Link>
          
            <Link className="Nav_Link_PC" to="/allcourses">
              <li>Courses</li>
            </Link>
          
          
            <Link className="Nav_Link_PC" to="/Contact">
              <li>Contact</li>
            </Link>
            <Link className="Nav_Link_PC" to="/Login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
