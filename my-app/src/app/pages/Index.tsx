"use client";

import React, { useEffect, useState, useRef } from "react";
import "../../../public/assets/index/bootstrap/css/bootstrap.min.css";
import Link from "next/link";
import Modal1 from '../components/modal';
import Footer from '../components/Footer';
import MainRegistered from '../components/MainRegistered';





function Index() {
  //import bootstrap javascript
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../../../public/assets/index/bootstrap/js/bootstrap.min.js");
    }
  }, []);
  /////////////////

  //import animation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("../../../public/assets/index/css/aos.min.css");

      AOS.init();
    }
  }, []);
  ////////////////

  //video autoplay 
  useEffect(() => {
    const video = document.querySelector('video');

    if (video) {
      video.play();
    }
  }, []);

  ///////////

  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Great+Vibes&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />

       <><MainRegistered/></>

      <div>
        <header className="d-flex masthead">
          <div className="video-background">
          <video autoPlay muted loop>
      <source src="assets/index/videos/Video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
          </div>
          <div
            className="container text-center"
            style={{   backgroundColor: "rgba(0, 0, 0, 0.5)", alignContent: "center" , height: "100%",width: "100%",borderRadius:'20px'}}
          >
            <h1 data-aos="fade-down" data-aos-duration={600} className="mb-1" style={{color:'ButtonShadow', fontFamily:"Cinzel Decorative",fontSize:'120px'}}>
              JUAR&nbsp;Wedding
            </h1>
            <h3 data-aos="fade-up" data-aos-duration={600} className="mb-5">
              <em data-aos="fade-up" data-aos-duration={650} style={{color:'ButtonShadow',fontSize:'40px'}} >
                Plan your dream wedding for free..
              </em>
            </h3>
            <div className="overlay" />
          </div>
        </header>
        <section id="about" className="content-section bg-light">
          <h1
            style={{
              textAlign: "center",
              fontSize: "57.295px",
              marginBottom: "34px",
              fontFamily: '"Abhaya Libre", serif',
            }}
          >
            OUR SERVICES&nbsp;
          </h1>
          <div>
            <div className="row">
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <div
                  className="mx-auto"
                  style={{ width: "300px", height: "300px" }}
                >
                  <a href="#service-1">
                    <img
                      alt="Enjoy the Little Things Card and Cup of Coffee"
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                      }}
                      src="assets/index/img/pexels-photo-3563628.jpeg"
                    />
                  </a>
                </div>
                <h4 style={{ textAlign: "center", marginTop: "15px" }}>
                  <strong
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "50px",
                      marginTop: "0px",
                    }}
                  >
                    CARDS
                  </strong>
                </h4>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <div
                  className="mx-auto"
                  style={{ width: "300px", height: "300px" }}
                >
                  <a href="#service-2">
                    <img
                      alt="Elegant White Outdoors Table Setting "
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                      }}
                      src="assets/index/img/pexels-photo-14822267.jpeg"
                    />
                  </a>
                </div>
                <h4 style={{ textAlign: "center", marginTop: "15px" }}>
                  <strong
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "50px",
                    }}
                  >
                    VENUES
                  </strong>
                </h4>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <div
                  className="mx-auto"
                  style={{ width: "300px", height: "300px" }}
                >
                  <a href="#service-3">
                    <img
                      alt="Relationship Goals on Terrace"
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                      }}
                      src="assets/index/img/pexels-photo-356808.jpeg"
                    />
                  </a>
                </div>
                <h4 style={{ textAlign: "center", marginTop: "15px" }}>
                  <strong
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "50px",
                    }}
                  >
                    HONEYMOON
                  </strong>
                </h4>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <div
                  className="mx-auto"
                  style={{ width: "300px", height: "300px" }}
                >
                  <a href="#service-4">
                    <img
                      alt="Woman Getting a Haircut"
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                      }}
                      src="assets/index/img/pexels-photo-3993320.jpeg"
                    />
                  </a>
                </div>
                <h4 style={{ textAlign: "center", marginTop: "15px" }}>
                  <strong
                    style={{
                      fontFamily: '"Abhaya Libre", serif',
                      fontSize: "50px",
                    }}
                  >
                    SALONS
                  </strong>
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section
          id="service-1"
          style={{ marginRight: "80px", marginLeft: "80px" }}
        >
          <section style={{ marginBottom: "50px" }}>
            <div
              id="title-1"
              className="container"
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  marginTop: "50px",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "51px",
                  textAlign: "left",
                }}
              >
                Invitation Card
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "21px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Explore Our Handpicked Collection of Stunning Invitation Cards
              </p>
            </div>
            <div>
              <div
                className="row"
                style={{ marginRight: "0px", marginLeft: "0px" }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/10%20(1).jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table" style={{ paddingLeft: "10px" }}>
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        <strong>
                          <span style={{ color: "rgb(0, 0, 0)" }}>
                            Elegant Peony Wedding Invitations
                          </span>
                        </strong>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        <span style={{ color: "rgb(71, 82, 95)" }}>
                          This elegant wedding invitation design features
                          painted peonies decorating the card.&nbsp;
                        </span>
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/6(1).jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Winter Rustic Wedding Invitations
                        </span>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Rustic branches frame your wedding details on this
                        winter-inspired wedding invitation.{" "}
                      </p>
                   
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/r%20(1).jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Versatile Vogue Wedding Invitations
                        </span>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                          color: "var(--bs-black)",
                          textAlign: "left",
                        }}
                      >
                        Variety is the spice of love. This timeless wedding
                        invitation features a versatile blend of styles,
                        displaying refined fonts and a striking floral
                        artwork.&nbsp;
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div className="ripple-cont">
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/9%20(1).jpg"
                        />
                      </div>
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "25px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "27px",
                        }}
                      >
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Rustic Emblem Wedding Invitations
                        </span>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Classic romance marries whimsical design in this elegant
                        wedding invitation featuring the outline of a
                        traditional emblem wrapped in watercolor wildflowers and
                        vines.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="btn-section-1"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
             
            
              
              
              
             
             {/* Explore more for Invitation Card */}
              <button
                className="btn btn-primary"
                data-bss-hover-animate="pulse"
                id="but-section-1"
                type="button"
                style={{
                  textAlign: "center",
                  width: "292.8125px",
                  height: "66px",
                  borderRadius: "10px",
                  fontSize: "25px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Explore more
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ fontSize: "38px" }}
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              






            </div>
          </section>
        </section>
        <section
          id="service-2"
          style={{ marginRight: "80px", marginLeft: "80px" }}
        >
          <section style={{ marginBottom: "50px" }}>
            <div
              id="title-2"
              className="container"
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  marginTop: "50px",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "51px",
                  textAlign: "left",
                }}
              >
                Wedding venues&nbsp;
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "21px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Premier Selection of Exquisite Wedding Venues
              </p>
            </div>
            <div>
              <div
                className="row"
                style={{ marginRight: "0px", marginLeft: "0px" }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/67269560_2352517005063716_445999475714949120_n.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table" style={{ paddingLeft: "10px" }}>
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Lujain Wedding&nbsp;
                        <br />
                        <strong>venues</strong>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        This sleek and modern venue boasts a sense of elegance
                        that couples
                        <br />
                        and their guests will appreciate.&nbsp;
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/281543944_5390283644326766_8833335931753295431_n.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Nayrouz Wedding&nbsp;
                        <br />
                        <strong>venues</strong>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        An exquisite venue where dreams materialize, blending
                        elegance, opulence and exceptional service for
                        unforgettable celebrations.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/360138548_693088756178701_2743552918627612162_n.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Lotus Wedding&nbsp;
                        <br />
                        <strong>venues</strong>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        luxury and exceptional service, ensuring to bring the
                        most beautiful memories to weddings and special
                        occasions.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div className="ripple-cont">
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/reception-gold-oval-table-1_51_301051.webp"
                        />
                      </div>
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "25px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "27px",
                        }}
                      >
                        Royal Wedding&nbsp;
                        <br />
                        <strong>venues</strong>
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        superior beauty, sophisticated design and exceptional
                        service. An unforgettable experience for the newlyweds
                        and their guests.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="btn-section-2"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
              
              
              
              
              {/* Explore more for Wedding venues  */}
              <button
                className="btn btn-primary"
                data-bss-hover-animate="pulse"
                id="but-section-2"
                type="button"
                style={{
                  textAlign: "center",
                  width: "292.8125px",
                  height: "66px",
                  borderRadius: "10px",
                  fontSize: "25px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ fontSize: "38px" }}
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </button>








            </div>
          </section>
        </section>
        <section
          id="service-3"
          style={{ marginRight: "80px", marginLeft: "80px" }}
        >
          <section style={{ marginBottom: "50px" }}>
            <div
              id="title-3"
              className="container"
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  marginTop: "50px",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "51px",
                  textAlign: "left",
                }}
              >
                HONEYMOON
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "21px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Curated Selection of Dreamy Honeymoon Destinations
              </p>
            </div>
            <div>
              <div
                className="row"
                style={{ marginRight: "0px", marginLeft: "0px" }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration={750}
                  data-aos-once="true"
                  id="one"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/Giza%20Pyramids.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table" style={{ paddingLeft: "10px" }}>
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Pyramids of Giza
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Egyptian Mediterranean shoreline, pristine beaches,
                        luxury resorts, summer destination, azure waters,
                        vibrant nightlife, coastal retreat.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration={750}
                  data-aos-once="true"
                  id="two"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/kaafu%20atoll.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Kaafu Atoll
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Kaafu Atoll&nbsp;Maldives&apos; tourist hotspot, luxury
                        resorts, vibrant marine life, pristine beaches, water
                        sports, tropical paradise.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-once="true"
                  id="three"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/pexels-francesco-ungaro-15997971.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        The pink city (Petra)
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Petra&nbsp;Ancient Nabatean city, carved sandstone,
                        UNESCO site , Treasury, Siq, cultural heritage, Jordan.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration={750}
                  data-aos-once="true"
                  id="four"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div className="ripple-cont">
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/colosseum.jpg"
                        />
                      </div>
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "25px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "27px",
                        }}
                      >
                        Colosseum
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        The Colosseum Ancient Roman amphitheater, iconic symbol
                        of Rome, historic arena, architectural masterpiece.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="btn-section-3"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
              
              
              
              
              {/* Explore more for HONEYMOON */}
              <button
                className="btn btn-primary"
                data-bss-hover-animate="pulse"
                id="but-section-3"
                type="button"
                style={{
                  textAlign: "center",
                  width: "292.8125px",
                  height: "66px",
                  borderRadius: "10px",
                  fontSize: "25px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ fontSize: "38px" }}
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </button>







            </div>
          </section>
        </section>
        <section
          id="service-4"
          style={{ marginRight: "80px", marginLeft: "80px" }}
        >
          <section style={{ marginBottom: "50px" }}>
            <div
              id="title-4"
              className="container"
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                marginBottom: "40px",
              }}
            >
              <h1
                style={{
                  marginTop: "50px",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "51px",
                  textAlign: "left",
                }}
              >
                HAIR&amp;MAKEUP
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "21px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                <span style={{ color: "var(--tw-prose-body)" }}>
                  Premier Collection of Luxury Hair &amp; Makeup Services
                </span>
              </p>
            </div>
            <div>
              <div
                className="row"
                style={{ marginRight: "0px", marginLeft: "0px" }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/saw.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table" style={{ paddingLeft: "10px" }}>
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Oasis Beauty Lounge
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Nestled in a serene corner of the bustling city, is more
                        than just a salon; it is a haven where women come to
                        unwind, rejuvenate, and rediscover their radiance.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/ha.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Marwan Beauty Lounge
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        Our team of skilled stylists and beauty professionals
                        are dedicated to bringing out the best in you. Whether
                        you are seeking a glamorous makeover for a special
                        occasion .
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div>
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/saloon%2010.jpg"
                        />
                      </div>
                      <div className="ripple-cont" />
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "24px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        Fabula beauty lounge
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "18px",
                        }}
                      >
                        ndulge in a wide array of services tailored to pamper
                        and enhance your natural beauty. From precision haircuts
                        and expert color treatments to luxurious facials.
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration={750}
                  data-aos-once="true"
                  className="col-md-3"
                >
                  <div className="blog-card blog-card-blog">
                    <div className="blog-card-image">
                      <div className="ripple-cont">
                        <img
                          className="img-fluid img"
                          style={{ borderRadius: "15px" }}
                          src="assets/index/img/sa.jpg"
                        />
                      </div>
                    </div>
                    <div className="blog-table">
                      <h4
                        className="blog-card-caption"
                        style={{
                          margin: "-31px 0px 8px",
                          marginBottom: "-6px",
                          marginTop: "25px",
                          fontFamily: "Roboto, sans-serif",
                          fontSize: "24px",
                        }}
                      >
                        Sabeen Beauty Center
                      </h4>
                      <p
                        className="blog-card-description"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        {" "}
                        we believe in the power of personalized attention and
                        tailor-made experiences. Our consultations are thorough
                        and insightful, ensuring that every treatment is
                        perfectly customized to complement your unique style.
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="btn-section-4"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
              
              
              
              
              
              {/* Explore more for HAIR&MAKEUP*/}
              <button
                className="btn btn-primary"
                data-bss-hover-animate="pulse"
                id="but-section-4"
                type="button"
                style={{
                  textAlign: "center",
                  width: "292.8125px",
                  height: "66px",
                  borderRadius: "10px",
                  fontSize: "25px",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ fontSize: "38px" }}
                >
                  <path
                    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              </button>







            </div>
          </section>
        </section>
        <section
          id="services"
          className="content-section text-center text-white"
          style={{ background: "#313987" }}
        >
          <div className="container">
            <div className="content-section-heading">
              <h2
                data-aos="fade-down"
                data-aos-duration={700}
                data-aos-once="true"
                className="mb-5"
              >
                What We Offer
              </h2>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="icon-screen-smartphone" />
                </span>
                <h4>
                  <strong>Responsive</strong>
                </h4>
                <p className="mb-0 text-faded">
                  Looks great on any screen size!
                </p>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. */}
                    <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </span>
                <h4>
                  <strong>
                    <strong>Guidance</strong>
                  </strong>
                </h4>
                <p className="mb-0 text-faded">Step by step with you</p>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="icon-like" />
                </span>
                <h4>
                  <strong>Trusted</strong>
                </h4>
                <p className="mb-0 text-faded">
                  <span>Many users&nbsp;</span>
                  <i className="fa fa-heart" />
                  <span>&nbsp;us!</span>
                </p>
              </div>
              <div
                className="col-md-6 col-lg-3 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration={750}
                data-aos-once="true"
              >
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="icon-speech" />
                </span>
                <h4>
                  <strong>Support</strong>
                </h4>
                <p className="mb-0 text-faded" style={{ fontSize: "15px" }}>
                  Questioning the Unknown, Finding Answers Within.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
          className="content-section"
          style={{ padding: "0px" }}
        >
          <div className="container">
            <div className="content-section-heading text-center">
              <h2
                className="mb-5"
                style={{
                  marginTop: "80px",
                  fontFamily: '"Abhaya Libre", serif',
                  fontSize: "67px",
                  color: "#313987",
                }}
              >
                JUAR Social media
              </h2>
            </div>
            <div className="row g-0" style={{ marginTop: "-30px" }}>
              <div className="col col-lg-4 col-12">
                <a
                  className="portfolio-item"
                  href="https://www.facebook.com/profile.php?id=61558493908253"
                  target="_blank"
                >
                  <div className="caption">
                    <div
                      className="caption-content"
                      style={{
                        marginTop: "186.203px",
                        marginBottom: "0px",
                        marginRight: "0px",
                        marginLeft: "90px",
                      }}
                    />
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/index/img/facebook.png"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="col col-lg-4 col-12">
                <a
                  className="portfolio-item"
                  href="https://www.instagram.com/juarjo2002/"
                  target="_blank"
                >
                  <div className="caption">
                    <div
                      className="caption-content"
                      style={{
                        margin: "0px",
                        marginRight: "0px",
                        marginTop: "185px",
                        marginLeft: "102px",
                      }}
                    />
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/index/img/instagram%20(1)%20(1).jpg"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
              <div className="col col-lg-4 col-12">
                <a
                  className="portfolio-item"
                  href="mailto:JUARJO2002@outlook.com "
                >
                  <div className="caption">
                    <div
                      className="caption-content"
                      style={{
                        margin: "0px",
                        marginTop: "185px",
                        marginLeft: "118px",
                      }}
                    />
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/index/img/email.jpg"
                    style={{ width: "100%" }}
                  />
                </a>
              </div>
            </div>
          </div>
        
        </section>
       
       
       
      </div>
      <><Footer/></>
      
    </div>
  );
}
export default Index;
