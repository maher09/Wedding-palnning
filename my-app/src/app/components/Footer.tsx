"use client";
import React, { useEffect, useState } from "react";
import "../../../public/assets/footer/bootstrap/css/bootstrap.min.css";
import Link from "next/link";

function Footer() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/footer/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  return (
    <>
      <link
        rel="icon"
        type="image/png"
        sizes="202x153"
        href="assets/footer/img/Favicon.png"
      />
      
      <link
        rel="stylesheet"
        href="assets/footer/fonts/fontawesome-all.min.css"
      />
      <link rel="stylesheet" href="assets/footer/css/Pretty-Footer-.css" />
      <footer className="py-5">
        <div>
          <div className="row">
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
              <h3
                className="mb-4"
                style={{
                  textAlign: "center",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "63px",
                }}
              >
                <a
                  className="text-white text-decoration-none"
                  href="#"
                  style={{ fontSize: "92px" }}
                >
                  JUAR
                </a>
              </h3>
              <img
                className="img-fluid mb-4"
                src="assets/footer/img/Untitled_design1-removebg-preview.png"
                alt="Logo"
                width={282}
                height={282}
                style={{
                  width: "310px",
                  height: "329.25px",
                  marginLeft: "0px",
                  marginTop: "-107px",
                }}
              />
            </div>
            <div className="col-md-2">
              <h4
                className="mb-4"
                style={{
                  fontSize: "44px",
                  fontFamily: '"Abhaya Libre", serif',
                }}
              >
                Contact Us
              </h4>
              <p className="text-white">
                <i
                  className="fas fa-map-marker-alt me-2 text-white"
                  style={{ fontSize: "35px" }}
                />{" "}
                AMMAN, JORDAN
              </p>
              <p className="text-white" 
              style={{ marginTop: "40px" }}>
                <i
                  className="fas fa-phone-alt me-2 text-white"
                  style={{ fontSize: "37px" }}
                />{" "}
                +962 612356
              </p>
              <p style={{ marginTop: "40px" }}>
                <i
                  className="fas fa-envelope me-2 text-white"
                  style={{ fontSize: "29px" }}
                />
                <a href="#" className="text-white">
                  Juar.jo@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h4
                className="mb-4"
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "44px",
                  marginTop: "-9px",
                  textAlign: "center",
                }}
              >
                About JUAR
              </h4>
              <p
                className="text-white"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: "23px" }}
              >
                It is a company established in Jordan - Amman to organize
                weddings and arrange everything related to the wedding from A to
                Z.
              </p>
              <p
                className="text-white"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: "23px" }}
              >
                Thank you for being part of our journey. We are excited to
                embark on this wonderful adventure and it will not be long.
              </p>
            </div>
            <div className="col-md-2">
              <h2
                className="mb-4"
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "44px",
                  textAlign: "center",
                }}
              >
                Links
              </h2>
              <ul className="list-unstyled" style={{ textAlign: "center" }}>
                <li
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "21px" }}
                >
                  <a href="#">HOME</a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    VENUES
                  </a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    HONEYMOON
                  </a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    INVITATION
                  </a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    CHECK LIST
                  </a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    SALON
                  </a>
                </li>
                <li style={{ marginTop: "10px" }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "21px",
                    }}
                  >
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 d-flex flex-column justify-content-start align-items-center">
              <h2
                className="mb-4"
                style={{
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "44px",
                  margin: "0px",
                  marginRight: "0px",
                  textAlign: "center",
                }}
              >
                Social Media
              </h2>
              <div
                className="d-flex justify-content-center"
                style={{ marginTop: "33px", marginLeft: "-24px" }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61558493908253"
                  className="text-white me-3"
                  target="_blank"
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{ fontSize: "34px", marginRight: "7px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/juarjo2002/"
                  className="text-white me-3"
                  target="_blank"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "33px" }}
                  />
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-whatsapp" style={{ fontSize: "34px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
