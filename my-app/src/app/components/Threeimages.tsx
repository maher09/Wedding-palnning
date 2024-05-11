"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cardCompColored/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/cardCompColored/css/styles.css";
import Link from "next/link";

function Threeimages({ imageUrls }: { imageUrls: string[] }) {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cardCompColored/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  return (
    <>
      <div className="col-md-8">
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img className="img-fluid h-33" src={url} alt={`Image ${index}`} />
          {index !== imageUrls.length - 1 && <hr style={{ color: "rgba(255,255,255,0)" }} />}
        </div>
      ))}
    </div>
    </>
  );
}

export default Threeimages;
