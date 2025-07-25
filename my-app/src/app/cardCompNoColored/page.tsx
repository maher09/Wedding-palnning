"use client";
import React, { useEffect, useState, ChangeEvent} from "react";
import axios from 'axios';
import "../../../public/assets/cardCompNoColored/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import CardCompColoredHeadar from "../components/cardCompColoredHeadar";
import Threeimages from "../components/Threeimages";
import { useSearchParams } from "next/navigation";
import { cookies } from "next/headers";
import Cookies from 'js-cookie';
import MainRegistered from "../components/MainRegistered";
import { useAppContext } from '@/contextApi';
function CardCompNoColored() {
    //searchparems
  ////////
  const searchParams = useSearchParams();
const imageUrls = searchParams.get("imageUrls")?.split(",") || [];
const imageNames = searchParams.get("imageNames")?.split(",") || [];  ////////

  //////////
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
  
  const {showBuyCart,setShowBuyCart} = useAppContext();
  const { conterApp, setconterApp } = useAppContext();


   //date and time and bride and groom  error message  
const [theBrideError, setTheBrideError] = useState('');
const [theGroomError, setTheGroomError] = useState('');
const [DateError, setDateError] = useState('');
const [TimeError, setTimeError] = useState('');
  
const [selectedPrice, setSelectedPrice] = useState("25 items - 5.99$");
  const handlePriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

const {imgCart,setimgCart} = useAppContext(); 
const {nameCart,setnameCart} = useAppContext();
const {priceCart,setpriceCart} = useAppContext();

const handelClick3 = () => {
  setimgCart(imageUrls[1]);
  setnameCart(imageNames[0]);
  setpriceCart(selectedPrice);

  }



  const token = Cookies.get("token");
  // Extract the user's TheGroom and TheBride name from the JWT token
  const { Email = "" } = token ? JSON.parse(atob(token.split(".")[1])) : {};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false; // This flag will track if any errors occur during validation

    

  


    const DatePattern = /^\s*(0?[1-9]|[12][0-9]|3[01])\s*[- /.]\s*(0?[1-9]|1[012])\s*[- /.]\s*(19|20)\d\d\s*$/;
    const TimePattern = /^\s*(0?[1-9]|1[0-2])\s*:\s*([0-5]\d)\s*[-/]\s*(0?[1-9]|1[0-2])\s*:\s*([0-5]\d)\s*$/i;
    const theBridePattern = /[a-zA-Z]/;
    const theGroomPattern = /[a-zA-Z]/;
      // Check if all fields are filled
  if (!theBride || !theGroom || !date || !time || !location || !notes) {
    alert("Please fill in all required fields");
    hasError = true;

  } else if (!theBridePattern.test(theBride)) {
    setTheBrideError("Bride's name should only contain letters");
    hasError = true;
  } 
  else {
    setTheBrideError(''); 
  }
  
  if (!theGroomPattern.test(theGroom)) {
      setTheGroomError("Groom's name should only contain letters");
      hasError = true;
  }
  else {
    setTheGroomError('');  }

    if (!DatePattern.test(date)) {
      setDateError("Date format is wrong");
      hasError = true; // Set hasError to true if bride's name is invalid

  } else {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight
    const formattedDate = date.replace(/\//g, '-');
    const [day, month, year] = formattedDate.split('-');
    
    const inputDate = new Date(`${year}-${month}-${day}`);
    if (inputDate < currentDate) {
      setDateError("Date is in the past");
      hasError = true; // Set hasError to true if bride's name is invalid

    } 
    else {
      setDateError(""); // Reset date error message
    }
  }
      if (!TimePattern.test(time)) {
      setTimeError("Time is wrong must be like this 8:00-10:00");
      hasError = true; // Set hasError to true if bride's name is invalid

    }else {
      setTimeError('');
    }
    if (hasError) {
      return;
    }


  try {
    const response = await axios.post('http://localhost:3000/cardCompNoColored', {
      userEmail: Email,
      theBride: theBride,
      theGroom: theGroom,
      date: date,
      time: time,
      location: location,
      notes: notes,
    },{
      
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    }
  
  
  );
  console.log('Headers:', response.config.headers); // Log the headers
    console.log(response.data);
    
    //cart icon badge 
    setShowBuyCart(false);
    if (showBuyCart === true) {
      setconterApp(conterApp + 1);
    }
    handelClick3();
    alert("Your CARD has been added, Explore your choice in the cart");

    setTheBride('');
    setTheGroom('');
    setDate('');
    setTime('');
    setLocation('');
    setNotes('');
    // Handle successful submission here
  } catch (error) {
    console.error(error);
    // Handle error here
  }

  
};





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
      <title>cardCompNoColored</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/cardCompNoColored/img/Favicon.png"
      />
      <link
        rel="stylesheet"
        href="assets/index/css/Black-Navbar.css"
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
         
          <><Threeimages imageUrls={Array.isArray(imageUrls) ? imageUrls : []}/></>
         
         
         
         
          <div className="col-md-4">
            <div className="card position-sticky top-0 container">
              <div
                className="card-body"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
             
               
               
               
                  {/* import headear name component  */}
                  <CardCompColoredHeadar imageNames={imageNames} />
              



                {/*  card form 2 */}
                <form action="/cardCompNoColored" method="post"  onSubmit={handleSubmit}>
                  <div className="input-group" style={{ marginBottom: "5px" }}>
                
                
                {/* INPUT HIDDEN FOR USER EMAIL  */}
                    <input
                      name="userEmail"
                      defaultValue={Email}
                      type="hidden"
                      id="user-email"
                    />
                    
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
                  {theBrideError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {theBrideError} 
          </div>
           )}
                  
                  
                  
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
                  {theGroomError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {theGroomError} 
          </div>
           )}
                  <div
                    className="input-group"
                   
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
                  {DateError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {DateError} 
          </div>
           )}


                  <div
                    className="input-group"
                    
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

                  {TimeError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {TimeError} 
          </div>
           )}

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
                    <select className="form-select form-select form-select" id="floatinginput"value={selectedPrice} onChange={handlePriceChange}>
                      <option value={"25 items - 5.99"}>25 items - 5.99$ </option>
                      <option value={"50 items - 10.99"}>50 items - 10.99$ </option>
                      <option value={"75 items - 15.99"}>75 items - 15.99$ </option>
                      <option value={"100 items -20.99"}>100 items -20.99$ </option>
                      <option value={"150 items - 25.99$"}>150 items - 25.99$ </option>
                      <option value={"200 items - 29.99$"}>200 items - 29.99$ </option>
                      <option value={"250 items - 34.99$"}>250 items - 34.99$ </option>
                      <option value={"300 items - 38.99$"}>300 items - 38.99$ </option>
                      <option value={"350 items - 42.99$"}>350 items - 42.99$ </option>
                      <option value={"400 items - 47.99$"}>400 items - 47.99$ </option>
                      <option value={"450 items - 52.99$"}>450 items - 52.99$</option>
                      <option value={"500 items - 57.99$"}>500 items - 57.99$</option>
                      <option value={"550 items - 60.99$"}>550 items - 60.99$</option>
                      <option value={"600 items - 62.99$"}>600 items - 62.99$</option>
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
                      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleSubmit}
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
