import TopContactbar from "../TopContactbar/TopContactbar";
import NavBar from "../Navbar/NavBar";
import Hero from "../Hero/Hero";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
//style
import "./_Header.scss"


// Header component for HomePage
const IndexHeaderSlide = ({ src }) => {
  return (
    <>
      <img src={src} alt="header-page-image" className="header-image" />
      <div className="black-shade-div" ></div>
      <div className="header-slide-txt">
        <p className="mb-2 index-title"> 100% Fresh & Organic Fruits</p>
        <p className="index-sub-title">
          We Deliver Organic Vegetables & Fruits
        </p>
        <Button
          component="Link" variant="contained"
          to="about"
          style={{ marginBottom: "10rem" }}
          className="link link-btn"
        >
          View Details
        </Button>
      </div>
    </>

  )
}
//Header component for other pages
const HeaderSlide = ({ pageTitle, src }) => {
  return (
    <>
      <img src={src} alt="header-page-image" className="header-image" />
      <div className="black-shade-div"></div>
      <div className="header-slide-txt">
        <p className="product-title" style={{ marginTop: "10%", opacity: 1 }} >
          {pageTitle}
        </p>
      </div>
    </>
  )
}


export default function Header({ indexPage, pageTitle }) {
  const bg = useSelector((state) => state.bgUrl || []);

  return (
    <header>
      <TopContactbar />
      <NavBar />
      <Hero indexPage={indexPage}>
        {indexPage ? (
          <section>
            <SwiperSlide className="slide-1 header-slide" >
              <IndexHeaderSlide src={bg[0]?.url} />
            </SwiperSlide>
            <SwiperSlide className="slide-1 header-slide" >
              <IndexHeaderSlide src={bg[2]?.url} />
            </SwiperSlide>
          </section>
        ) : (
          <SwiperSlide className="slide-1 header-slide" >
            <HeaderSlide src={bg[1]?.url} pageTitle={pageTitle} />
          </SwiperSlide>
        )}
      </Hero>
    </header>
  );
}
