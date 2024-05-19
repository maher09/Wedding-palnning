"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cart/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import Buycard from "../components/Buycard";
import Bookreservation from "../components/Bookreservation";
import NoItemsYet from "../components/noItemsYet";
import NoReservations from "../components/noReservations";
import { useAppContext } from '@/contextApi';

function Cart() {
 
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cart/bootstrap/js/bootstrap.min.js");
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
      <title>cart</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/cart/img/Favicon-1.png"
      />
      <link
        rel="stylesheet"
        href="assets/cart/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,600&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
      />
      <link rel="stylesheet" href="assets/cart/css/Black-Navbar.css" />
      <link rel="stylesheet" href="assets/cart/css/navbar-logout.css" />
      <link rel="stylesheet" href="assets/cart/css/Pretty-Footer-.css" />
      <link rel="stylesheet" href="assets/cart/css/styles.css" />
      <section style={{ height: "100px" }}>
        
        <p
          className="text-black"
          style={{
            fontSize: "12px",
            textAlign: "center",
            height: "51px",
            background: "rgb(195,199,243)",
          }}
        >
          <br />
          <span
            style={{
              fontWeight: "normal !important",
              color: "var(--varNeutralBlack)",
              backgroundColor: "var(--varPrimary200)",
            }}
          >
            Most orders are printed and shipped out within 4 business days once
            finalized.
          </span>
          <br />
          <br />
        </p>
      </section>

            
            
            {/* cart form */}
      <form action="/cart" method="post">
        <section className="container" style={{ height: "161px" }}>
          <h1
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontSize: "48px",
             
              color: "rgb(11,9,123)",
              borderStyle: "none",
            }}
          >
            Cart
          </h1>
        </section>
        <section
          style={{
            
            marginRight: "0px",
            marginTop: "-94px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col col-8" >
                <div>
                  <div className="table-responsive text-start">
                    <table className="table table-striped  table-hover">
                      <thead style={{ fontSize: "20px" }}>
                        <tr>
                          <th
                            style={{
                              textAlign: "left",
                              fontFamily: "Roboto, sans-serif",
                              background: "rgb(255,255,255)",
                            
                              width: "141.438px",
                            }}
                          >


                            {/* label for card front image  */}
                            <label className="form-label" htmlFor="card-name">
                              Card
                            </label>
                          
                          
                          
                          
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              fontFamily: "Roboto, sans-serif",
                              background: "rgb(255,255,255)",
                            
                              width: "236.281px",
                            }}
                          >


                          
                          {/* label for card name  */}
                            <label className="form-label" htmlFor="card-name">
                              Name
                            </label>
                          
                          
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                              fontFamily: "Roboto, sans-serif",
                             
                              fontWeight: "bold",
                              width: "227.578px",
                            }}
                          >
                          
                          {/* label for card  Price&Quantity  */}
                            <label className="form-label" htmlFor="card-price">
                              Price&Quantity
                            </label>


                          </th>
                          
                          <th
                            style={{
                              textAlign: "center",
                              fontFamily: "Roboto, sans-serif",
                              
                              width: "213.828px",
                              fontWeight: "bold",
                            }}
                          >

                            <span style={{ fontWeight: "normal !important" }}>
                              Remove
                            </span>


                          </th>
                        </tr>
                      </thead>
                      
                    
                    
                    
                    
                    {/*COMPONENT for NoItemsYet (to replace with cart component)*/}
                    <><Buycard /></>
                 
                            
                    
                    
                    
                    
                    </table>


                  </div>
                </div>
              </div>
              <div className="col col-md-2">
                <div
                  className="d-flex flex-column justify-content-around"
                  style={{
                    height: "300px",
                    background: "#ffffff",
                    width: "340px",
                    borderRadius: "22px",
                    border: "1px solid rgba(33,37,41,0.46)",
                    position: "static",
                    display: "block",
                    marginLeft: "97px",
                  }}
                >
                  <div style={{ marginLeft: "17px" }}>
                    
                    
                   {/* input+label for location   */}
                  <label
                      className="form-label  form-label"
                      htmlFor="location"
                      style={{
                        fontSize:"20px",
                        height: "38px",
                        width: "87.625px",
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Location:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                      className="form-control form-control"
                      type="text"
                      id="location"
                      required
                      style={{ height: "36.6px",
                      marginTop: "-16px", 
                      border: "1px solid #000000",
                      width: "95%"
                       }}
                    />



</div>



                  <div style={{ marginLeft: "17px" }}>
                  

                {/* input+label for phone   */}

                  <label
                      className="form-label  form-label"
                      htmlFor="phone"
                      style={{
                        fontSize:"20px",
                        height: "38px",
                        width: "70px",
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      phone:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                      className="form-control form-control"
                      type="text"
                      id="phone"
                      required
                      style={{ height: "36.6px", marginTop: "-16px",border: "1px solid #000000" ,
                        width: "95%"
                        }}
                    />


                  
                  
                  </div>
                 
                  {/* checkout cart (send data to database) */}
                  <input
                    className="btn btn-primary mt-3"
                    type="submit"
                    id="checkout-btn"
                    style={{
                      width: "148px",
                      marginLeft: "100px",
                      borderRadius: "10px",
                      height: "50px"
                    }}
                    value="Checkout"
                  />


                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container" style={{ marginTop: "-212px" }}>
          <h1
            style={{
              paddingTop: "200px",
              fontFamily: '"Abhaya Libre", serif',
              color: "#0b097b",
            }}
          >
            <strong>Reservations</strong>
          </h1>
        </div>
        <section
          className="container"
          style={{ marginTop: "-105px", marginBottom: "0px" }}
        >
          <section style={{ marginTop: "119px", marginBottom: "1px" }}>
            <div className="container">
              <div className="row">
                <div className="col col-8">
                  <div className="table-responsive ">
                    <table className="table">
                      <thead>
                        <tr>
                          <th
                            style={{ fontWeight: "bold", width: "319.516px" }}
                          >
                          
                            {/*  label for venue name */}
                            <label
                              className="form-label"
                              htmlFor="reservations-label"
                            >
                              <strong>Reservations</strong>
                          </label>
                          
                          
                          </th>
                          <th
                            style={{ width: "154.109px", textAlign: "center" }}
                          >

                        
                         {/*  label for venue price */}

                            <label
                              className="form-label"
                              htmlFor="price-res-label"
                            >
                              Price
                            </label>




                          </th>
                          <th
                            style={{ width: "150.953px", textAlign: "center" }}
                          >
                            
                            
                          {/*  label for venue date */}

                            <label className="form-label" htmlFor="date-label">
                              date
                            </label>



                          </th>
                          <th
                            style={{ width: "150.953px", textAlign: "center" }}
                          >
                            
                  {/*  label for venue time */}

                            <label className="form-label" htmlFor="time-label">
                              time
                            </label>



                          </th>
                          <th
                            style={{ width: "142.453px", textAlign: "center" }}
                          >
                            Remove
                          </th>
                        </tr>
                      </thead>
                      

                       
                    <tbody>
        {/*COMPONENT for NoReservations (to replace with cart component)*/}
                    <><Bookreservation/></>
                    
                    
                    
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </form>

      {/* footer component */}
      <><Footer/></>
    </div>
  );
}
export default Cart;