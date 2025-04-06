import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Grid } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import "./_Footer.scss";
export default function Footer({about}) {
  return (
    <>
      {about ? "" : <Newsletter />}

      <Grid container className="footer">
        <Grid item xs={12} sm={3} className="v-food">
          <h2 className="footer-title">Vegefoods</h2>
          <div className="details">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </div>
          <Grid item sm={12} md={4} className="social-media-icons">
            <Link to="#">
              <FaTwitter className="icon" />
            </Link>
            <Link to="#">
              <FaFacebookF className="icon" />
            </Link>
            <Link to="#">
              <FaInstagram className="icon" />
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} className="help">
          <h2 className="footer-title">Help</h2>
          <ul>
            <li>
              <Link className="link" to="shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="link" to="about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="blog">
                Journal
              </Link>
            </li>
            <li>
              <Link className="link" to="contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3} className="menu">
          <h2 className="footer-title">Menu</h2>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={6}>
              <ul className="menu-list">
                <li>
                  <Link className="link">Shipping</Link>
                </li>
                <li>
                  <Link className="link">Information</Link>
                </li>
                <li>
                  <Link className="link">Returns & Exchange</Link>
                </li>
                <li>
                  <Link className="link">Terms & Conditions</Link>
                </li>
                <li>
                  <Link className="link">Privacy Policy</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul className="menu-list">
                <li>
                  <Link className="link">FAQs</Link>
                </li>
                <li>
                  <Link className="link">Contact</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} className="contact">
          <h2 className="footer-title">Have You Question?</h2>
          <div className="location">
            <LocationOnIcon />
            203 Fake St. Mountain View, San Francisco, California, USA
          </div>
          <div className="phone">
            +4915755991926
          </div>
          <div className="email">
            <MailIcon />
            farzanekazemi8517@gmail.com
          </div>
        </Grid>
      </Grid>
      <p className="copy-right">
        Copyright ©2023 All rights reserved | This template is made with{" "}
        <FavoriteIcon style={{ color: "red" }} /> by{" "}
        <Link to="https://github.com/Farzane2630" className="link author">
          FARZANAK
        </Link>
      </p>
    </>
  );
}
