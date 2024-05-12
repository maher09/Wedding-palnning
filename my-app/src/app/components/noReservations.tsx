"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/cart/bootstrap/css/bootstrap.min.css";
import Link from "next/link";


function NoReservations() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/cart/bootstrap/js/bootstrap.min.js");
    }
  }, [])


  return (
    <>
   
                  {/* no reservation yet component */}
                        <tr>
                          <td
                            style={{ textAlign: "center", fontSize: "30px" }}
                            colSpan={5}
                          >
                            <span style={{ fontWeight: "normal !important" }}>
                              No Reservation Yet
                            </span>
                          </td>
                        </tr>
                      








    </>
);
}
export default NoReservations;