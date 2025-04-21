import React from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Grid } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import "./_Footer.scss";
import { PhoneAndroid } from "@mui/icons-material";
export default function Footer({ about }) {
  return (
    <footer>
      {about ? "" : <Newsletter />}

      <Grid container className="footer">
        <Grid item xs={12} sm={3} className="v-food">
          <strong className="footer-title">Vegefoods</strong>
          <p className="details">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <Grid item sm={12} md={4} className="social-media-icons">
            <div>
              <FaTwitter className="icon link" />
            </div>
            <div>
              <FaFacebookF className="icon link" />
            </div>
            <div>
              <FaInstagram className="icon link" />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} className="help">
          <p className="footer-title">Help</p>
          <ul>
            <li>
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/blog">
                Journal
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={3} className="menu">
          <p className="footer-title">Menu</p>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} md={6}>
              <ul className="menu-list">
                <li className="link">Shipping </li>
                <li className="link"> Information </li>
                <li className="link"> Returns & Exchange</li>
                <li className="link">Terms & Conditions </li>
                <li className="link">Privacy Policy  </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul className="menu-list">
                <li className="link">FAQs</li>
                <li className="link">Contact</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} className="contact">
          <p className="footer-title">Have You Question?</p>
          <div className="location">
            <LocationOnIcon />
            203 Fake St. Mountain View, San Francisco, California, USA
          </div>
          <p className="phone">
            <PhoneAndroid />
            +4915755991926
          </p>
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
    </footer>
  );
}
