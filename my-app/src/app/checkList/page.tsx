"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/checkList/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import NavbarRegistered from "../components/NavbarRegistered";
import Footer from "../components/Footer";
import Checked from "../components/Checked";
import MainRegistered from "../components/MainRegistered";

import Cookies from 'js-cookie';

function CheckList() {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [tasks, setTasks] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    return [];
  });

  const [isChecked, setIsChecked] = useState<boolean[]>(() => {
    if (typeof window !== 'undefined') {
      const savedChecked = localStorage.getItem('isChecked');
      return savedChecked ? JSON.parse(savedChecked) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isChecked', JSON.stringify(isChecked));
    }
  }, [isChecked]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCheckedState = JSON.parse(localStorage.getItem('checkedState') || '[]');
      setIsChecked(savedCheckedState);
    }
  }, []);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    setIsChecked([...isChecked, false]);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    const newChecked = isChecked.filter((_, i) => i !== index);
    setTasks(newTasks);
    setIsChecked(newChecked);
  };

  const handleToggle = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkedState', JSON.stringify(newChecked));
    }

    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newChecked[index] ? prevCounters[index] + 1 : prevCounters[index] - 1;
      return newCounters;
    });
  };

  let counterr = isChecked.filter((checked) => checked).length;

  // Import bootstrap javascript
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('../../../public/assets/checkList/bootstrap/js/bootstrap.min.js');
    }
  }, []);

  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const newElement = () => {
    if (inputValue === '') {
      alert("You must write something!");
      return;
    }
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = Cookies.get('token');
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    const intervalId = setInterval(checkLoginStatus, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <>{isLoggedIn ? <NavbarRegistered /> : <MainRegistered />}</>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>checkList</title>
      <link
        rel="stylesheet"
        href="assets/index/css/Black-Navbar.css"
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
      <link
        rel="stylesheet"
        href="assets/index/bootstrap/css/bootstrap.min.css"
      />

      <h1
        style={{
          textAlign: "center",
          marginTop: "58px",
          fontSize: "38px",
          fontFamily: '"Abhaya Libre", serif',
          fontWeight: "bold",
          color: "black"
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
          <div
            className="progress-bar bg-success progress-bar-striped progress-bar-animated"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: counterr * 4.54545454545455 + "%" }}
          >
            {(counterr * 4.5) + 1}%
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "65px", width: "1100px" }}>
        <div
          className="table-responsive table-bordered"
          style={{ marginBottom: "93px" }}
        >
          <ul className="list-unstyled">
          <li className="checked1 pd" style={{ textAlign: "center", fontFamily: '"Abhaya Libre", serif', fontSize: "42px", color: "#313987" ,background: "white" , fontWeight:"bold",  }}>
              &nbsp;12 months to go
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background:"rgb(244, 240, 248)", borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={0} isChecked={isChecked[0]} onChange={handleToggle} />
              Announce your wedding.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background:"rgb(244, 240, 248)" , borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={1} isChecked={isChecked[1]} onChange={handleToggle} />
              Set a wedding budget.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background:"rgb(244, 240, 248)" , borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={2} isChecked={isChecked[2]} onChange={handleToggle} />
              Find and hire your wedding planner.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background:"rgb(244, 240, 248)" , borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={3} isChecked={isChecked[3]} onChange={handleToggle} />
              Choose your wedding date.
            </li>
            <li className="checked1 pd" style={{ textAlign: "center", fontFamily: '"Abhaya Libre", serif', fontSize: "42px", color: "#313987" ,background: "white" }}>
              <strong>&nbsp;6 months to go</strong>
            </li>
            <li className="checked1 pd"style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={4} isChecked={isChecked[4]} onChange={handleToggle} />
              Start creating your guest list.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={5} isChecked={isChecked[5]} onChange={handleToggle} />
              Decide on your color scheme.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={6} isChecked={isChecked[6]} onChange={handleToggle} />
              Choose wedding rings.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8"  , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={7} isChecked={isChecked[7]} onChange={handleToggle} />
              Order free invitation card samples.
            </li>
            <li className="checked1 pd"  style={{ textAlign: "center", fontFamily: '"Abhaya Libre", serif', fontSize: "42px", color: "#313987" ,background: "white" }}>
              <strong>&nbsp;3 months to go</strong>
            </li>
            <li  className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={8} isChecked={isChecked[8]} onChange={handleToggle} />
              Find and order wedding favors.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={9} isChecked={isChecked[9]} onChange={handleToggle} />
              Finalize the reception menu.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={10} isChecked={isChecked[10]} onChange={handleToggle} />
              Book the rehearsal and rehearsal dinner venue.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={11} isChecked={isChecked[11]} onChange={handleToggle} />
              Book wedding night accommodations.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" }}>
              <Checked index={12} isChecked={isChecked[12]} onChange={handleToggle} />
             Book your wedding venue.
            </li>   
            <li className="checked1 pd "  style={{ textAlign: "center", fontFamily: '"Abhaya Libre", serif', fontSize: "42px", color: "#313987",background: "white" }}>
              <strong>&nbsp;1 month to go</strong>
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={13} isChecked={isChecked[13]} onChange={handleToggle} />
              Start planning your honeymoon.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={14} isChecked={isChecked[14]} onChange={handleToggle} />
              Hire your videographer.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={15} isChecked={isChecked[15]} onChange={handleToggle} />
              Hiar a hair and makeup stylist.
            </li>
            <li  className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={16} isChecked={isChecked[16]} onChange={handleToggle} />
              Get your marriage license.
            </li>

            <li  className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" }}>
              <Checked index={17} isChecked={isChecked[17]} onChange={handleToggle} />
              Book your wedding cake.
            </li>
            <li className="checked1 pd" style={{ textAlign: "center", fontFamily: '"Abhaya Libre", serif', fontSize: "42px", color: "#313987" , background: "white" }}>
              <strong>&nbsp;1 week to go</strong>
            </li>

            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8", borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={18} isChecked={isChecked[18]} onChange={handleToggle} />
              Book your wedding flowers.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={19} isChecked={isChecked[19]} onChange={handleToggle} />
              Confirm final details with your vendors.
            </li>
            <li  className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8" , borderBottom: "1px solid rgba(192, 203, 207,0.4)"}}>
              <Checked index={20} isChecked={isChecked[20]} onChange={handleToggle} />
              Purchase gifts for your wedding party.
            </li>
            <li className="checked1 pd" style={{ fontFamily: "Roboto, sans-serif", background: "#f4f0f8", borderBottom: "1px solid rgba(192, 203, 207,0.4)" }}>
              <Checked index={21} isChecked={isChecked[21]} onChange={handleToggle} />
              Order outfits for your wedding party.
            </li>
           
            
          </ul>
        </div>
      </div>
 

            <div
                className="container"
                style={{ marginTop: "65px", width: "1100px" }}
              >
           
     
             
            </div>
      <>{isLoggedIn ? <Footer /> : <Footer />}</>
    </div>
  );
}

export default CheckList;

