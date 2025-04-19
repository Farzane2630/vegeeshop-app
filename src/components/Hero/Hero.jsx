import React from "react";
import { Pagination, Navigation } from "swiper";
import { Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
// styles
import "swiper/css";
import "./_Hero.scss";

export default function Hero({ indexPage, children }) {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={`mySwiper slide-container ${!indexPage ? "not-index" : ""}`}
    >
      {children}
    </Swiper>
  );
}
