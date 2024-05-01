"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/Buycard/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";


function Buycard() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/Buycard/bootstrap/js/bootstrap.min.js");
     

    }
  }, []);


  return (
    <tfoot>
                <tr>
                      
                      <td style={{ fontSize: "15px", width: "141.438px" }}>
                        {/* image source that sends to cart  */}
                        <Image
                          src=""
                          width={141}
                          height={220}
                          alt="IMG"
                        />


                      </td>
                      <td  style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "20px",
                                  
                          width: "126.344px",
                        }}>

                        

                        {/* span for name of card  */}
                        <span style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            maxWidth: '236.281px',
                            wordBreak: 'break-word',
                            textOverflow: 'ellipsis'
                        }} id="name-span" >
                        </span>
                        
                        {/* input hidden card name */}
                        <input type="hidden" id="card-name" required 
                        defaultValue=""/>
                      
                      
                      
                      </td>
                      <td  style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "28px",
                           width: "126.344px",
                        }}>
                        
                         {/* span for price of card  */}
                        <span id="price-span" ></span>
                        
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-currency-dollar"
                          style={{ fontSize: "30px" }}
                        >
                          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                        </svg>
                        
                         {/* input hidden card Quantity&Price */}     
                        <input type="hidden" id="card-price" required 
                        defaultValue=""/>
                        
                        
                      </td>
                        
                      <td
                        style={{
                          textAlign: "center",
                          marginLeft: "0px",
                          width: "213.828px",
                        }}
                      >

                        {/* remove button to remove items */}
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ fontSize: "54px", color: "rgb(146,0,0)" }}
                        >


                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
                            fill="currentColor"
                          />
                          <path d="M9 9H11V17H9V9Z" fill="currentColor" />
                          <path d="M13 9H15V17H13V9Z" fill="currentColor" />
                        </svg>
                      </td>
                    </tr>
                    </tfoot>
      


  );
}
export default Buycard;