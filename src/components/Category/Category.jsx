import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./_Category.scss";

export default function Category() {
  const categories = useSelector((state) => state.categories);

  const featuredCategoryOne = categories.slice(0, 2);
  const featuredCategoryTwo = categories.slice(2, 4);

  return (
    <Box>
      <Grid
        container
        className="category-grid-container"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} md={3} className="grid-item">
          {featuredCategoryOne.map((category) => (
            <div key={category.id} className="image-wrapper">
              <img
                src={category.cover}
                alt={category.title}
                loading="lazy"
                className="image-container"
              />
              <div className="category-title">{category.title}</div>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={3} className="grid-item">
          <div className="shop-image-wrapper">
            <div className="shop-part">
              <p className="landing-section-title">Vegetables</p>
              <p className="landing-section-details">
                protect the health of every home
              </p>
              <Button
                component={Link}
                to="/products/1"
                variant="contained"
                color="success"
                className="link shop-now-btn"
              >
                Shop Now
              </Button>
            </div>
            <img
              src="/images/category.jpg"
              alt="products-images"
              loading="lazy"
              className="image-container"
            />
          </div>
        </Grid>

        <Grid item xs={12} md={3} className="grid-item">
          {featuredCategoryTwo.map((category) => (
            <div key={category.id} className="image-wrapper">
              <img
                src={category.cover}
                alt={category.title}
                loading="lazy"
                className="image-container"
              />
              <div className="category-title">{category.title}</div>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
