"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/index/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/invitationCards/css/Flip-Card.css";
import "../../../public/assets/invitationCards/css/untitled.css";
import { useAppContext } from '@/contextApi';
import Link from "next/link";

import Footer from "../components/Footer";
import MainRegistered from "../components/MainRegistered";

import NavbarRegistered from "../components/NavbarRegistered";

import Cookies from 'js-cookie';


import { Console } from "console";

function InvitationCards() {
  //import bootstrap javascript
  const { darkMode, setDarkMode } = useAppContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/invitationCards/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  //ARRAY OF IMG
  ///////////////////////////////////////////////////////////////////////
  const [imageUrls1, setImageUrls1] = useState<string[]>([]);
  const [imageUrls2, setImageUrls2] = useState<string[]>([]);
  const [imageUrls3, setImageUrls3] = useState<string[]>([]);
  const [imageUrls4, setImageUrls4] = useState<string[]>([]);
  const [imageUrls5, setImageUrls5] = useState<string[]>([]);
  const [imageUrls6, setImageUrls6] = useState<string[]>([]);
  const [imageUrls7, setImageUrls7] = useState<string[]>([]);
  const [imageUrls8, setImageUrls8] = useState<string[]>([]);
  const [imageUrls9, setImageUrls9] = useState<string[]>([]);
  const [imageUrls10, setImageUrls10] = useState<string[]>([]);
  const [imageUrls11, setImageUrls11] = useState<string[]>([]);
  const [imageUrls12, setImageUrls12] = useState<string[]>([]);
  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/images.json");
        const data = await response.json();

        setImageUrls1([
          data.image1[0].source,
          data.image1[1].source,
          data.image1[2].source,
        ]);

        setImageUrls2([
          data.image2[0].source,
          data.image2[1].source,
          data.image2[2].source,
        ]);

        setImageUrls3([
          data.image3[0].source,
          data.image3[1].source,
          data.image3[2].source,
        ]);
        setImageUrls4([
          data.image4[0].source,
          data.image4[1].source,
          data.image4[2].source,
        ]);
        setImageUrls5([
          data.image5[0].source,
          data.image5[1].source,
          data.image5[2].source,
        ]);
        setImageUrls6([
          data.image6[0].source,
          data.image6[1].source,
          data.image6[2].source,
        ]);
        setImageUrls7([
          data.image7[0].source,
          data.image7[1].source,
          data.image7[2].source,
        ]);
        setImageUrls8([
          data.image8[0].source,
          data.image8[1].source,
          data.image8[2].source,
        ]);
        setImageUrls9([
          data.image9[0].source,
          data.image9[1].source,
          data.image9[2].source,
        ]);
        setImageUrls10([
          data.image10[0].source,
          data.image10[1].source,
          data.image10[2].source,
        ]);
        setImageUrls11([
          data.image11[0].source,
          data.image11[1].source,
          data.image11[2].source,
        ]);
        setImageUrls12([
          data.image12[0].source,
          data.image12[1].source,
          data.image12[2].source,
        ]);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchData();
  }, []);

  const {RedImgCounter,setRedImgCounter} = useAppContext();

  const handelClick1 = () => {
    setRedImgCounter(1);
  }
  const handelClick2 = () => {
    setRedImgCounter(2);
  }
  const handelClick3 = () => {
    setRedImgCounter(3);
  }
  console.log(RedImgCounter);

    
  const [name1, setname1] = useState<string[]>([]);
  const [name2, setname2] = useState<string[]>([]);
  const [name3, setname3] = useState<string[]>([]);
  const [name4, setname4] = useState<string[]>([]);
  const [name5, setname5] = useState<string[]>([]);
  const [name6, setname6] = useState<string[]>([]);
  const [name7, setname7] = useState<string[]>([]);
  const [name8, setname8] = useState<string[]>([]);
  const [name9, setname9] = useState<string[]>([]);
  const [name10, setname10] = useState<string[]>([]);
  const [name11, setname11] = useState<string[]>([]);
  const [name12, setname12] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cardsName.json");
        const data = await response.json();

        setname1([
          data.image1[0].name,
        
        ]);

        setname2([
          data.image2[0].name,
         
        ]);

        setname3([
          data.image3[0].name,
          
        ]);
        setname4([
          data.image4[0].name,
         
        ]);
        setname5([
          data.image5[0].name,
        
        ]);
        setname6([
          data.image6[0].name,
        
        ]);
        setname7([
          data.image7[0].name,
         
        ]);
        setname8([
          data.image8[0].name,
         
        ]);
        setname9([
          data.image9[0].name,
        
        ]);
        setname10([
          data.image10[0].name,
        
        ]);
        setname11([
          data.image11[0].name,
      
        ]);
        setname12([
          data.image12[0].name,
         
        ]);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchData();
  }, []);

  /////////////////////////////////////////////////////////////////////////
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Update isLoggedIn after the component has mounted
    setIsLoggedIn(!!Cookies.get('token'));
  
    // Check for token change every 100ms
    const intervalId = setInterval(() => {
      const newToken = Cookies.get('token');
      if (newToken && !isLoggedIn) {
        setIsLoggedIn(true);
      } else if (!newToken && isLoggedIn) {
        setIsLoggedIn(false);
      }
    }, 100);
  
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoggedIn]);
    //showing the model when the user click on the book button without login
    const {show, setShow} = useAppContext();
    const handelClickLinkLogin = () => {
          setShow(!show); // Toggle the show state
    };
  return (
    <div className={`App ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <>
        {" "}
        <>{isLoggedIn ? <NavbarRegistered/> : <MainRegistered/>}</>
      </>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>invitationCards</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/invitationCards/img/Favicon.png"
      />
      <link
        rel="stylesheet"
        href="assets/index/css/Black-Navbar.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
      />

      <header
        className="masthead"
        style={{
          background:
            'url("assets/invitationCards/img/pexels-dominika-roseclay-3839686.jpg") center / cover no-repeat',
          height: "647.4px",
        }}
      >
        <div
          className="position-absolute"
          style={{
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "#212529",
            opacity: 0.5,
          }}
        />
        <div className="container">
          <div className="row ">
            <div className="col-md-10 col-lg-8 position-relative mx-auto ">
              <div
                className="site-heading"
                style={{ textAlign: "center", padding: "53px" }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "95px",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Invitation cards
                </h1>
                <span
                  className="subheading"
                  style={{
                    color: "white",
                    fontSize: "25px",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  Select Your Perfect Invitation Card
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="container-fluid"
        style={{ paddingTop: "1px", marginTop: "-85px" }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ marginTop: "100px" }}
        >
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-6">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/transform~rs_1200%20(2).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/transform~rs_1200%20(1)%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontFamily: '"Abhaya Libre", serif',
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Brilliant Blooms Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                A brilliant arrangement of bright blooms and greenery <br />
                decorates these eye-catching wedding invitations.
              </p>

              
              
              
                          {isLoggedIn ? (
              // If logged in, show the link to the cardCompColored page
              <Link
                href={{
                  pathname: "/cardCompColored",
                  query: { 
                    imageUrls: imageUrls1.join(","),
                    imageNames: name1.join(","),
                  },
                }}
              >
                <button
                  className="btn1 btn1-primary"
                  type="button"
                  onClick={handelClick1}
                  style={{
                    background: "#313987",
                    width: "145.406px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <strong>Take a look </strong>
                </button>
              </Link>
            ) : (
              // If not logged in, show a button that opens the Modal
              <button
                onClick={handelClickLinkLogin}
                className="btn1 btn1-primary"
                type="button"
                style={{
                  background: "#313987",
                  width: "145.406px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <strong>Take a look </strong>
              </button>
            )}






              
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-10">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/r%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/rr%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Versatile Vogue Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                Variety is the spice of love. This timeless wedding invitation
                <br />
                &nbsp;features a versatile blend of styles.
              </p>
              
              
                                {isLoggedIn ? (
                    // If logged in, show the link to the cardCompColored page
                    <Link
                      href={{
                        pathname: "/cardCompColored",
                        query: { 
                          imageUrls: imageUrls2.join(","),
                          imageNames: name2.join(","),
                        },
                      }}
                    >
                      <button
                        className="btn1 btn1-primary"
                        type="button"
                        onClick={handelClick2}
                        style={{
                          background: "#313987",
                          width: "145.406px",
                          borderRadius: "10px",
                          fontSize: "13px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        <strong>Take a look </strong>
                      </button>
                    </Link>
                  ) : (
                    // If not logged in, show a button that opens the Modal
                    <button
                      onClick={handelClickLinkLogin}
                      className="btn1 btn1-primary"
                      type="button"
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                  )}
                            
           
           
           
           
           
           
           
           
           
           
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/8%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/88%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontFamily: '"Abhaya Libre", serif',
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Painted Branch Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                A painted branch motif frames <br />
                the top of this wedding invitation.
              </p>
              
              
                              {isLoggedIn ? (
                  // If logged in, show the link to the cardCompColored page
                  <Link
                    href={{
                      pathname: "/cardCompColored",
                      query: { 
                        imageUrls: imageUrls3.join(","),
                        imageNames: name3.join(","),
                      },
                    }}
                  >
                    <button
                      className="btn1 btn1-primary"
                      type="button"
                      onClick={handelClick3}
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                  </Link>
                ) : (
                  // If not logged in, show a button that opens the Modal
                  <button
                    onClick={handelClickLinkLogin}
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                )}



            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-5">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/9%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/99%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontFamily: '"Abhaya Libre", serif',
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Rustic Emblem Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                Classic romance marries whimsical design in this
                <br />
                &nbsp;elegant wedding invitation
              </p>
             
             
             
             
             
                              {isLoggedIn ? (
                  // If logged in, show the link to the cardCompNoColored page
                  <Link
                    href={{
                      pathname: "/cardCompNoColored",
                      query: { 
                        imageUrls: imageUrls4.join(","),
                        imageNames: name4.join(","),
                      },
                    }}
                  >
                    <button
                      className="btn1 btn1-primary"
                      type="button"
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                  </Link>
                ) : (
                  // If not logged in, show a button that opens the Modal
                  <button
                    onClick={handelClickLinkLogin}
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                )}
            
            
            
            
            
            
            
            
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-9">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/111.jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/11%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Elegant Cursive Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                Stylish. Elegant. Enduring. Every wedding invitation should
                <br />
                &nbsp;set the right expectations for the magical day ahead
              </p>
      
                            {isLoggedIn ? (
                // If logged in, show the link to the cardCompNoColored page
                <Link
                  href={{
                    pathname: "/cardCompNoColored",
                    query: { 
                      imageUrls: imageUrls5.join(","),
                      imageNames: name5.join(","),
                    },
                  }}
                >
                  <button
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                </Link>
              ) : (
                // If not logged in, show a button that opens the Modal
                <button
                  onClick={handelClickLinkLogin}
                  className="btn1 btn1-primary"
                  type="button"
                  style={{
                    background: "#313987",
                    width: "145.406px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <strong>Take a look </strong>
                </button>
              )}



            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-1">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/4%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/44%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Delicate Embellishment Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                These simple yet elegant wedding invitations <br />
                should be just what you are looking for
              </p>
            
            
            
                            
                              {isLoggedIn ? (
                  // If logged in, show the link to the cardCompNoColored page
                  <Link
                    href={{
                      pathname: "/cardCompNoColored",
                      query: { 
                        imageUrls: imageUrls6.join(","),
                        imageNames: name6.join(","),
                      },
                    }}
                  >
                    <button
                      className="btn1 btn1-primary"
                      type="button"
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                  </Link>
                ) : (
                  // If not logged in, show a button that opens the Modal
                  <button
                    onClick={handelClickLinkLogin}
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                )}





            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a1212">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/6(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/66%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Winter Rustic Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                Rustic branches frame your wedding details <br />
                on this winter-inspired wedding invitation
              </p>
             
             
             
             
                          {isLoggedIn ? (
              // If logged in, show the link to the cardCompNoColored page
              <Link
                href={{
                  pathname: "/cardCompNoColored",
                  query: { 
                    imageUrls: imageUrls7.join(","),
                    imageNames: name7.join(","),
                  },
                }}
              >
                <button
                  className="btn1 btn1-primary"
                  type="button"
                  style={{
                    background: "#313987",
                    width: "145.406px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <strong>Take a look </strong>
                </button>
              </Link>
            ) : (
              // If not logged in, show a button that opens the Modal
              <button
                onClick={handelClickLinkLogin}
                className="btn1 btn1-primary"
                type="button"
                style={{
                  background: "#313987",
                  width: "145.406px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <strong>Take a look </strong>
              </button>
            )}





            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-2">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/10%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/1010%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Elegant Peony Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                This elegant wedding invitation design <br />
                features painted peonies decorating the card.
              </p>




                            {isLoggedIn ? (
                // If logged in, show the link to the cardCompNoColored page
                <Link
                  href={{
                    pathname: "/cardCompNoColored",
                    query: { 
                      imageUrls: imageUrls8.join(","),
                      imageNames: name8.join(","),
                    },
                  }}
                >
                  <button
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                </Link>
              ) : (
                // If not logged in, show a button that opens the Modal
                <button
                  onClick={handelClickLinkLogin}
                  className="btn1 btn1-primary"
                  type="button"
                  style={{
                    background: "#313987",
                    width: "145.406px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <strong>Take a look </strong>
                </button>
              )}






            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/7(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/77%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontFamily: '"Abhaya Libre", serif',
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Modern Calligraphy Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                his wedding invitation features the words <br />
                “we do” in modern calligraphy
              </p>
             
             
             
              
              
                              {isLoggedIn ? (
                  // If logged in, show the link to the cardCompNoColored page
                  <Link
                    href={{
                      pathname: "/cardCompNoColored",
                      query: { 
                        imageUrls: imageUrls9.join(","),
                        imageNames: name9.join(","),
                      },
                    }}
                  >
                    <button
                      className="btn1 btn1-primary"
                      type="button"
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                 
                 
                 
                  </Link>
                ) : (
                  // If not logged in, show a button that opens the Modal
                  <button
                    onClick={handelClickLinkLogin}
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                )}






            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-7">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/3%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/33%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Classic Bold Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                Featuring a traditional design with a touch of bold charm
                <br />
                &nbsp;this wedding invitation is ideal for those who appreciate
                classic style.
              </p>
           
           
           
                      
                          {isLoggedIn ? (
              // If logged in, show the link to the cardCompNoColored page
              <Link
                href={{
                  pathname: "/cardCompNoColored",
                  query: { 
                    imageUrls: imageUrls10.join(","),
                    imageNames: name10.join(","),
                  },
                }}
              >
                <button
                  className="btn1 btn1-primary"
                  type="button"
                  style={{
                    background: "#313987",
                    width: "145.406px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <strong>Take a look </strong>
                </button>
              </Link>
            ) : (
              // If not logged in, show a button that opens the Modal
              <button
                onClick={handelClickLinkLogin}
                className="btn1 btn1-primary"
                type="button"
                style={{
                  background: "#313987",
                  width: "145.406px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <strong>Take a look </strong>
              </button>
            )}






            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-8">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/2%20(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/22%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Traditional Landscape Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                This traditional wedding invitation is decorated with <br />a
                stylish venue illustration and showcases your details{" "}
              </p>
             
             
                            
                              {isLoggedIn ? (
                  // If logged in, show the link to the cardCompNoColored page
                  <Link
                    href={{
                      pathname: "/cardCompNoColored",
                      query: { 
                        imageUrls: imageUrls11.join(","),
                        imageNames: name11.join(","),
                      },
                    }}
                  >
                    <button
                      className="btn1 btn1-primary"
                      type="button"
                      style={{
                        background: "#313987",
                        width: "145.406px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <strong>Take a look </strong>
                    </button>
                  </Link>
                ) : (
                  // If not logged in, show a button that opens the Modal
                  <button
                    onClick={handelClickLinkLogin}
                    className="btn1 btn1-primary"
                    type="button"
                    style={{
                      background: "#313987",
                      width: "145.406px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <strong>Take a look </strong>
                  </button>
                )}




            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex justify-content-center" id="a-11">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="assets/invitationCards/img/5(1).jpg"
                      width="300px"
                      height="300px"
                      style={{ height: "450px", width: "350px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src="assets/invitationCards/img/1010%20(1).jpg"
                      style={{ width: "350px", height: "450px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "157px",
                textAlign: "center",
                marginLeft: "65px",
              }}
            >
              <h1
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "20px",
                  textShadow: "1px 1px 20px #313987",
                }}
              >
                <strong>Light Frame Wedding Invitations</strong>
              </h1>
              <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1vw" }}>
                When you find the right person, true love blooms. <br />
                Your initials, names, and wedding details are displayed in a
                classic font{" "}
              </p>
            
            
            
            
                                    {isLoggedIn ? (
                        // If logged in, show the link to the cardCompNoColored page
                        <Link
                          href={{
                            pathname: "/cardCompNoColored",
                            query: { 
                              imageUrls: imageUrls12.join(","),
                              imageNames: name12.join(","),
                            },
                          }}
                        >
                          <button
                            className="btn1 btn1-primary"
                            type="button"
                            style={{
                              background: "#313987",
                              width: "145.406px",
                              borderRadius: "10px",
                              fontSize: "13px",
                              fontFamily: "Roboto, sans-serif",
                            }}
                          >
                            <strong>Take a look </strong>
                          </button>
                        </Link>
                      ) : (
                        // If not logged in, show a button that opens the Modal
                        <button
                          onClick={handelClickLinkLogin}
                          className="btn1 btn1-primary"
                          type="button"
                          style={{
                            background: "#313987",
                            width: "145.406px",
                            borderRadius: "10px",
                            fontSize: "13px",
                            fontFamily: "Roboto, sans-serif",
                          }}
                        >
                          <strong>Take a look </strong>
                        </button>
                      )}




            </div>
          </div>
        </div>
      </div>
      <>
        <Footer />
      </>
    </div>
  );
}
export default InvitationCards;