import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import "./_Category.scss";
import { useSelector } from "react-redux";
// import shop from "assets/images/category.jpg";

export default function Category() {
  const categories = useSelector((state) => state.categories);
  return (
    <Box>
      <Grid
        container
        className="category-grid-container"
        direction="row"
        justifyContent="center"
      >
        <Grid xs={12} md={3} className="grid-item">
          {categories.slice(0, 2).map((category) => (
            <div key={category.id} className="image-container">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${category.cover})` }}
              >
                <div className="category-title">{category.title}</div>
              </div>
            </div>
          ))}
        </Grid>
        <Grid xs={12} md={3} className="grid-item">
          <div className="shop-part image-container">
            <p className="landing-section-title">Vegetables</p>
            <p className="landing-section-details">
              protect the health of every home
            </p>
            <Button variant="contained" color="success">
              <Link to="/products/1" className="link">
                Shop Now
              </Link>
            </Button>
          </div>
          <div className="image-container">
            <div
              className="image-container"
              style={{ backgroundImage: `url("/category.jpg")` }}
            ></div>
          </div>
        </Grid>
        <Grid xs={12} md={3} className="grid-item">
          {categories.slice(2, 4).map((category) => (
            <div className="image-container">
              <div
                className="image-container"
                style={{ backgroundImage: `url(${category.cover})` }}
              >
                <div className="category-title">{category.title}</div>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
