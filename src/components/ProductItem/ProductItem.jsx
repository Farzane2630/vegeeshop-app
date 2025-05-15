import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./_ProductItem.scss";

export default function ProductItem({ id, discount, cover, title, price, addToCart, addToWishlist }) {
  const [isShowOptions, setIsShowOptions] = useState(false);

  return (
    <div
      className="product-container"
      onMouseMove={() => setIsShowOptions(true)}
      onMouseLeave={() => setIsShowOptions(false)}
      onClick={() => setIsShowOptions(true)}
    >
      <div className="product">
        <Link to={`/product-info/${id}`} className="img-product link">
          {discount ? (
            <span className="status">{discount}%</span>
          ) : (
            <span className="status hide"> 0 % </span>
          )}
          <img className="img-fluid" src={cover} alt={title} />
        </Link>
        <div className="p-3 text-center">
          <h3>
            <Link to="#" className="link text">
              {title}{" "}
            </Link>
          </h3>
          <div className={`pricing ${isShowOptions ? "hide-options" : ""}`}>
            <p className="price">
              {discount ? (
                <>
                  <span className="price-dc line-throw">${price}</span>
                  <span className="price-sale">
                    ${(price * (100 - discount)) / 100}
                  </span>
                </>
              ) : (
                <span className="price-dc">${price}</span>
              )}
            </p>
          </div>
          <div
            className={`icon-container ${!isShowOptions ? "hide-options" : ""}`}
          >
            <Link to={`/product-info/${id}`}>
              <MenuIcon className="icon" />
            </Link>
            <FavoriteIcon className="icon" onClick={addToWishlist} />
            <ShoppingCartIcon className="icon" onClick={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
