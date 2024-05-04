"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../../../public/assets/cardCompNoColored/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import CardCompColoredHeadar from "../components/cardCompColoredHeadar";
import Threeimages from "../components/Threeimages";

function CardCompNoColored() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompNoColored/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////
 

  
  //using axios to fetch api
  const [theBride, setTheBride] = useState('');
  const [theGroom, setTheGroom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
   if (!theBride || !theGroom || !date || !time || !location || !notes) {
    alert("Please fill in all required fields");
  }
  else 
  alert("Your CARD has been added ,Explore your choice in the cart");

  try {
    const response = await axios.post('http://localhost:3000/cardCompNoColored', {
      theBride: theBride,
      theGroom: theGroom,
      date: date,
      time: time,
      location: location,
      notes: notes,
      
    });

    console.log(response.data);
    // Handle successful submission here
  } catch (error) {
    console.error(error);
    // Handle error here
  }
};
  return (
    <div>
             <> <NavbarRegistered/></>  

     
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>cardCompNoColored</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/cardCompNoColored/img/Favicon.png"
      />
      <link
        rel="stylesheet"
        href="assets/cardCompNoColored/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,600,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="assets/cardCompNoColored/css/navbar-logout.css"
      />
      <link rel="stylesheet" href="assets/cardCompNoColored/css/styles.css" />
      <div
        className="container-fluid"
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className="row">
          
          {/*Three images component*/}
         
          <>  <Threeimages/></>
         
         
         
         
          <div className="col-md-4">
            <div className="card position-sticky top-0 container">
              <div
                className="card-body"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
             
               
               
               
                  {/* import headear name component  */}
              <>  <CardCompColoredHeadar/></>
              



                {/*  card form 2 */}
                <form action="/cardCompNoColored" method="post"  onSubmit={handleSubmit}>
                  <div className="input-group" style={{ marginBottom: "5px" }}>
                    
                    
                    
                    {/* The bride INPUT*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="husband-name"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      The bride:&nbsp;
                    </label>
                    <input
                    name="theBride"
                    value={theBride}
                    onChange={(e) => setTheBride(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="husband-name"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  
                  
                  
                  <div
                    className="input-group"
                    style={{  marginBottom: "5px" }}
                  >


                    
                    
                    {/* The groom input*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="wife-name"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      The groom :&nbsp; &nbsp; &nbsp;&nbsp;
                    </label>
                    <input
                    name="theGroom"
                    value={theGroom}
                    onChange={(e) => setTheGroom(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="wife-name"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  <div
                    className="input-group"
                    style={{ marginBottom: "5px" }}
                  >




                    {/* Date input*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="date"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Date :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="date"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  <div
                    className="input-group"
                    style={{ marginBottom: "5px" }}
                  >



                    {/* Time input*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="time"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Time :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    </label>
                    <input
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="time"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  <div
                    className="input-group"
                    style={{  marginBottom: "5px" }}
                  >



                    {/* Location input*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="location"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Location :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="location"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  <div
                    className="input-group"
                    style={{  marginBottom: "5px" }}
                  >




                    {/* Notes input*/}
                    <label
                      className="form-label input-group-text form-label"
                      htmlFor="notes"
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Notes :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="notes"
                      required
                      style={{ height: "36.6px" }}
                    />
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <div
                    id="floating-label-1"
                    className="form-floating mb-3"
                    style={{ marginTop: "20px" }}
                   
                  >

                    {/* SELECT QUANTITY and PRICE  input*/}
                    <select className="form-select form-select form-select" id="floatinginput">
                      <option value={21}>25 items - 5.99$ </option>
                      <option value={21}>50 items - 10.99$ </option>
                      <option value={21}>75 items - 15.99$ </option>
                      <option value={21}>100 items -20.99$ </option>
                      <option value={21}>150 items - 25.99$ </option>
                      <option value={19}>200 items - 29.99$ </option>
                      <option value={91}>250 items - 34.99$ </option>
                      <option value={81}>300 items - 38.99$ </option>
                      <option value={71}>350 items - 42.99$ </option>
                      <option value={61}>400 items - 47.99$ </option>
                      <option value={15}>450 items - 52.99$</option>
                      <option value={14}>500 items - 57.99$</option>
                      <option value={13}>550 items - 60.99$</option>
                      <option value={12}>600 items - 62.99$</option>
                    </select>
                    <label
                      className="form-label form-label form-label form-label form-label"
                      id="floating-label-2"
                      htmlFor="floatinginput"
                    >
                      Quantity&amp;Price
                    </label>
                  </div>




                  <div style={{ textAlign: "center" }}>
                    
                    

                     {/* submit button (1)SEND TO CART COMPONENT:
                    A)CARD FRONT IMAGE
                    B)NAM OF THE CARD 
                    C)PRICE AND QUANTITY    
                    
                    2)SUBMIT DATA TO DATABASE)*/}
                    <input
                      className="btn btn-primary btn-submit"
                      type="submit"
                      style={{
                        width: "127.0469px",
                        height: "47px",
                        borderRadius: "12px",
                        marginBottom: "20px",
                        fontFamily: '"Abhaya Libre", serif',
                        fontSize: "22px",
                        

                      }}
                    
                      value="Add to cart"
                    />
                  </div>

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
                      
      <><Footer/></>
    </div>
  );
}
export default CardCompNoColored;
