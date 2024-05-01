"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cardCompColored/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/cardCompColored/css/styles.css";
import Link from "next/link";

function Threeimages() {

 //import bootstrap javascript
 useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompColored/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  return (
    <>
    {/* three images to preview  */}
     <div className="col-md-8">
            <img id="img-4" className="img-fluid h-33" src="" />
            <hr style={{ color: "rgba(30,82,133,0)" }} />
            <img id="img-5" className="img-fluid h-33" src="" />
            <hr style={{ color: "rgba(255,255,255,0)" }} />
            <img id="img-6" className="img-fluid h-33" src="" />
          </div>
    
    </>
  )
}

export default Threeimages