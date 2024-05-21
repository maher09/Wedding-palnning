"use client";
import React, { useEffect, useRef, useState,ChangeEvent } from "react";
import axios from 'axios';
import "../../../public/assets/cardCompColored/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/cardCompColored/css/styles.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import CardCompColoredHeadar from "../components/cardCompColoredHeadar";
import Threeimages from "../components/Threeimages";
import ThreeimagesColor from "../components/TreeimagesColor";
import { useSearchParams } from "next/navigation";
import Cookies from 'js-cookie';
import MainRegistered from "../components/MainRegistered";


import { useAppContext } from '@/contextApi';

function CardCompColored() {


   
  //searchparams
  ////////
  const searchParams = useSearchParams();
const imageUrls = searchParams.get("imageUrls")?.split(",") || [];

  //////////
  //searchparems
  const imageNames = searchParams.get("imageNames")?.split(",") || [];  ////////
  
  //////////
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompColored/bootstrap/js/bootstrap.min.js");
    }
  }, []);



  //using axios to fetch api
  const [theBride, setTheBride] = useState('');
  const [theGroom, setTheGroom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [designColor, setDesignColor] = useState('');



  //date and time and bride and groom  error message  
const [theBrideError, setTheBrideError] = useState('');
const [theGroomError, setTheGroomError] = useState('');
const [DateError, setDateError] = useState('');
const [TimeError, setTimeError] = useState('');
const {showBuyCart,setShowBuyCart} = useAppContext();
const { conterApp, setconterApp } = useAppContext();


const [showFirstComponent, setShowFirstComponent] = useState(true);
const [showSecondComponent, setshowSecondComponent] = useState(false);
const [font, setfont] = useState('darkgrey');
const [ Designcolor , setDesigncolor] = useState("white");

const handelClick = () => {

  setDesigncolor("White");
  setfont("#713737")
  setShowFirstComponent(true);

}

const handelClick2 = () => {
  setDesigncolor("Red");
  setShowFirstComponent(false); 
}



////////////////////////////////////////////////
///////////////////////////imagesNotColor////////////////////////


const [imageUrlsRed1, setImageUrlsRed1] = useState<string[]>([]);
const [imageUrlsRed2, setImageUrlsRed2] = useState<string[]>([]);
const [imageUrlsRed3, setImageUrlsRed3] = useState<string[]>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/redimages.json");
      const data = await response.json();

      setImageUrlsRed1([
        data.imageRed1[0].source,
        data.imageRed1[1].source,
        data.imageRed1[2].source,
      ]);

      setImageUrlsRed2([
        data.imageRed2[0].source,
        data.imageRed2[1].source,
        data.imageRed2[2].source,
      ]);

      setImageUrlsRed3([
        data.imageRed3[0].source,
        data.imageRed3[1].source,
        data.imageRed3[2].source,
      ]);
      
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  };

  fetchData();
}, []);




const {RedImgCounter,setRedImgCounter} = useAppContext();
let img;
if(RedImgCounter === 1){
  img = imageUrlsRed1;
}
else if(RedImgCounter === 2){
  img = imageUrlsRed2;
}
else{
  img = imageUrlsRed3;
}

  ////////////////////////////////////////////
const [selectedPrice, setSelectedPrice] = useState("25 items - 5.99$");
const handlePriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
  setSelectedPrice(event.target.value);
};

const {imgCart,setimgCart} = useAppContext(); 
const {nameCart,setnameCart} = useAppContext();
const {priceCart,setpriceCart} = useAppContext();




const handelClick3 = () => {
    

  if (showFirstComponent)  {
  setimgCart(imageUrls[1]);
  setnameCart(imageNames[0]);
  setpriceCart(selectedPrice);
} else {
  setimgCart(img[1]);
  setnameCart(imageNames[0]);
  setpriceCart(selectedPrice);
}
}


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false; // This flag will track if any errors occur during validation

  
  
  
  const DatePattern = /^(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d$/;
  const TimePattern = /^(0?[1-9]|1[0-2]):([0-5]\d)([-/])(0?[1-9]|1[0-2]):([0-5]\d)$/i;  
  const theBridePattern = /[a-zA-Z]/;
  const theGroomPattern = /[a-zA-Z]/;

  // Check if all fields are filled
  if (!theBride || !theGroom || !date || !time || !location || !notes) {
      alert("Please fill in all required fields");
      hasError = true; // Set hasError to true if a required field is missing

    } else if (!theBridePattern.test(theBride)) {
    setTheBrideError("Bride's name should only contain letters");
    hasError = true; // Set hasError to true if bride's name is invalid
} 
  else {
    setTheBrideError(''); 
  }
  
  if (!theGroomPattern.test(theGroom)) {
      setTheGroomError("Groom's name should only contain letters");
      hasError = true; // Set hasError to true if bride's name is invalid
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
      // If there's any error, exit the function
  if (hasError) {
    return; // Early exit if any validation failed
  }

      try {
        const response = await axios.post('http://localhost:3000/cardCompColored', {
          theBride: theBride,
          theGroom: theGroom,
          date: date,
          time: time,
          location: location,
          notes: notes,
          designColor: designColor,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        });

        console.log('Headers:', response.config.headers);// Log the headers
        console.log(response.data);
        
        //cart icon badge 
        setShowBuyCart(false);
        if (showBuyCart === true) {
          setconterApp(conterApp + 1);
        }
        alert("Your CARD has been added, Explore your choice in the cart");
        handelClick3();

        setTheBride('');
        setTheGroom('');
        setDate('');
        setTime('');
        setLocation('');
        setNotes('');
        setDesignColor('');
        // Handle successful submission here
      } catch (error) {
        console.error(error);
        // Handle error here
      }
    
  
};
///////////////////////////////////////






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
      <title>cardCompColored</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/cardCompColored/img/Favicon.png"
      />
         <link
        rel="stylesheet"
        href="assets/index/css/Black-Navbar.css"
      />  
      <link
        rel="stylesheet"
        href="assets/cardCompColored/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="assets/cardCompColored/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,600,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    
        <link rel="stylesheet" href="/assets/cardCompColored/css/styles.css" />

      <div
        className="container-fluid"
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className="row">
        

            {/*Three images component*/}
      
  
        

       

        {showFirstComponent ? (
          <Threeimages imageUrls={Array.isArray(imageUrls) ? imageUrls : []} />
          
          
        ) : (
          <ThreeimagesColor imageUrlsRed={Array.isArray(img) ? img : []} />
        )}

                









          <div className="col-md-4">
            <div className="container card position-sticky top-0">
              <div
                className="card-body"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
           
              
              {/* import headear name component  */}
              <CardCompColoredHeadar imageNames={imageNames} />


                    {/* card form 1  */}
                <form action="/cardCompColored" method="post" onSubmit={handleSubmit}>
                  <div className="input-group" style={{ marginBottom: "5px" }}>
                    
                    
                    {/* The bride input*/}
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




                    {/* Date input */}
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
                      / >
                      
               
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
                  <div>



                    {/* Design color input*/}
                    <label
                      className="form-label form-label"
                      style={{  fontSize: "28px" }}
                      htmlFor="design"
                    >
                      Design color : 
                    
                    
                    
                    {/* COLOR NAME empty span*/}
                      <span
                        id="compo-color"
                        style={{fontSize:"21px", color:'darkgrey'}}
                      >{Designcolor}</span>
                    </label>
                    
                    {/* input hidden for color input name */}
                    <input
                      name="designColor"
                      value={designColor} 
                      onChange={(e) => setDesignColor(e.target.value)}
                      className="form-control form-control"
                      type="hidden"
                      id="design"


                    />
                  </div>




                  <div >
                    
                    
                
                
                {/* BUTTON 1 (white)*/}
             
             
                    <button
                      className="btn btn-primary btn-color"
                      id="btn5"
                      type="button"
                      onClick={handelClick}
                      style={{
                        borderRadius: "14px",
                        marginLeft: "26px",
                        background: "rgb(230,227,211)",
                        
                      }}
                    />
                   
                    
                    



                    {/* BUTTON 2 (red)*/}
                            
               
                    <button
                      role="radio"
                      aria-checked="true"
                      data-state="checked"
                      className="btn  btn-color active"
                      type="button"
                      onClick={handelClick2}
                      style={{
                        borderRadius: "14px",
                        marginLeft: "17px",
                        background: "#872c21",

                      }}
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
                    A)CARD FRONT IMAGE (with selected color)
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
export default CardCompColored;
