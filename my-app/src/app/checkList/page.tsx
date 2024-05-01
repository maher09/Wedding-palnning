"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/checkList/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import NavbarRegistered from "../components/NavbarRegistered";
import Footer from "../components/Footer";

function CheckList() {
  
  
    //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/checkList/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

 

  
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
  
    // Function to create a new list item
    const newElement = () => {
      if (inputValue === '') {
        alert("You must write something!");
        return;
      }
  
      setItems([...items, inputValue]);
      setInputValue('');
    };
  
    // Function to remove a list item
    const removeItem = (index: number) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  
  
  return (
    <div>
    
    
    
    <> <NavbarRegistered/></>  

   


      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>checkList</title>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/checkList/img/Favicon.png"
      />
      <link
        rel="stylesheet"
        href="assets/checkList/bootstrap/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,500,600,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <link rel="stylesheet" href="assets/checkList/css/styles.css" />
      <h1
        style={{
          textAlign: "center",
          marginTop: "58px",
          fontSize: "38px",
          fontFamily: '"Abhaya Libre", serif',
          fontWeight: "bold",
        }}
      >
        &nbsp;You have completed&nbsp;

        {/* span for number of tasks completed*/}
        <span id="zero-span"></span> 
        
        of 22 tasks
      </h1>
      <div
        className="d-flex justify-content-center container"
        style={{ textAlign: "justify" }}
      >
       
       
        <div
          className="progress beautiful"
          style={{
            width: "516px",
            textAlign: "justify",
            height: "22px",
            borderRadius: "13px",
            background: "rgb(207,215,222)",
            fontFamily: '"Abhaya Libre", serif',
            fontSize: "19px",
            fontWeight: "bold",
          }}
        >
         
         
         {/* width of progress bar to change */}
          <div
            className="progress-bar bg-success progress-bar-striped progress-bar-animated"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            // width of progress bar to change
            style={{ width: "" }}
          >
            




          </div>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: "65px", width: "1100px" }}>
        <div
          className="table-responsive table-bordered"
          style={{ marginBottom: "93px" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "center",
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "42px",
                    color: "#313987",
                  }}
                >
                  &nbsp;12 months to go
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{
                      fontSize: "34px",
                      marginRight: "10px",
                      background: "#f4f0f8",
                    }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Announce your wedding.
                </td>
              </tr>
              <tr style={{ background: "#f4f0f8" }}>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Set a wedding budget.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Find and hire your wedding planner.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Choose your wedding date.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "42px",
                    color: "#313987",
                  }}
                >
                  <strong>&nbsp;6 months to go</strong>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Start creating your guest list.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Decide on your color scheme.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Choose wedding rings.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Order free invitation card samples.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "42px",
                    color: "#313987",
                  }}
                >
                  <strong>&nbsp;3 months to go</strong>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Find and order your wedding look.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>{" "}
                  Find and hire your DJ.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>{" "}
                  Finalize your guest list.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Order your wedding invitations.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Book your wedding venue.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "42px",
                    color: "#313987",
                  }}
                >
                  <strong>&nbsp;1 month to go</strong>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Start planning your honeymoon.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Hire your videographer.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Hire a hair and makeup stylist.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Get your marriage license.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Book your wedding cake.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    fontFamily: '"Abhaya Libre", serif',
                    fontSize: "42px",
                    color: "#313987",
                  }}
                >
                  <strong>&nbsp;1 week to go</strong>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Book your wedding flowers.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Confirm final details with your vendors.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Purchase gifts for your wedding party.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    background: "#f4f0f8",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="icon-hov"
                    style={{ fontSize: "34px", marginRight: "10px" }}
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                  Order outfits for your wedding party.
                </td>
              </tr>
            </tbody>
          </table>
          <div id="myDIV" className="header ">
      <h2 style={{ margin: '5px' }}>My To Do List</h2>
      <input
      className="input"
        type="text"
        id="myInput"
        placeholder="Title..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span onClick={newElement} className="addBtn">Add</span>

      <ul id="myUL" className="style-1 style-2 style-3 style-4 style-5 style-6">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => removeItem(index)} className="close">&times;</span>
          </li>
        ))}
      </ul>
    </div>

        </div>
        
      </div>
      <><Footer/></>
    </div>
  );
}
export default CheckList;

