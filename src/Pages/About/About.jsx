import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import CountUp from "../../components/CountUp/CountUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import "./_About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function About() {
  const Testimony = lazy(() => import("../../components/Testimony/Testimony"))
  const bestPrice = useSelector((state) => state.bestPrice);
  const countUpelems = useSelector((state) => state.countUp);
  const aboutURL = useSelector((state) => state.about);

  return (
    <>
      <Header indexPage={false} pageTitle="ABOUT US" />
      <Grid container className="about-container">
        <Grid item xs={12} md={6} className="about-media">
          <div
            className="about-img"
            style={{ backgroundImage: `url(${aboutURL.url})` }}
            role="img"
            aria-label="About Us Image"
          >
            <div className="play-icon-bg">
              <PlayArrowIcon className="play-icon" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="about-description">
          <h2 className="about-header">
            Welcome to Vegefoods an eCommerce website
          </h2>

          <p className="about-details">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="about-details">
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>

          <Link to="/products/1" className="link button-success">
            Shop Now
          </Link>
        </Grid>
      </Grid>

      <div
        className="container-fluid best-price-container"
        style={{ backgroundImage: `url(${bestPrice.bgUrl})` }}
      >
        {countUpelems.map(elem => (
          <CountUp key={elem.desc} {...elem} duration={3} />
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimony />
      </Suspense>
      <OurServices about={true} />
      <Footer about={true} />
    </>
  );
}
