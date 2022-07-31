import React from "react";
import "./Landing.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "swiper/css";
import "swiper/css/effect-cards";

function Landing() {
  return (
    <div>
      <section class="banner-section home-4">
        <div class="container">
          <div class="banner-wrapper">
            <div class="row align-items-center g-5">
              <div class="col-lg-7">
                <div class="banner-content">
                  <h1>
                    {" "}
                    <span class="theme-color-4">Create</span>, Collect And{" "}
                    <span class="theme-color-4">
                      {" "}
                      <br></br> Sell
                    </span>{" "}
                    Digital Items.
                  </h1>
                  <p>
                    Digital Marketplace For Crypto Collectibles And Non-Fungible
                    Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                  </p>
                  <div class="banner-btns d-flex flex-wrap">
                    {/* <a data-blast="bgColor" href="explore.html"
                              class="default-btn move-top"> </a> */}
                    <a href="#" class="default-btn move-right">
                      <span>Explore</span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <Swiper
                  effect={"cards"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  loop={true}

                  modules={[EffectCards, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="1.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="2.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="3.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="4.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wallet-section padding-top padding-bottom">
        <div class="container">
          <div class="section-header style-4">
            <div class="header-shape">
              <span></span>
            </div>
            <h3>All Wallet Options</h3>
          </div>
          <div class="wallet-inner">
            <div class="row g-3">
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="06.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Meta Mask</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="07.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Binance</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="08.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Formatic</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="01.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Autherum</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="03.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Coinbase</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="05.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#">Portis</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
