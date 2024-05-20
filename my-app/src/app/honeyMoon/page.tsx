"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/honeyMoon/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import MainRegistered from "../components/MainRegistered";
import Cookies from 'js-cookie';

function HoneyMoon() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/honeyMoon/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  //import slider

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
  //import animation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("../../../public/assets/honeyMoon/css/aos.min.css");

      AOS.init();
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
    <>
        
        <>{isLoggedIn ? <NavbarRegistered/> : <MainRegistered/>}</>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>honeyMoon</title>
      <link
        rel="stylesheet"
        href="assets/index/css/Black-Navbar.css"
      />
      <link
        rel="stylesheet"
        href="assets/honeyMoon/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="assets/honeyMoon/fonts/font-awesome.min.css"
      />
      <link rel="stylesheet" href="assets/honeyMoon/css/aos.min.css" />
      <link rel="stylesheet" href="assets/honeyMoon/css/animate.min.css" />
      <link
        rel="stylesheet"
        href="assets/honeyMoon/css/best-carousel-slide.css"
      />
      <link rel="stylesheet" href="assets/honeyMoon/css/navbar-logout.css" />
      <link rel="stylesheet" href="assets/honeyMoon/css/Pretty-Footer-.css" />
      <link rel="stylesheet" href="assets/honeyMoon/css/styles.css" />
      <div id="header">
        <div className="row">
          <div
            className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center"
            style={{ height: "266.656px" }}
          >
            <div>
              <h1
                className="text-center mb-5"
                style={{
                  fontSize: "45px",
                  fontFamily: '"Abhaya Libre", serif',
                  color: "#313987",
                }}
              >
                Honeymoon destinations&nbsp;
              </h1>
              <h3
                className="text-center mb-0"
                style={{
                  fontSize: "36px",
                  fontFamily: '"Abhaya Libre", serif',
                  color: "#313987",
                }}
              >
                Most beautiful Honeymoon destinations&nbsp;&nbsp;
                <br />
                &nbsp; in the world
              </h3>
            </div>
          </div>
          <div className="col-md-12 col-lg-6" style={{ height: "266px" }}>
            <img
              className="rounded img-fluid"
              src="assets/honeyMoon/img/236-binh_dinh-trungsaoviet85@gmail.com-con_nguoi_va_bien_ca_0.jpg"
              alt="Travel Image"
              style={{ height: "266px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0px" }} />
      <div style={{ marginTop: "35px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            textShadow: "1px 1px 20px #313987",
            margin: "35px",
          }}
        >
         
Honeymoons blend cultural discoveries, breathtaking landscapes, 
and exhilarating adventures, igniting enduring wanderlust for newlyweds.
        </h1>
      </div>
      <div
        id="header-slider"
        className="container"
        style={{ marginTop: "-20px" }}
      >
        <div
          id="slider-salon"
          className="container"
          style={{ marginTop: "70px" }}
        >
          <div className="row">
            <div className="col col--5">
              <div
                className="d-flex justify-content-center align-items-center"
                id="slider"
                style={{ width: "903px", margin: "0px auto" }}
              >
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
                      boxShadow: "4px 4px 20px #000000",
                      border: "3px solid #000000",
                    }}
                  >
                    <div className="carousel-item active">
                      <img
                        className="w-100 d-block w-100 w-100"
                        alt="Slide Image"
                        src="assets/honeyMoon/img/pexels-oleksandr-p-2166553.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block"
                        alt="Slide Image"
                        src="assets/honeyMoon/img/pexels-pixabay-38238.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block w-100 w-100"
                        alt="Slide Image"
                        src="assets/honeyMoon/img/pexels-rachel-vine-2114206.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block w-100 w-100"
                        alt="Slide Image"
                        src="assets/honeyMoon/img/pexels-pawan-yadav-2577274.jpg"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100 d-block w-100 w-100"
                        alt="Slide Image"
                        src="assets/honeyMoon/img/pexels-riccardo-307008.jpg"
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
                    />{" "}
                    <button
                      type="button"
                      data-bs-target="#carousel-1"
                      data-bs-slide-to={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="container" style={{ marginTop: "33px" }} />
        </div>
      </div>
      <div id="places-1" className="container">
        <h1
          data-aos="fade-down"
          data-aos-duration={650}
          data-aos-once="true"
          style={{
            textAlign: "center",
            marginTop: "48px",
            fontFamily: '"Abhaya Libre", serif',
            fontSize: "49px",
          }}
        >
          Exquisite gems nestled within the Maldives
        </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-right"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/baa%20atoll.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div
                  className="card-body"
                  id="boddy"
                  style={{ background: "#f6f8f9", borderStyle: "none" }}
                >
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />{" "}
                    9.1/10 (412 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "31px",
                    }}
                  >
                    Baa Atoll
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                    }}
                  >
                    <strong>Location</strong>: Western Maldives
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Baa Atoll Maldivian paradise, pristine beaches, vibrant
                    marine life, UNESCO Biosphere Reserve, luxury resorts,
                    eco-tourism.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    id="baa-btn"
                    href="https://maps.app.goo.gl/dAkAaiBNucTiNsi86"
                    target="_blank"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-up"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-1"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/kaafu%20atoll.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />{" "}
                    8.9/10 (510 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Kaafu Atoll
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location:{" "}
                    <span style={{ fontWeight: "normal !important" }}>
                      Northern Maldives
                    </span>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Kaafu Atoll Maldives is tourist hotspot, luxury resorts,
                    vibrant marine life, pristine beaches, water sports,
                    tropical paradise.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    id="kaafu-btn"
                    href="https://maps.app.goo.gl/ssAHEMjHrCadJ1788"
                    target="_blank"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-left"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-2"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/fulhadhoo.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />{" "}
                    8.1/10 (210 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Fulhadhoo
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location:{" "}
                    <span style={{ fontWeight: "normal !important" }}>
                      Bajo Islands
                    </span>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Fulhadhoo Serene Maldivian island, pristine beaches, azure
                    waters, vibrant marine life, ideal for relaxation and water
                    sports.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    id="fulhadhoo-btn"
                    href="https://maps.app.goo.gl/fJWEYuh6nnn2BFiJA"
                    target="_blank"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="places-2" className="container">
        <h1
          data-aos="fade-down"
          data-aos-duration={650}
          data-aos-once="true"
          style={{
            textAlign: "center",
            marginTop: "70px",
            fontFamily: '"Abhaya Libre", serif',
            fontSize: "49px",
          }}
        >
          Exquisite gems nestled within&nbsp;
          <br />
          &nbsp;Italy
        </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-right"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-12"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/pexels-efrem-efre-18109526.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div
                  className="card-body"
                  id="boddy-1"
                  style={{ background: "#f6f8f9", borderStyle: "none" }}
                >
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />{" "}
                    8.6/10 (723 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "31px",
                    }}
                  >
                    Tower of Pisa
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                    }}
                  >
                    <strong>Location</strong>: Pisa
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Tower of Pisa: Iconic Italian landmark, known for its tilt,
                    architectural marvel, UNESCO World Heritage Site.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/f2NDHVZ3PwRYPWXd7"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-up"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-13"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/colosseum.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    8.2/10 (522 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Colosseum
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location:{" "}
                    <span style={{ fontWeight: "normal !important" }}>
                      Roma
                    </span>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    The Colosseum Ancient Roman amphitheater, iconic symbol of
                    Rome, historic arena, architectural masterpiece.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/giYTkuA2Sjqt4cXw9"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-left"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-14"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/Amalfi.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    9.1/10 (122reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Amalf
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location: Campania region
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Amalfi Coast Stunning Mediterranean coastline, picturesque
                    cliffs, colorful villages, crystal-clear waters, UNESCO
                    World Heritage Site.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/BJUXL9d8ywDrLh9s8"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="places-3" className="container">
        <h1
          data-aos="fade-down"
          data-aos-duration={650}
          data-aos-once="true"
          style={{
            textAlign: "center",
            marginTop: "70px",
            fontFamily: '"Abhaya Libre", serif',
            fontSize: "49px",
          }}
        >
          Exquisite gems nestled within&nbsp;&nbsp;
          <br />
          &nbsp;Jordan
        </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-right"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-3"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/pexels-andrea-imre-17472769.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div
                  className="card-body"
                  id="boddy-2"
                  style={{ background: "#f6f8f9", borderStyle: "none" }}
                >
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    9.8/10 (1170 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "32px",
                    }}
                  >
                    The pink city (Petra)
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                    }}
                  >
                    <strong>Location</strong>: Petra
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Petra&nbsp;Ancient Nabatean city, carved sandstone, UNESCO
                    site , Treasury, Siq, cultural heritage, Jordan.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/ad4ee9ykw8BPBxdA8"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-up"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-4"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/914a273dd911f047c4b3d26b1db865b8.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    8.1/10 (576 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Aqaba
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location:{" "}
                    <span style={{ fontWeight: "normal !important" }}>
                      Aqaba
                    </span>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Aqaba: Jordanian coastal city, Red Sea gem, vibrant marine
                    life, diving paradise, historical significance, picturesque
                    landscapes.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/jyEnvEG1G1PvVEtH8"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-left"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-5"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/wadi%20rum.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    9.0/10 (314 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Wadi Rum
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location: southern part of Jordan
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Wadi Rum: Majestic desert landscape, red sand dunes,
                    towering cliffs, Bedouin culture, starry skies, adventure
                    playground.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/n7FF1CphympTLFFi6"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="places-4" className="container">
        <h1
          data-aos="fade-down"
          data-aos-duration={650}
          data-aos-once="true"
          style={{
            textAlign: "center",
            marginTop: "70px",
            fontFamily: '"Abhaya Libre", serif',
            fontSize: "49px",
          }}
        >
          Exquisite gems nestled within&nbsp;
          <br />
          &nbsp;Egypt
        </h1>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-right"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-6"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/z_egyptnorthcoast-_4390.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div
                  className="card-body"
                  id="boddy-3"
                  style={{ background: "#f6f8f9", borderStyle: "none" }}
                >
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    8.4/10 (238 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "31px",
                    }}
                  >
                    North coast
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                    }}
                  >
                    <strong>Location</strong>: Western Egypt
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Egyptian Mediterranean shoreline, pristine beaches, luxury
                    resorts, summer destination, azure waters, vibrant
                    nightlife, coastal retreat.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/3ae5MF4BhSv1KG6w7"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-up"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-7"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/Giza%20Pyramids.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    8.0/10 (6110 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Pyramids of Giza
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location:{" "}
                    <span style={{ fontWeight: "normal !important" }}>
                      Giza
                    </span>
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Pyramids of Giza: Ancient marvels, iconic symbols of Egypt,
                    monumental tombs, UNESCO World Heritage Site, architectural
                    wonders.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/NPeTWFL1vAvQcyhQA"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card"
                data-aos="fade-left"
                data-aos-duration={650}
                data-aos-once="true"
                style={{ background: "#f6f8f9", borderStyle: "none" }}
              >
                <div
                  id="image-8"
                  className="card-img-top"
                  style={{
                    background:
                      'url("assets/honeyMoon/img/Sharm%20El-Shaikh.jpg") center / cover no-repeat',
                    height: "270px",
                    borderRadius: "35px",
                  }}
                />
                <div className="card-body" style={{ background: "#f6f8f9" }}>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="fa fa-star"
                      style={{ fontSize: "20px", color: "#fabb00" }}
                    />
                    7.8/10 (733 reviews)
                  </p>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "31px",
                      fontFamily: '"Abhaya Libre", serif',
                    }}
                  >
                    Sharm El-Sheikh
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Location: southern tip of the Sinai
                  </p>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#212529ca",
                      fontWeight: "bold",
                    }}
                  >
                    Sharm El-Sheikh: Red Sea paradise, world-class diving,
                    luxury resorts, vibrant nightlife, stunning beaches, desert
                    adventures, relaxation haven.
                  </p>
                  <a
                    className="btn btn-primary"
                    role="button"
                    data-bss-hover-animate="pulse"
                    style={{
                      background: "#313987",
                      width: "160.5px",
                      height: "42px",
                      borderRadius: "15px",
                    }}
                    href="https://maps.app.goo.gl/q5YEjwim3HLYHKrE7"
                    target="_blank"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <><Footer/></>
    
    </>
  );
}
export default HoneyMoon;
