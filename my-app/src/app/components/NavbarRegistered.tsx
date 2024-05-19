"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/navbarRegistered/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import { useAppContext } from '@/contextApi';
import Cookies from 'js-cookie';
// Define an interface for your JWT payload

// Define an interface for your JWT payload

function NavbarRegistered() {
   
  
  // Get the JWT token from cookies
   const token = Cookies.get('token');
    // Extract the user's TheGroom and TheBride name from the JWT token
    const { TheGroom = '', TheBride = '' } = token? JSON.parse(atob(token.split('.')[1])) : {};
  

   //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/navbarRegistered/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  
  
  const { conterApp, setconterApp } = useAppContext();
  
  /////////////////

  return (
    <>
          <link rel="stylesheet" href="assets/index/css/Video.css" />

      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/navbarRegistered/img/Favicon.png"
      />
      <link
        rel="stylesheet"
        href="assets/navbarRegistered/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,600,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="assets/navbarRegistered/fonts/fontawesome-all.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/navbarRegistered/css/navbar-logout.css"
      />
       <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/index/img/Favicon-1.png"
      />
      <link
        rel="stylesheet"
        href="assets/index/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,600&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="assets/index/fonts/font-awesome.min.css" />
      <link
        rel="stylesheet"
        href="assets/index/fonts/simple-line-icons.min.css"
      />
      <link rel="stylesheet" href="assets/index/css/aos.min.css" />
      <link rel="stylesheet" href="assets/index/css/animate.min.css" />
      <link rel="stylesheet" href="assets/index/css/Black-Navbar.css" />
      <link rel="stylesheet" href="assets/index/css/Pretty-Footer-.css" />
      <link rel="stylesheet" href="assets/index/css/style.css" />
      <link rel="stylesheet" href="assets/index/css/Video.css" />
      
      <nav
        className="navbar navbar-expand-md bg-body"
        style={{ height: "79px" }}
      >
        <div className="container">
          
          {/* juar link */}
          <Link
            className="navbar-brand"
            href="/"
            style={{
              color: "#777dc2",
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            JUAR
          </Link>

          
          
          {/* Toggle navigation for phone */}
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>




          <div
            className="collapse navbar-collapse"
            id="navcol-1"
            style={{ height: "79px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                
                
                 {/* link to HOME */}
                <Link
                  className="nav-link active"
                  id="home-link"
                  href="/"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  HOME
                </Link>





              </li>
              <li className="nav-item">
               
               
               {/* link to INVITATIONS */}
               <Link
                  className="nav-link"
                  id="invitation-link"
                  href="/invitationCards"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  INVITATION
                </Link>




              </li>
              <li className="nav-item">
                
                
                 {/* link to VENUES */}
                <Link
                  className="nav-link"
                  id="ven-link"
                  href="/venue"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  VENUES
                </Link>




              </li>
              <li className="nav-item">
                
                
                
                 {/* link to CHECK LIST */}
                <Link
                  className="nav-link"
                  id="checklist-link"
                  href="/checkList"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  CHECK LIST
                </Link>



              </li>
              <li className="nav-item">
                
                
                {/* link to Hair&Makeup */}
                <Link
                  className="nav-link"
                  id="salon-link"
                  href="/hairMakeup"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Hair&amp;Makeup
                </Link>




              </li>
              <li className="nav-item">
                
                
                {/* link to HONEYMOON */}
                <Link
                  className="nav-link"
                  id="honey-link"
                  href="/honeyMoon"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  HONEYMOON
                </Link>




              </li>
              <li className="nav-item">
               
               
                {/* link to  ABOUT US */}
                <Link
                  className="nav-link"
                  id="about-link"
                  href="/about"
                  style={{
                    color: "#000000",
                    fontFamily: '"Abhaya Libre", serif',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  ABOUT US
                </Link>




              </li>
            </ul>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ fontSize: "27px", marginRight: "9px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
          <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
          </svg>

          
          
          {/* span for user TheGroom & TheBride from data base  */}
          <span
            id="uesrName-span"
            style={{
              marginRight: "12px",
              fontFamily: '"Abhaya Libre", serif',
              fontWeight: "bold",
              fontSize: "20px"

            }}
          >
            {`${TheGroom} & ${TheBride}`}
          </span>




            {/* link to cart */}
          <Link 
          id="cart-link" 
          href="/cart"
          style={{ marginRight: "22px" }}>
            <div className="notification" id="cart-counter-1">
              
              
              {/* the span that show the number of items in cart */}
              <span className="badge" id="cart-counter-2">{conterApp}</span>
              
              
              <i
                className="fas fa-shopping-cart"
                id="cart"
                style={{ fontSize: "29px", marginRight: "0px" }}
              />
            </div>
          </Link>



              {/* logout button */}
          <button
            className="btn btn-primary"
            id="logout-btn"
            type="button"
            style={{
              width: "75.8906px",
              borderRadius: "7px",
              fontFamily: '"Abhaya Libre", serif',
            }}
            onClick={() => {
              Cookies.remove('token'); // Remove the token
              // Optionally, redirect the user to the login page
              if (window.location.pathname === '/cart') {
                window.location.href = '/';}
            }}
          >

            Logout
          </button>



        </div>
      </nav>
    </>
  );
}
export default NavbarRegistered;
