"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cardCompColored/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/cardCompColored/css/styles.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import CardCompColoredHeadar from "../components/cardCompColoredHeadar";
import Threeimages from "../components/Threeimages";
function CardCompColored() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompColored/bootstrap/js/bootstrap.min.js");
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
      <title>cardCompColored</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/cardCompColored/img/Favicon.png"
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
         
            <>  <Threeimages/></>
         





          <div className="col-md-4">
            <div className="container card position-sticky top-0">
              <div
                className="card-body"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
           
              
              {/* import headear name component  */}
              <>  <CardCompColoredHeadar/></>



                    {/* card form 1  */}
                <form>
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
                      style={{ fontWeight: "bold", fontSize: "28px" }}
                      htmlFor="design"
                    >
                      Design color :
                    
                    
                    
                    {/* COLOR NAME empty span*/}
                      <span
                        id="compo-color"
                        style={{ fontSize: "23px" }}
                      ></span>
                    </label>
                    
                    {/* input hidden for color input name */}
                    <input
                      className="form-control form-control"
                      type="hidden"
                      id="design"
                      defaultValue=""
                    />
                  </div>




                  <div >
                    
                    
                
                
                {/* BUTTON 1 (white)*/}
                    <button
                      className="btn btn-primary btn-color"
                      id="btn5"
                      type="button"
                      style={{
                        borderRadius: "14px",
                        marginLeft: "26px",
                        background: "rgb(255,255,255)",
                      }}
                    />



                    {/* BUTTON 2 (red)*/}
                    <button
                      className="btn btn-primary btn-color"
                      type="button"
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
                    A)CARD FRONT IMAGE (with selected color)
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
                      defaultValue="Add to cart"
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
