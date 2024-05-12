"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/checkList/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import NavbarRegistered from "../components/NavbarRegistered";
import Footer from "../components/Footer";
import Checked from "../components/Checked";
import { text } from "stream/consumers";

function CheckList() {
  
  const [counters, setCounters] = useState([0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0, 0, 0,0]); // One counter for each SVG
  const [isChecked, setIsChecked] = useState([false, false, false,]);
  const [width, setWidth] = useState("0%");
  var counterr=0;

  const handleToggle = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newChecked[index] ? prevCounters[index] + 1 : prevCounters[index] - 1;
      return newCounters;
    });
  };
  for(let i=0;i<counters.length;i++){
    if(counters[i]===1){
      counterr++;
     
      

    }
  }

  console.log(counterr);
  
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
        &nbsp;You have completed &nbsp;

        {/* span for number of tasks completed*/}
        <span id="zero-span">{counterr} </span> 
        
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
            style={{ width: counterr*4.54545454545455 + "%"}}
          >
            {(counterr*4.5)+1}%          




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
                <Checked index={0} isChecked={isChecked[0]} onChange={handleToggle} />
      
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

                <Checked index={1} isChecked={isChecked[1]} onChange={handleToggle} />
     

                  
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
              
                  <Checked index={2} isChecked={isChecked[2]} onChange={handleToggle} />
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
                  <Checked index={3} isChecked={isChecked[3]} onChange={handleToggle} />
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
                 <Checked index={4} isChecked={isChecked[4]} onChange={handleToggle} />
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
                  <Checked index={5} isChecked={isChecked[5]} onChange={handleToggle} />
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
                  <Checked index={6} isChecked={isChecked[6]} onChange={handleToggle} />
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
                  <Checked index={7} isChecked={isChecked[7]} onChange={handleToggle} />
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
                  <Checked index={8} isChecked={isChecked[8]} onChange={handleToggle} />
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
                  <Checked index={9} isChecked={isChecked[9]} onChange={handleToggle} />
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
                  <Checked index={10} isChecked={isChecked[10]} onChange={handleToggle} />
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
                  <Checked index={11} isChecked={isChecked[11]} onChange={handleToggle} />
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
                  <Checked index={12} isChecked={isChecked[12]} onChange={handleToggle} />
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
                  <Checked index={13} isChecked={isChecked[13]} onChange={handleToggle} />
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
                  <Checked index={14} isChecked={isChecked[14]} onChange={handleToggle} />
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
               <Checked index={15} isChecked={isChecked[15]} onChange={handleToggle} />
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
                  <Checked index={16} isChecked={isChecked[16]} onChange={handleToggle} />
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
                  <Checked index={17} isChecked={isChecked[17]} onChange={handleToggle} />
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
                  <Checked index={18} isChecked={isChecked[18]} onChange={handleToggle} />
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
                  <Checked index={19} isChecked={isChecked[19]} onChange={handleToggle} />
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
                  <Checked index={20} isChecked={isChecked[20]} onChange={handleToggle} />
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
                  <Checked index={21} isChecked={isChecked[21]} onChange={handleToggle} />
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

