"use client";
import React, { useEffect, useState } from 'react';
import '../../../public/assets/venue/bootstrap/css/bootstrap.min.css';
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";


 function Venue() {

    //funtion for alert 
    function myFunction() {
        alert("Your reservation confirmed ,Explore your choice in the cart");
      }

    //import bootstrap javascript 
useEffect(() => {
    if (typeof window !== 'undefined') {
        require('../../../public/assets/venue/bootstrap/js/bootstrap.min.js');
        
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
          interval: 2500, // Set the interval (in milliseconds) between slides
        });

        // Cleanup when the component unmounts
        return () => {
          carousel.dispose();
        };
      });
    }
  }, []);
  /////////////////


  return (
    <div>
          <> <NavbarRegistered/></>  

    
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
    />
    <title>venue</title>
    <link
      rel="icon"
      type="image/png"
      sizes="202x153"
      href="assets/venue/img/Favicon.png"
    />
    <link rel="stylesheet" href="assets/venue/bootstrap/css/bootstrap.min.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
    />
    <link rel="stylesheet" href="assets/venue/css/navbar-logout.css" />
    <link rel="stylesheet" href="assets/venue/css/Pretty-Footer-.css" />
    <header
      className="d-flex masthead"
      style={{
        background:
          'url("assets/venue/img/pexels-antony-trivet-13644697.jpg") center / cover no-repeat',
        height: "647.4px",
      }}
    >
      <div className="container my-auto text-center">
        <h1 className="mb-1" style={{ color: "rgb(255,255,255)" }}>
          venues
        </h1>
        <h3 className="mb-5" style={{ marginTop: "37px" }}>
          <em style={{ color: "rgb(255,255,255)" }}>
            Begin Your Quest to Find the Perfect Dream Venue
          </em>
        </h3>
        <div className="overlay" />
      </div>
    </header>
    <section
      id="contact"
      className="map"
      style={{ height: "89px", marginTop: "-34px" }}
    />
    <div id="slider-1" className="container" style={{ width: "54%" }}>
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
              boxShadow: "4px 4px 20px #000000",
              border: "3px solid #000000",
            }}
          >
            <div className="carousel-item active">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/67131039_2352517368397013_2166542943333122048_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                alt="Slide Image"
                src="assets/venue/img/67238109_2352517218397028_261488578326953984_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/67269560_2352517005063716_445999475714949120_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/67339987_2352517111730372_822199822994898944_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/67404373_2352516901730393_1462875219751337984_n.jpg"
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
    <div style={{ textAlign: "center", marginTop: "17px" }}>
      <h1 style={{ fontFamily: '"Abhaya Libre", serif', fontSize: "67px" }}>
        Lujain Wedding Venue
      </h1>
      <div>
        <p style={{ fontSize: "17px" }}>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32 576 576"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ color: "#fabb00", marginBottom: "6px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          &nbsp;9.1/10 (481)&nbsp;
          <a
            data-bs-toggle="tooltip"
            data-bss-tooltip
            data-bs-placement="right"
            href="https://maps.app.goo.gl/RH78XGSyyhAtscG46"
            target="_blank"
            title="Proceed to Chosen Location"
          >
            Amman- Al-Shahid St
          </a>
          &nbsp;
        </p>
      </div>
      <div>
        <span
          style={{
            fontSize: "53px",
            fontWeight: "bold",
            fontFamily: '"Abhaya Libre", serif',
          }}
        >
          &nbsp;Price : 3000
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-currency-dollar"
            style={{ color: "rgb(19,135,38)", width: "41px" }}
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
        </span>
      </div>
      <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        This sleek and modern venue boasts a sense of elegance that couples
        <br />
        &nbsp;and their guests will appreciate. beautifully detailed flooring
        <br />
        &nbsp;and stunning&nbsp;skyline make a romantic, unforgettable
        evening.
      </p>
      
      
      
      
    
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "25px", height: "38.2px", marginLeft: "22px" }}
      >
       
       
       
       
       
{/* select the date for  venue reserviration*/}
        <select className="display-inline-block">
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2025</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            January
          </option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>







        


      </div>
   





      <div className="d-flex justify-content-center">
        <div>
          
          
          
          {/* set time for venue reserviration */}
          <input
            type="radio"
            id="radio-1"
            style={{ width: "25px", height: "24px", marginRight: "7px" }}
            name="radio-1"
          />
          <label
            className="form-label"
            htmlFor="radio-1"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            5:00-8:00
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-2"
            style={{ width: "25px", height: "25px", marginRight: "7px" }}
            name="radio-1"
          />
          <label
            className="form-label"
            htmlFor="radio-2"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
            }}
          >
            9:00-12:00
          </label>




        </div>
      </div>
      
      
      

      {/* book venue reserviration  button */}
      <button
          className="btn btn-primary"
          type="button"
          style={{
              width: "149px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "8px",
              background: "rgb(109,65,181)",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "15px",
          }}
          onClick={myFunction}
      >
        {" "}
        Book venue
      </button>










    </div>
    <div className="container">
      <hr style={{ marginTop: "68px" }} />
    </div>
    <div
      id="slider-2"
      className="container"
      style={{ width: "54%", marginTop: "81px" }}
    >
      <div id="slider-3">
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
              boxShadow: "4px 4px 20px #000000",
              border: "3px solid #000000",
            }}
          >
            <div className="carousel-item active">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/281543944_5390283644326766_8833335931753295431_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                alt="Slide Image"
                src="assets/venue/img/53739889_2376906858997808_8792556232603860992_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/55656612_2376908402330987_2554423690397745152_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/54525230_2376908058997688_4754855343035514880_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/67328759_2583340501687775_359547925849702400_n-1.jpg"
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
            />{" "}
            <button
              type="button"
              data-bs-target="#carousel-2"
              data-bs-slide-to={4}
            />
          </div>
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: "44px" }}>
      <h1 style={{ fontFamily: '"Abhaya Libre", serif', fontSize: "67px" }}>
        Nayrouz Wedding Venue
      </h1>
      <div>
        <p style={{ fontSize: "17px" }}>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32 576 576"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ color: "#fabb00", marginBottom: "6px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          &nbsp;8.2/10 (564)&nbsp;
          <a
            data-bs-toggle="tooltip"
            data-bss-tooltip
            data-bs-placement="right"
            href="https://maps.app.goo.gl/m1WHXqgyjTkH962WA"
            target="_blank"
            title="Proceed to Chosen Location"
          >
            Amman- Talaa Al-Ali
          </a>
          &nbsp;
        </p>
      </div>
      <div>
        <span
          style={{
            fontSize: "53px",
            fontWeight: "bold",
            fontFamily: '"Abhaya Libre", serif',
          }}
        >
          &nbsp;Price : 1000
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-currency-dollar"
            style={{ color: "rgb(19,135,38)", width: "41px" }}
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
        </span>
      </div>
      <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        An exquisite venue where dreams materialize, blending elegance,
        opulence, <br />
        and exceptional service for unforgettable celebrations.
        <br />
        &quot;Splendid venue, elegance, opulence, and top-notch service create
      </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "25px", height: "38.2px", marginLeft: "22px" }}
      >
        
        
        
        {/* select the date for  venue reserviration*/}
       
        <select className="display-inline-block">
       
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2025</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            January
          </option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>
        



      </div>
      <div className="d-flex justify-content-center">
        <div>
          
           
           
           
           {/* set time for venue reserviration */}
          <input
            type="radio"
            id="radio-3"
            style={{ width: "25px", height: "24px", marginRight: "7px" }}
            name="radio-2"
          />
        
          <label
            className="form-label"
            htmlFor="radio-3"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            5:00-8:00
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-4"
            style={{ width: "25px", height: "25px", marginRight: "7px" }}
            name="radio-2"
          />
          <label
            className="form-label"
            htmlFor="radio-4"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
            }}
          >
            9:00-12:00
          </label>




        </div>
      </div>
      

       
       
       {/* book venue reserviration  button */}
      <button
          className="btn btn-primary"
          type="button"
          style={{
              width: "149px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "8px",
              background: "rgb(109,65,181)",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "15px",
          }}
          onClick={myFunction}
      >
        {" "}
        Book venue
      </button>








    </div>
    <div className="container">
      <hr style={{ marginTop: "67px" }} />
    </div>
    <div
      id="slider-6"
      className="container"
      style={{ width: "54%", marginTop: "81px" }}
    >
      <div id="slider-7">
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
              boxShadow: "4px 4px 20px #000000",
              border: "3px solid #000000",
            }}
          >
            <div className="carousel-item active">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/360138548_693088756178701_2743552918627612162_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                alt="Slide Image"
                src="assets/venue/img/436340076_856031086551133_8993236776964068610_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/436275348_856031019884473_2230444367751140395_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/436261988_856031316551110_2203471491642850469_n.jpg"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/384763371_737513905069519_3282332032410812073_n.jpg"
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
            />{" "}
            <button
              type="button"
              data-bs-target="#carousel-4"
              data-bs-slide-to={4}
            />
          </div>
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: "44px" }}>
      <h1 style={{ fontFamily: '"Abhaya Libre", serif', fontSize: "67px" }}>
        Lotus Wedding Venue
      </h1>
      <div>
        <p style={{ fontSize: "17px" }}>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32 576 576"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ color: "#fabb00", marginBottom: "6px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          &nbsp;7.9/10 (853)&nbsp;
          <a
            data-bs-toggle="tooltip"
            data-bss-tooltip
            data-bs-placement="right"
            href="https://maps.app.goo.gl/Yo9Hn5JvYBtq6Mxo7"
            target="_blank"
            title="Proceed to Chosen Location"
          >
            Amman- ST-Radio
          </a>
          &nbsp;
        </p>
      </div>
      <div>
        <span
          style={{
            fontSize: "53px",
            fontWeight: "bold",
            fontFamily: '"Abhaya Libre", serif',
          }}
        >
          &nbsp;Price : 2000
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-currency-dollar"
            style={{ color: "rgb(19,135,38)", width: "41px" }}
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
        </span>
      </div>
      <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        He was the magician of celebrations, combining elegance,
        <br />
        &nbsp;luxury and exceptional service, ensuring to bring <br />
        the most beautiful memories to weddings and special occasions.
      </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "25px", height: "38.2px", marginLeft: "22px" }}
      >


        {/* select the date for  venue reserviration*/}
        <select className="display-inline-block">
         
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2025</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            January
          </option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>





      </div>
      <div className="d-flex justify-content-center">
        <div>
        
        
         {/* set time for venue reserviration */}
          <input
            type="radio"
            id="radio-5"
            style={{ width: "25px", height: "24px", marginRight: "7px" }}
            name="radio-3"
          />
          <label
            className="form-label"
            htmlFor="radio-5"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            5:00-8:00
          </label>
          
        </div>
        <div>
          <input
            type="radio"
            id="radio-6"
            style={{ width: "25px", height: "25px", marginRight: "7px" }}
            name="radio-3"
          />
          <label
            className="form-label"
            htmlFor="radio-6"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
            }}
          >
            9:00-12:00
          </label>






        </div>
      </div>
     
     
      {/* book venue reserviration  button */}
      <button
          className="btn btn-primary"
          type="button"
          style={{
              width: "149px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "8px",
              background: "rgb(109,65,181)",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "15px",
          }}
          onClick={myFunction}
      >
        {" "}
        Book venue
      </button>







    </div>
    <div className="container">
      <hr style={{ marginTop: "84px" }} />
    </div>
    <div
      id="slider-8"
      className="container"
      style={{ width: "54%", marginTop: "81px" }}
    >
      <div id="slider-9">
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
              boxShadow: "4px 4px 20px #000000",
              border: "3px solid #000000",
            }}
          >
            <div className="carousel-item active">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/reception-white-setup_51_301051.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block"
                alt="Slide Image"
                src="assets/venue/img/reception-pink-orchids_51_301051.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/reception-gold-oval-table-1_51_301051.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/louis-a-buffet_51_301051.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/cocktail-setup-1_51_301051.webp"
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
            />{" "}
            <button
              type="button"
              data-bs-target="#carousel-5"
              data-bs-slide-to={4}
            />
          </div>
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: "44px" }}>
      <h1 style={{ fontFamily: '"Abhaya Libre", serif', fontSize: "67px" }}>
        Royal Wedding Venue
      </h1>
      <div>
        <p style={{ fontSize: "17px" }}>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32 576 576"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ color: "#fabb00", marginBottom: "6px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          &nbsp;9.4/10 (847)&nbsp;
          <a
            data-bs-toggle="tooltip"
            data-bss-tooltip
            data-bs-placement="right"
            href="https://maps.app.goo.gl/KLSdsGhipKvZwZn7A"
            target="_blank"
            title="Proceed to Chosen Location"
          >
            Amman- Zahran St
          </a>
          &nbsp;
        </p>
      </div>
      <div>
        <span
          style={{
            fontSize: "53px",
            fontWeight: "bold",
            fontFamily: '"Abhaya Libre", serif',
          }}
        >
          &nbsp;Price : 3000
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-currency-dollar"
            style={{ color: "rgb(19,135,38)", width: "41px" }}
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
        </span>
      </div>
      <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        The ideal wedding hall, superior beauty, sophisticated design, <br />
        and exceptional service. An unforgettable experience for the newlyweds
        <br />
        &nbsp;and their guests, fulfilling the dreams of the perfect
        wedding&nbsp;
      </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "25px", height: "38.2px", marginLeft: "22px" }}
      >
        
        
        
        
        {/* select the date for  venue reserviration*/}
        <select className="display-inline-block">
        
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2025</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            January
          </option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>




      </div>
      <div className="d-flex justify-content-center">
        <div>
        
        
         
         
         {/* set time for venue reserviration */}
          <input
            type="radio"
            id="radio-7"
            style={{ width: "25px", height: "24px", marginRight: "7px" }}
            name="radio-4"
          />
          <label
            className="form-label"
            htmlFor="radio-7"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            5:00-8:00
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-8"
            style={{ width: "25px", height: "25px", marginRight: "7px" }}
            name="radio-4"
          />
          <label
            className="form-label"
            htmlFor="radio-8"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
            }}
          >
            9:00-12:00
          </label>
        
        
        
        
        
        
        
        
        </div>
      </div>
      
      
      
       {/* book venue reserviration  button */}
      <button
          className="btn btn-primary"
          type="button"
          style={{
              width: "149px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "8px",
              background: "rgb(109,65,181)",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "15px",
          }}
          onClick={myFunction}
      >
        {" "}
        Book venue
      </button>








    </div>
    <div className="container">
      <hr style={{ marginTop: "84px" }} />
    </div>
    <div
      id="slider-4"
      className="container"
      style={{ width: "54%", marginTop: "81px" }}
    >
      <div id="slider-5">
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
              boxShadow: "4px 4px 20px #000000",
              border: "3px solid #000000",
            }}
          >
            <div className="carousel-item active">
              <img
                className="w-100 d-block"
                alt="Slide Image"
                src="assets/venue/img/2-4-24-alecmichele-wedding-146_51_2159275-170965977165192.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/2-4-24-alecmichele-wedding-150_51_2159275-170965977186425.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/2-4-24-alecmichele-wedding-052_51_2159275-170965977335915.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/2-4-24-alecmichele-wedding-257_51_2159275-170965977180680.webp"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 d-block w-100 w-100"
                alt="Slide Image"
                src="assets/venue/img/9-9-4-22-wedding-109_51_2159275-170023504765502.webp"
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
            />{" "}
            <button
              type="button"
              data-bs-target="#carousel-3"
              data-bs-slide-to={4}
            />
          </div>
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center", marginTop: "44px" }}>
      <h1 style={{ fontFamily: '"Abhaya Libre", serif', fontSize: "67px" }}>
        Kebpinski Wedding Venue
      </h1>
      <div>
        <p style={{ fontSize: "17px" }}>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -32 576 576"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{ color: "#fabb00", marginBottom: "6px" }}
          >
            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          &nbsp;9.0/10 (768)&nbsp;
          <a
            data-bs-toggle="tooltip"
            data-bss-tooltip
            data-bs-placement="right"
            href="https://maps.app.goo.gl/qBDreeAUnjVKGtV59"
            target="_blank"
            title="Proceed to Chosen Location"
          >
            Amman-Abdul Hamid Shouman St
          </a>
          &nbsp;
        </p>
      </div>
      <div>
        <span
          style={{
            fontSize: "53px",
            fontWeight: "bold",
            fontFamily: '"Abhaya Libre", serif',
          }}
        >
          &nbsp;Price : 2600
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-currency-dollar"
            style={{ color: "rgb(19,135,38)", width: "41px" }}
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
        </span>
      </div>
      <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "30px" }}>
        A luxurious hall with wonderful design and distinguished service.
        <br />
        &nbsp;A professional team ensures the details of the ceremony
        accurately,
        <br />
        &nbsp;creating unforgettable moments for the newlyweds and their dear
        guests.
      </p>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "25px", height: "38.2px", marginLeft: "22px" }}
      >
        
        
        
       
       
        
        {/* select the date for  venue reserviration*/}
        <select className="display-inline-block">
        
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2025</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            January
          </option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="display-inline-block">
          <option value={1} >
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>







      </div>
      <div className="d-flex justify-content-center">
        <div>
        
        
         
         
         {/* set time for venue reserviration */}
          <input
            type="radio"
            id="radio-9"
            style={{ width: "25px", height: "24px", marginRight: "7px" }}
            name="radio-5"
          />
          <label
            className="form-label"
            htmlFor="radio-9"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            5:00-8:00
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-10"
            style={{ width: "25px", height: "25px", marginRight: "7px" }}
            name="radio-5"
          />
          <label
            className="form-label"
            htmlFor="radio-10"
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "37px",
              fontWeight: "bold",
            }}
          >
            9:00-12:00
          </label>
        
        
        
        
        
        
        
        </div>
      </div>
      
      
      
      
      
       {/* book venue reserviration  button */}
      <button
          className="btn btn-primary"
          type="button"
          style={{
              width: "149px",
              height: "50px",
              marginLeft: "30px",
              borderRadius: "8px",
              background: "rgb(109,65,181)",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontSize: "15px",
          }}
          onClick={myFunction}
      >
        {" "}
        Book venue
      </button>







    </div>
    <><Footer/></>
  </div>
  );
}
export default Venue;