import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import TestimonyItem from "../TestimonyItem/TestimonyItem";
// styles
import "swiper/css";
import "swiper/css/pagination";
import "./_Testimony.scss";

export default function Testimony() {
  const usersInfo = useSelector((state) => state.usersInfo);
  return (
    <>
      <div className="landing-section-title">Testimony</div>
      <div className="landing-section-subtitle">Our satisfied customer</div>
      <div className="landing-section-details">
        says Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia, there live the blind texts. Separated they live
        in
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimony-slide"
      >
        {usersInfo?.map((user) => (
          <SwiperSlide key={user.userID}>
            <TestimonyItem {...user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
