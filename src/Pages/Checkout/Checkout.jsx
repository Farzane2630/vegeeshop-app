import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputAdornments from "../../components/InfoTable/InfoTable";
import { cartContext } from "../../Contexts/Contexts";

import { useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { Button, Grid } from "@mui/material";

import "./_Checkout.scss";

export default function Checkout() {
  const { register, handleSubmit } = useForm()
  // payment
  const context = useContext(cartContext);
  const purchasedItems = useSelector((state) => state.cart);

  const subTotal = purchasedItems.reduce((total, product) => {
    return total + product.price * context.productQuantity;
  }, 0);

  const totalDiscount = purchasedItems.reduce((total, product) => {
    if (product.discount !== 0) {
      return total + product.discount * context.productQuantity;
    }
    return 0
  }, 0);

  const total =
    Number(totalDiscount) !== 0
      ? (subTotal * (100 - totalDiscount)) / 100 + 4.99
      : subTotal + 4.99;

  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const purchaseHandler = (data) => {
    console.log(data);

    // if (purchasedItems.length > 0) {
    //   swal({
    //     title: "Purchased!",
    //     icon: "success",
    //     buttons: "confirm",
    //   });
    //   setIsCheckedOut(true);
    // }
  };


  // Set the cart empty after purchase 

  return (
    <>
      <Header indexPage={false} pageTitle="CHECKOUT" />
      <div className="checkout-container">
        <h2 className="billing-header">Billing Details</h2>

        <form onSubmit={handleSubmit(purchaseHandler)}>
          <Grid container className="checkout-grid-container">
            <Grid item xs={12} lg={6} className="info-table">
              <InputAdornments register={register} />
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="new Account"
                    control={<Radio />}
                    label="Create an Account?"
                  />
                  <FormControlLabel
                    value="different Address"
                    control={<Radio />}
                    label="Ship to different address"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid className="payment" item lg={6} xs={12}>
              <div className="cart-total">
                <h3 className="head">Cart total</h3>

                <div className="sub-total">
                  <span>Subtotal</span>
                  <span>
                    {purchasedItems.length > 0 ? ` $ ${subTotal}` : `$ 00.0`}
                  </span>
                </div>
                <div className="delivery">
                  <span>Delivery</span>
                  <span>{purchasedItems.length > 0 ? ` $ 4.99` : `$ 00.0`}</span>
                </div>
                <div className="discount">
                  <span>Discount</span>
                  <span>
                    {purchasedItems.length > 0 ? ` % ${totalDiscount}` : `%0`}
                  </span>
                </div>
                <hr />
                <div className="total">
                  <span>TOTAL</span>
                  <span className="total-price">
                    {purchasedItems.length > 0 ? ` $ ${total.toFixed(2)}` : `$ 00.0`}
                  </span>
                </div>
              </div>
              <div className="payment-method">
                <FormControl clas>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    className="form-control-label"
                  >
                    <h3>Payment Method</h3>
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      className="radio-btns"
                      value="female"
                      control={<Radio />}
                      label="Direct Bank Transfer"
                    />
                    <FormControlLabel
                      className="radio-btns"
                      value="male"
                      control={<Radio />}
                      label="Check Payment"
                    />
                    <FormControlLabel
                      className="radio-btns"
                      value="other"
                      control={<Radio />}
                      label="Paypal"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControlLabel
                  className="checkbox-btns"
                  value="end"
                  required
                  control={<Checkbox />}
                  label="I have read and accept the terms and conditions.*"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className="order-btn"
                  // onClick={purchaseHandler}
                  disabled={isCheckedOut}
                  component="Link"
                  to=""
                >
                  Place an order
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer />
    </>
  );
}
