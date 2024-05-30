"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../public/assets/cart/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Footer from "../components/Footer";
import NavbarRegistered from "../components/NavbarRegistered";
import Buycard from "../components/Buycard";
import Bookreservation from "../components/Bookreservation";
import NoItemsYet from "../components/noItemsYet";
import NoReservations from "../components/noReservations";

import MainRegistered from "../components/MainRegistered";
import Cookies from "js-cookie";

import { useAppContext } from "@/contextApi";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

function Cart() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cart/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { showFirstComponent, setShowFirstComponent } = useAppContext();
  const { showBuyCart, setShowBuyCart } = useAppContext();
  useEffect(() => {
    // Update isLoggedIn after the component has mounted
    setIsLoggedIn(!!Cookies.get("token"));

    // Check for token change every 100ms
    const intervalId = setInterval(() => {
      const newToken = Cookies.get("token");
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

  /////////////////////////////////////////////////
  //using axios to fetch api

  //CARD VALUES
  const { nameCart, setnameCart } = useAppContext();
  const { priceCart, setpriceCart } = useAppContext();

  const [cardName, setcardName] = useState("");
  const [cardQuantityAndPrice, setcardQuantityAndPrice] = useState("");

  //BOOKRESERVATION VALUES
  const { name, setname } = useAppContext();
  const { price, setprice } = useAppContext();
  const { day, setday } = useAppContext();
  const { month, setmonth } = useAppContext();
  const { year, setyear } = useAppContext();
  const { timee, settimee } = useAppContext();

  ////////

  ////
  const [venueName, setvenueName] = useState("");
  const [venuePrice, setvenuePrice] = useState("");
  const [venueDate, setvenueDate] = useState("");
  const [venueTime, setvenueTime] = useState("");

  const [userLocation, setuserLocation] = useState("");
  const [userPhone, setuserPhone] = useState("");

  const { conterApp, setconterApp } = useAppContext();

  ///////////////////////////////////////////////////
  const handelClickCheckout = () => {
    setShowBuyCart(true);
    setShowFirstComponent(true);
    setconterApp(null);
    setnameCart("");
    setpriceCart("");
    setname("");
    setprice("");
    setday("");
    setmonth("");
    setyear("");
    settimee("");
    setuserLocation("");
    setuserPhone("");
  };

  const [CheckoutError, setCheckoutError] = useState("");
  const [phoneError, setphoneError] = useState("");

  const token = Cookies.get("token");
  // Extract the user's TheGroom and TheBride name from the JWT token
  const { Email = "" } = token ? JSON.parse(atob(token.split(".")[1])) : {};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false; // This flag will track if any errors occur during validation
    const phonePattern = /^\+?[0-9]+$/;

    


    if (showFirstComponent == true && showBuyCart == true) {
      setCheckoutError("Please add at least one item to your cart");
      hasError = true; // Set hasError to true if bride's name is invalid
    }
    if (!phonePattern.test(userPhone)) {
      setphoneError("Please enter a valid phone number");
      hasError = true; // Set hasError to true if phone is invalid
    } else {
      setphoneError(""); // Reset phone error message
    }

    if (hasError) {
      return; // Early exit if any validation failed
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/cart",
        {
          userEmail: Email,
          cardName: nameCart,
          cardQuantityAndPrice: priceCart,
          venueName: name,
          venuePrice: price,
          venueDate: `${day}-${month}-${year}`,
          venueTime: timee,
          userLocation: userLocation,
          userPhone: userPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      console.log("Headers:", response.config.headers); // Log the headers
      console.log(response.data);
      handelClickCheckout();
      alert("CHECKOUT SUCCESSFUL!");

      // Handle successful submission here
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <div>
      <>{isLoggedIn ? <NavbarRegistered /> : <MainRegistered />}</>

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
      <link rel="stylesheet" href="assets/index/css/Black-Navbar.css" />
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
      <form action="/cart" method="post" onSubmit={handleSubmit}>
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
              <div className="col col-8">
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
                            {/* INPUT HIDDEN FOR USER EMAIL  */}
                            <input
                              name="userEmail"
                              defaultValue={Email}
                              type="hidden"
                              id="user-email"
                            />

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
                            {/* input hidden card name */}
                            <input
                              name="cardName"
                              value={nameCart}
                              onChange={(e) => setcardName(e.target.value)}
                              type="hidden"
                              id="card-name"
                            />
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
                            {/* input hidden card Quantity&Price */}
                            <input
                              name="cardQuantityAndPrice"
                              value={priceCart}
                              onChange={(e) =>
                                setcardQuantityAndPrice(e.target.value)
                              }
                              type="hidden"
                              id="card-price"
                            />
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
                      {showBuyCart ? (
                        <>
                          <NoItemsYet />
                        </>
                      ) : (
                        <>
                          <Buycard />
                        </>
                      )}
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
                        fontSize: "20px",
                        height: "38px",
                        width: "87.625px",
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Location:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <input
                      name="userLocation"
                      value={userLocation}
                      onChange={(e) => setuserLocation(e.target.value)}
                      className="form-control form-control"
                      type="text"
                      id="location"
                      required
                      style={{
                        height: "36.6px",
                        marginTop: "-16px",
                        border: "1px solid #000000",
                        width: "95%",
                      }}
                    />
                  </div>

                  <div style={{ marginLeft: "17px" }}>
                    {/* input+label for phone   */}

                    <label
                      className="form-label  form-label "
                      htmlFor="phone"
                      style={{
                        fontSize: "20px",
                        height: "38px",
                        width: "70px",
                        fontWeight: "bold",
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      phone:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </label>
                    <div className="input-group">
                      <PhoneInput
                        country={"jo"}
                        value={userPhone}
                        onChange={(phone) => setuserPhone(phone)}
                        inputStyle={{
                          height: "36.6px",
                          marginTop: "-16px",
                          border: "1px solid #000000",
                          width: "95%",
                        }}
                        containerStyle={{ width: "100%" }}
                        inputClass="form-control"
                      />
                      {phoneError && (
                        <div
                          className="text-danger"
                          style={{ fontSize: "14px", textAlign: "center" }}
                        >
                          {phoneError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {/* checkout cart (send data to database) */}
                    <input
                      className="btn btn-primary mt-3"
                      type="submit"
                      id="checkout-btn"
                      style={{
                        width: "148px",
                        marginLeft: "100px",
                        borderRadius: "10px",
                        height: "50px",
                      }}
                      value="Checkout"
                    />
                    {CheckoutError && (
                      <div
                        className="text-danger"
                        style={{ fontSize: "14px", textAlign: "center" }}
                      >
                        {CheckoutError}
                      </div>
                    )}
                  </div>
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

                            {/* input hidden venue name */}
                            <input
                              name="venueName"
                              value={name}
                              onChange={(e) => setvenueName(e.target.value)}
                              type="hidden"
                              id="reservations-label"
                            />
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

                            {/* input hidden venue price */}
                            <input
                              name="venuePrice"
                              value={price}
                              onChange={(e) => setvenuePrice(e.target.value)}
                              type="hidden"
                              id="price-res-label"
                            />
                          </th>
                          <th
                            style={{ width: "150.953px", textAlign: "center" }}
                          >
                            {/*  label for venue date */}

                            <label className="form-label" htmlFor="date-label">
                              date
                            </label>

                            {/* input hidden date of venue */}
                            <input
                              name="venueDate"
                              value={`${day}-${month}-${year}`}
                              onChange={(e) => setvenueDate(e.target.value)}
                              type="hidden"
                              id="date-label"
                            />
                          </th>
                          <th
                            style={{ width: "150.953px", textAlign: "center" }}
                          >
                            {/*  label for venue time */}

                            <label className="form-label" htmlFor="time-label">
                              time
                            </label>

                            {/* input hidden time of venue */}
                            <input
                              name="venueTime"
                              value={timee}
                              onChange={(e) => setvenueTime(e.target.value)}
                              type="hidden"
                              id="time-label"
                            />
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
                        {showFirstComponent ? (
                          <>
                            <NoReservations />
                          </>
                        ) : (
                          <>
                            <Bookreservation />
                          </>
                        )}
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
      <>
        <Footer />
      </>
    </div>
  );
}
export default Cart;
