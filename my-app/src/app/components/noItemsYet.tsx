"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cart/bootstrap/css/bootstrap.min.css";
import Link from "next/link";


function NoItemsYet() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cart/bootstrap/js/bootstrap.min.js");
    }
  }, [])


  return (
    <>
   {/* No items yet component  */}
<tbody style={{ textAlign: "left" }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              fontSize: "25px",
                              fontFamily: "Roboto, sans-serif",
                              textShadow: "0px 0px",
                            }}
                            colSpan={5}
                          >
                            <br />
                            <span style={{ fontWeight: "normal !important" }}>
                              &nbsp; &nbsp;No Items Yet&nbsp;
                            </span>
                            <br />
                            <br />
                          </td>
                        </tr>
                      </tbody>








    </>
);
}
export default NoItemsYet;