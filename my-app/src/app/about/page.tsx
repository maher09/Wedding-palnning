"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/aboutUs/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import MainRegistered from "../components/MainRegistered";
import Cookies from 'js-cookie';

function AboutUs() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/aboutUs/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  //for animation import
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("../../../public/assets/aboutUs/css/aos.min.css");

      AOS.init();
    }
  }, []);
  ////////////
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

  return (
    <div>
      <>{isLoggedIn ? <NavbarRegistered/> : <MainRegistered/>}</>
      
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>AboutUs</title>
    
      <link
        rel="stylesheet"
        href="assets/aboutUs/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="assets/aboutUs/fonts/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="assets/aboutUs/css/aos.min.css" />
      <link rel="stylesheet" href="assets/aboutUs/css/navbar-logout.css" />
      <link rel="stylesheet" href="assets/aboutUs/css/Pretty-Footer-.css" />
      <link
        rel="stylesheet"
        href="assets/aboutUs/css/Responsive-UI-Card-02.css"
      />
      <link rel="stylesheet" href="assets/aboutUs/css/styles.css" />
      <div className="d-flex justify-content-center" id="logo-img">
        <img
          src="assets/aboutUs/img/JUAR-removebg-preview.png"
          style={{ width: "300px" }}
        />
      </div>
      <div id="About-us" style={{ marginTop: "-49px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                data-aos="fade-right"
                data-aos-duration={1750}
                id="about-img1"
                src="assets/aboutUs/img/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg"
                style={{ width: "660px", borderRadius: "31px" }}
              />
            </div>
            <div
              className="col"
              data-aos="fade-left"
              data-aos-duration={750}
              data-aos-delay={900}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: '"Abhaya Libre", serif',
                }}
              >
                Who We Are
              </h1>
              <p
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "21px",
                  color: "rgb(0,0,0)",
                  textAlign: "center",
                }}
              >
                <br />
                Welcome to JUAR, where dreams come true and love blossoms into a
                lifelong journey.
                <br />
                <br />
                At JUAR, our vision is to create a celebration that reflects
                your unique love story throughout the smallest details
                effortlessly
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div
                className="col"
                data-aos="fade-right"
                data-aos-duration={750}
                data-aos-delay={900}
                data-aos-once="true"
              >
                <h1
                  style={{
                    textAlign: "center",
                    marginTop: "27px",
                    fontFamily: '"Abhaya Libre", serif',
                  }}
                >
                  Our website
                </h1>
                <p
                  style={{
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "21px",
                    marginTop: "42px",
                    textAlign: "center",
                  }}
                >
                  We aim to help create your dream wedding with easy steps with
                  perfect results
                  <br /> of that journey unforgettable because we offer you
                  venues&nbsp;
                  <br />
                  and comprehensive planning resources
                  <br />
                  <br /> and Personalized planning tools and Endless
                  inspiration&nbsp;
                  <br />
                  and Tourist sites for honeymoon and more
                </p>
              </div>
              <div className="col">
                <div style={{ marginRight: "-25px" }}>
                  <img
                    data-aos="fade-left"
                    data-aos-duration={1750}
                    data-aos-once="true"
                    src="assets/aboutUs/img/pexels-emma-bauso-3585798.jpg"
                    style={{ width: "660px", borderRadius: "28px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="personal-card">
        <section style={{ marginTop: "-129px" }}>
          <h1
            data-aos="fade-down"
            data-aos-duration={750}
            data-aos-once="true"
            style={{
              marginTop: "188px",
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "72px",
              marginBottom: "18px",
            }}
          >
            Our Team
          </h1>
          <div className="container">
            <div className="row">
              <div
                data-aos="fade-right"
                data-aos-duration={750}
                data-aos-once="true"
                className="col-md-4"
              >
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <div className="ripple-cont" />
                    <img
                      className="img-fluid img"
                      style={{ height: "482.712px" }}
                      src="assets/aboutUs/img/huasm-1.jpg"
                      width={326}
                      height={489}
                    />
                  </div>
                  <div className="blog-table" style={{ textAlign: "center" }}>
                    <h4
                      className="blog-card-caption"
                      style={{
                        margin: "-31px 0px 8px",
                        marginBottom: "-6px",
                        marginTop: "26px",
                      }}
                    >
                      <a href="#">Husam Aboalhoos</a>
                    </h4>
                    <div className="ftr">
                      <div className="author">
                        <a
                          href="https://www.facebook.com/husam.aboalhoos.5"
                          target="_blank"
                        >
                          <i
                            className="fab fa-facebook-square"
                            style={{ fontSize: "42px" }}
                          />
                        </a>
                      </div>
                      <div className="author">
                        <a
                          target="_blank"
                          href="https://www.instagram.com/x_.r__x_h/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-32 0 512 512"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            style={{
                              fontSize: "42px",
                              marginLeft: "17px",
                              marginRight: "17px",
                              marginBottom: "23px",
                              color: "rgb(171,88,210)",
                            }}
                          >
                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </div>
                      <div className="author">
                        <a
                          href="https://github.com/husamaboalhoos"
                          target="_blank"
                        >
                          <i
                            className="fab fa-github"
                            style={{ fontSize: "42px", color: "rgb(0,0,0)" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
                className="col-md-4"
              >
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <div className="ripple-cont" />
                    <img
                      className="img-fluid img"
                      src="assets/aboutUs/img/zaid-1.jpg"
                      width={326}
                      height={489}
                      style={{ height: "482.712px" }}
                    />
                  </div>
                  <div className="blog-table" style={{ textAlign: "center" }}>
                    <h4
                      className="blog-card-caption"
                      style={{
                        margin: "-31px 0px 8px",
                        marginBottom: "-6px",
                        marginTop: "-1px",
                      }}
                    >
                      <a href="#">
                        <br />
                        Zaid Saeed
                      </a>
                    </h4>
                    <div className="ftr">
                      <div className="author">
                        <a
                          href="https://www.facebook.com/zaid.sieed.5"
                          target="_blank"
                        >
                          <i
                            className="fab fa-facebook-square"
                            style={{ fontSize: "42px" }}
                          />
                        </a>
                      </div>
                      <div className="author">
                        <a
                          href="https://www.instagram.com/zaids2/"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-32 0 512 512"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            style={{
                              fontSize: "42px",
                              marginLeft: "17px",
                              marginRight: "17px",
                              marginBottom: "23px",
                              color: "rgb(171,88,210)",
                            }}
                          >
                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </div>
                      <div className="author">
                        <a href="https://github.com/Zaids2" target="_blank">
                          <i
                            className="fab fa-github"
                            style={{ fontSize: "42px", color: "rgb(0,0,0)" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration={750}
                data-aos-once="true"
                className="col-md-4"
              >
                <div className="blog-card blog-card-blog">
                  <div className="blog-card-image">
                    <div className="ripple-cont" />
                    <img
                      className="img-fluid img"
                      src="assets/aboutUs/img/fayz2.jpg"
                      width={326}
                      height={489}
                      style={{ height: "482.712px" }}
                    />
                  </div>
                  <div className="blog-table" style={{ textAlign: "center" }}>
                    <h4
                      className="blog-card-caption"
                      style={{
                        margin: "-31px 0px 8px",
                        marginBottom: "-6px",
                        marginTop: "-1px",
                      }}
                    >
                      <a href="#">
                        <br />
                        Fayez Alabadi
                      </a>
                    </h4>
                    <div className="ftr">
                      <div className="author">
                        <a
                          href="https://www.facebook.com/faeyz.salaheen"
                          target="_blank"
                        >
                          <i
                            className="fab fa-facebook-square"
                            style={{ fontSize: "42px" }}
                          />
                        </a>
                      </div>
                      <div className="author">
                        <a
                          href="https://www.instagram.com/ffaaeyzz/"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-32 0 512 512"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            style={{
                              fontSize: "42px",
                              marginLeft: "17px",
                              marginRight: "17px",
                              marginBottom: "23px",
                              color: "rgb(171,88,210)",
                            }}
                          >
                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </div>
                      <div className="author">
                        <a href="https://github.com/Zaids2" target="_blank">
                          <i
                            className="fab fa-github"
                            style={{ fontSize: "42px", color: "rgb(0,0,0)" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      <><Footer/></>
    </div>
  );
}
export default AboutUs;
