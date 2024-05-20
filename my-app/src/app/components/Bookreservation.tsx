"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/Bookreservation/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import { useAppContext } from '@/contextApi';

function Bookreservation() {
  //import bootstrap javascript
  const {name,setname} = useAppContext();
  const {price,setprice} = useAppContext();
  const {day,setday} = useAppContext();
  const {month,setmonth} = useAppContext();
  const {year,setyear} = useAppContext();
  const {timee,settimee} = useAppContext();
  const {showFirstComponent, setShowFirstComponent} = useAppContext();
  
  const { conterApp, setconterApp } = useAppContext();
 

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/Bookreservation/bootstrap/js/bootstrap.min.js");
     

    }
  }, []);
 
 const handelClick = () => {
    setShowFirstComponent(true);
    if(showFirstComponent==false && conterApp==1){
     setconterApp(null)
    }
  
    else if(conterApp==2){
    setconterApp(conterApp-1);
 }
}

  return (


  <tr>
                        <td style={{ width: "319.516px" }}>
                        
                        
                         {/* input hidden venue name */}
                          <input
                            type="hidden"
                            id="reservations-label"
                            required
                            value=""
                          />

                           {/* span for name of venue */}
                          <span style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            maxWidth: '319.516px',
                            wordBreak: 'break-word',
                            textOverflow: 'ellipsis',
                            textAlign: "center" ,
                        fontWeight: "bold",
                        fontSize: "18px"
                        }} id="reservations-span" >
                          {name}
                        </span>



                        </td>
                        <td style={{ textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "25px",
                          width: "126.344px" }}>
                          
                         
                         
                           {/* span for price of venue  */}                         
                          <span id="price-span-2">{price}</span>
                          
                          
                          
                          
                          <i
                            className="fa fa-dollar"
                            style={{ fontSize: "25px" }}
                          />
                          
                          
                           {/* input hidden venue price */}
                          <input type="hidden" id="price-res-label" required 
                          value=""/>
                        
                        
                        
                        
                        </td>
                        <td style={{  textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "18px",
                         width: "126.344px",
                         verticalAlign: 'middle',
                         maxWidth: '150.953px',
                         wordBreak: 'break-word',
                         textOverflow: 'ellipsis'}}>
                          
                           {/* input hidden date of venue */}
                          <input type="hidden" id="date-label" required 
                          value=""/>


                           {/* span for date of venue  */}
                          <span id="date-span" >{`${day}-${month}-${year}`}</span>
                        
                        
                        </td>
                        <td style={{
                      width: "150.953px", 
                        textAlign: "center" ,
                        fontWeight: "bold",
                        fontSize: "18px",
                        verticalAlign: 'middle'}}>
                        
                           {/* input hidden time of venue */}
                          <input type="hidden" id="time-label" required 
                          value=""/>
                        
                         {/* span for time of venue  */}
                          <span  id="time-span" >{timee}</span>
                        
                        
                        
                        </td>
                        <td style={{ width: "142.453px", textAlign: "center" }}>
                        
                        
                        
                        
                        {/* remove button to remove items */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-32 0 512 512"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            style={{ fontSize: "42px",color: "rgb(146,0,0)" }}
                            onClick={handelClick}
                          >
                            {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                          </svg>




                        </td>
                      </tr>





  );
}
export default Bookreservation;