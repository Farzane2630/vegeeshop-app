import React, { useEffect, useMemo } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import BasicTable from "../../Utils/Table/Table";
import {
  fetchCartItems,
  removeFromCart
} from "../../Redux/Reducers/cartItems";
import TextField from "@mui/material/TextField";
import ShowAlert from "../../Utils/Alert/Alert";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./_Cart.scss";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteFromList = (productID) => {
    dispatch(removeFromCart(productID));
  };

  //cart total price
  // useMemo ensures the total price is only recalculated when cartItems changes
  const totalPrice = useMemo(() => {
    return cartItems.length > 0
      ? cartItems.reduce((total, product) => {
        if (product.discount !== 0) {
          return total + product.price * ((100 - product.discount) / 100);
        } else {
          return total + product.price;
        }
      }, 0)
      : 0;
  }, [cartItems])

  // update cart items
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <>
      <Header indexPage={false} pageTitle="MY CART" />
      {cartItems.length > 0 && (
        <>
          <BasicTable products={cartItems} deleteFromList={deleteFromList} />
          <Grid
            item
            xs={12}
            md={6}
            className="cart-actions"
          >
            <TextField
              id="outlined-basic"
              label={`$ ${totalPrice?.toFixed(2)}`}
              variant="outlined"
              disabled={true}
            />
            <Button
              variant="contained"
              color="success"
              className="lets-pay-btn"
              component={Link}
              to="/checkout"
            >
              continue and pay
            </Button>
          </Grid>
        </>
      )}
      {
        cartItems.length === 0 &&
        (
          <ShowAlert
            variant="filled"
            type="error"
            msg="Cart is Empty!"
            cart={true}
          />
        )}
      <Footer />
    </>
  );
}
