"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/Buycard/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from '@/contextApi';

function Buycard() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/Buycard/bootstrap/js/bootstrap.min.js");


      // Load initial state from local storage
      const savedImgCart = localStorage.getItem('imgCart');
      const savedNameCart = localStorage.getItem('nameCart');
      const savedPriceCart = localStorage.getItem('priceCart');

      if (savedImgCart) setimgCart(savedImgCart);
      if (savedNameCart) setnameCart(savedNameCart);
      if (savedPriceCart) setpriceCart(savedPriceCart);
    }
  }, []);

  const {imgCart,setimgCart} = useAppContext();
  const {nameCart,setnameCart} = useAppContext();
  const {priceCart,setpriceCart} = useAppContext();
  const {showBuyCart, setShowBuyCart} = useAppContext();
  const { conterApp, setconterApp } = useAppContext();

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('imgCart', imgCart);
    localStorage.setItem('nameCart', nameCart);
    localStorage.setItem('priceCart', priceCart);
  }, [imgCart, nameCart, priceCart]);

  const handelClick = () => {
    setShowBuyCart(true);
    if(showBuyCart==false && conterApp==1){
    setconterApp(null)
    }
    else if(conterApp==2){
      setconterApp(conterApp-1);
    }
  }

  const handelClickCheckout = () => {
    setnameCart('');
    setpriceCart('');

  }

  const handleRemove = () => {

    // Remove items from local storage
    localStorage.removeItem('imgCart');
    localStorage.removeItem('nameCart');
    localStorage.removeItem('priceCart');
  
  }

  return (
    <tfoot>
                <tr>
                      
                      <td style={{ fontSize: "15px", width: "141.438px" }}>
                        
                        <img
                          src={imgCart}
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
                          {nameCart}
                        </span>
                        
                       
                       
                       
                      
                      
                      
                      </td>
                      <td  style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "22px",
                          width: "126.344px",
                        }}>
                        
                         {/* span for price of card  */}
                        <span id="price-span" >{priceCart}</span>
                        
                        
                    
                        
                         
                        
                        
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
                          style={{ fontSize: "54px", color: "rgb(146,0,0)", cursor: "pointer"}}

                          onClick={() => {
                            handelClick();
                            handelClickCheckout();
                            handleRemove();
                          }}

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