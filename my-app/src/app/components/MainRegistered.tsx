"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/index/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Modal1 from './modal';
import AboutUs from "../about/page";

import CardCompColored from '../cardCompColored/page';
import CardCompNoColored from '../cardCompNoColored/page';
import Cart from '../cart/page';
import CheckList from '../checkList/page';
import HairMakeup from '../hairMakeup/page';
import HoneyMoon from '../honeyMoon/page';
import Index from '../pages/Index';
import InvitationCards from '../invitationCards/page';
import Venue from '../venue/page';

function MainRegistered() {
    
    
    
    return (
<>
<meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Home - Brand</title>
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
                  INVITATIONS
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
         
         {/* modal component for log in and sign up */}
          <Modal1/>





        </div>
      </nav>
</>


);
}
export default MainRegistered;