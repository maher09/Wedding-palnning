"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/HairMakeup/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import MainRegistered from "../components/MainRegistered";
import Cookies from 'js-cookie';

function HairMakeup() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/HairMakeup/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  //using carsoul

  useEffect(() => {
    // Check if document is defined (ensuring we're on the client-side)
    if (typeof document !== "undefined") {
      const Carousel = require("bootstrap").Carousel;
      // Initialize each carousel individually
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((carouselElement) => {
        const carousel = new Carousel(carouselElement, {
          interval: 2000, // Set the interval (in milliseconds) between slides
        });

        // Cleanup when the component unmounts
        return () => {
          carousel.dispose();
        };
      });
    }
  }, []);
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
      <title>HairMakeup</title>
     
      
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
        href="assets/HairMakeup/fonts/font-awesome.min.css"
      />
      
   
 
      <link rel="stylesheet" href="/assets/HairMakeup/css/styles.css" />
 

      <div id="header">
        <div className="row">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div>
              <h1
                className="text-center"
                style={{
                  fontSize: "60px",
                  fontFamily: '"Abhaya Libre", serif',
                  textShadow: "1px 1px 20px",
                  height: "144px",
                }}
              >
                Premier Hair &amp; Makeup Elegance
              </h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <img
              className="rounded img-fluid"
              src="assets/HairMakeup/img/bg_directory-hero-wedding-beauty-health.jpg"
              alt="Hair & Makeup Image"
            />
          </div>
        </div>
      </div>
      <hr style={{ color: "#313987", marginTop: "-1px" }} />
      <div
        id="slider-salon"
        className="container"
        style={{ marginTop: "70px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-1"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%209.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon1-1.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%205.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%204.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-1"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-1"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-1"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-1"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-1"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-1"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Muna Al Sayyed
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                  height: "25px",
                }}
              >
                4.3 (131)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              We provide comprehensive event planning and creative direction
              from your engagement to your wedding day. We are based in New
              York, NY. Services include full-service Wedding Planning, Month
              Coordination, and Destination Weddings.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                href="https://maps.app.goo.gl/dd3NAcM8PZUZnHyB7"
                target="_blank"
                style={{ color: "rgb(49,57,135)" }}
                rel="tag"
                title="Proceed to Chosen Location"
              >
                Amman
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "37px",
              }}
            >
              Phone:
              <span style={{ fontSize: "32px", marginLeft: "11px" }}>
                0788888888
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="hr-slider" style={{ marginTop: "110px" }}>
        <hr className="container" />
      </div>
      <div
        id="slider-salon-1"
        className="container"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider-1">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-2"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/ha.webp"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/pexels-engin-akyurt-3331488.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2022.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/pexels-cottonbro-studio-3993465.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-2"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-2"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-2"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Oasis Beauty Lounge
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                }}
              >
                4.8(263)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              Nestled in a serene corner of the bustling city,&nbsp;is more than
              just a salon; it&apos;s a haven where women come to unwind,
              rejuvenate, and rediscover their radiance. As you enter our
              elegantly designed space, you&apos;re greeted by the soothing
              melodies and fragrant aromas that transport you into a world of
              tranquility.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
                color: "rgb(49, 57, 135)",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                target="_blank"
                href="https://maps.app.goo.gl/W3qn3v8rzXGGLfrL8"
                title="Proceed to Chosen Location"
              >
                <span style={{ color: "rgb(49, 57, 135)" }}>
                  Amman-Wasfi Altal .St
                </span>
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "27px",
              }}
            >
              Phone:
              <span style={{ fontSize: "27px", marginLeft: "11px" }}>
                0775056688
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="hr-slider-1" style={{ marginTop: "110px" }}>
        <hr className="container" />
      </div>
      <div
        id="slider-salon-2"
        className="container"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider-2">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-3"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%208.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%206.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%203.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2017.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-3"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-3"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-3"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-3"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-3"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-3"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Marwan Beauty Lounge
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                }}
              >
                4.4(867)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              Our team of skilled stylists and beauty professionals are
              dedicated to bringing out the best in you. Whether you are seeking
              a glamorous makeover for a special occasion or a simple refresh
              for your everyday look, we are here to fulfill your every beauty
              desire with precision and passion.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                target="_blank"
                href="https://maps.app.goo.gl/ysKo2aXCgFXVNeja6"
                title="Proceed to Chosen Location"
              >
                <span style={{ color: "rgb(49, 57, 135)" }}>
                  Amman-Hijaz .St
                </span>
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "27px",
              }}
            >
              Phone:
              <span style={{ fontSize: "32px", marginLeft: "11px" }}>
                0795489491
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="hr-slider-2" style={{ marginTop: "110px" }}>
        <hr className="container" />
      </div>
      <div
        id="slider-salon-3"
        className="container"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider-3">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-4"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2015.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2016.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2020.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2013.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-4"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-4"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-4"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-4"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-4"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-4"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Fabula beauty lounge
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                }}
              >
                4.1 (485)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              ndulge in a wide array of services tailored to pamper and enhance
              your natural beauty. From precision haircuts and expert color
              treatments to luxurious facials, rejuvenating massages, and
              meticulous nail care, we offer a comprehensive range of services
              to cater to your every need.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                target="_blank"
                href="https://maps.app.goo.gl/jW8VrCpKqgkG5Vao6"
                title="Proceed to Chosen Location"
              >
                <span style={{ color: "rgb(49, 57, 135)" }}>
                  Amman-Wasfi Altal .St
                </span>
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "27px",
              }}
            >
              Phone:
              <span style={{ fontSize: "32px", marginLeft: "11px" }}>
                0796387070
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="hr-slider-3" style={{ marginTop: "110px" }}>
        <hr className="container" />
      </div>
      <div
        id="slider-salon-4"
        className="container"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider-4">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-5"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2012.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2010.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2011.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2021.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-5"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-5"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-5"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-5"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-5"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-5"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Sabeen Beauty Center
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                }}
              >
                4.0 (752)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              At Sabeen Beauty Center, we believe in the power of personalized
              attention and tailor-made experiences. Our consultations are
              thorough and insightful, ensuring that every treatment is
              perfectly customized to complement your unique style, personality,
              and preferences.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                target="_blank"
                href="https://maps.app.goo.gl/DqfsBu6Ni3drr16r7"
                title="Proceed to Chosen Location"
              >
                <span style={{ color: "rgb(49, 57, 135)" }}>
                  Amman-Al sukkar Aladwan
                </span>
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "27px",
              }}
            >
              Phone:
              <span style={{ fontSize: "32px", marginLeft: "11px" }}>
                065544338
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div id="hr-slider-4" style={{ marginTop: "110px" }}>
        <hr className="container" />
      </div>
      <div
        id="slider-salon-5"
        className="container"
        style={{ marginTop: "40px" }}
      >
        <div className="row">
          <div className="col col--5">
            <div id="slider-5">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="carousel-6"
                data-bs-interval={2000}
              >
                <div
                  className="carousel-inner"
                  style={{
                    borderRadius: "36px",
                    border: "3px solid #313987",
                    boxShadow: "4px 4px 20px #313987",
                  }}
                >
                  <div className="carousel-item active">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2020.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/pexels-cottonbro-studio-3992875.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2025.jpg"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 d-block w-100 w-100"
                      alt="Slide Image"
                      src="assets/HairMakeup/img/saloon%2024.jpg"
                    />
                  </div>
                </div>
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-6"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span aria-hidden="true" />
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-6"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carousel-6"
                    data-bs-slide-to={0}
                    className="active"
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-6"
                    data-bs-slide-to={1}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-6"
                    data-bs-slide-to={2}
                  />{" "}
                  <button
                    type="button"
                    data-bs-target="#carousel-6"
                    data-bs-slide-to={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-7">
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "38px",
                marginTop: "26px",
              }}
            >
              Blue Shadow Salon
            </h1>
            <div className="d-flex" style={{ textAlign: "left" }}>
              <i
                className="fa fa-star"
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  color: "#fabb00",
                  marginTop: "2px",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  marginTop: "4px",
                  marginLeft: "6px",
                }}
              >
                4.8(764)&nbsp;
              </p>
            </div>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-21px",
              }}
            >
              <br />
              Step into our luxurious sanctuary and let us pamper you from head
              to toe. Whether you are treating yourself to a solo escape or
              celebrating a special occasion with your loved ones, Blue Shadow
              Salon
              <br />
              promises an unforgettable journey of beauty, relaxation, and
              empowerment.
            </p>
            <h1
              style={{
                textAlign: "left",
                fontFamily: '"Abhaya Libre", serif',
                fontSize: "29px",
              }}
            >
              Location :&nbsp;
              <a
                data-bs-toggle="tooltip"
                data-bss-tooltip
                data-bs-placement="right"
                target="_blank"
                href="https://maps.app.goo.gl/qqkm7u63BKzJNAJSA"
                title="Proceed to Chosen Location"
              >
                <span style={{ color: "rgb(49, 57, 135)" }}>
                  Amman-&nbsp;Yathrib.St
                </span>
              </a>
            </h1>
            <h1
              style={{
                fontFamily: '"Abhaya Libre", serif',
                textAlign: "left",
                fontSize: "27px",
              }}
            >
              Phone:
              <span style={{ fontSize: "32px", marginLeft: "11px" }}>
                0788192095
              </span>
            </h1>
          </div>
        </div>
      
      </div>
      
      <><Footer/></>
    </div>
    
  );
}
export default HairMakeup;
