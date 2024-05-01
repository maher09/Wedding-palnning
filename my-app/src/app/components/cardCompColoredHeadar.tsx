"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cardCompColored/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/cardCompColored/css/styles.css";
import Link from "next/link";
function CardCompColoredHeadar() {
  
 //import bootstrap javascript
 useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompColored/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////



    return (
        <>
        {/* the header for three images preview  */}
        <div id="compo-card-name">
                  <h1
                    id="card-name"
                    className="card-title"
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                
                      marginBottom: "10px",
                    }}
>

                  </h1>
                </div>
                </>
  )
}

export default CardCompColoredHeadar