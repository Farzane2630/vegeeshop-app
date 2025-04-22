import { FormControlLabel, FormControl, Radio, Checkbox, RadioGroup, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputAdornments from "../../components/Checkout/InfoTable/InfoTable";
import showSuccessToast from "../../Utils/Toast/successToast";
import Total from "../../components/Checkout/Total/Total";
import Method from "../../components/Checkout/PaymentMethod/Method";
import { emptyCart } from "../../Redux/Reducers/cartItems";

// style
import "./_Checkout.scss";


const defaultCheckoutFormValue = {
  method: "direct",
  account: "",
  appartment: "",
  terms: false,
  name: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  country: "",
  city: "",
  postcode: "",
}
export default function Checkout() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart);
  const { handleSubmit, control, formState: { isSubmitting, errors }, reset } = useForm({
    defaultValues: defaultCheckoutFormValue
  })

  const purchaseHandler = (d) => {
    console.log(d);


    if (cartItems.length > 0) {
      dispatch(emptyCart())
      showSuccessToast("Purchased")
      reset()
    }
  };

  return (
    <>
      <Header indexPage={false} pageTitle="CHECKOUT" />
      <div className="checkout-container">
        <p className="billing-header">Billing Details</p>

        <form onSubmit={handleSubmit(purchaseHandler)} >
          <Grid container className="checkout-grid-container">

            {/* info table */}
            <Grid item xs={12} lg={6} className="info-table">
              <InputAdornments control={control} errors={errors} />
              {/* radio buttons */}
              <FormControl>
                <Controller control={control} name="account"
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
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
                  )}
                />
              </FormControl>
            </Grid>
            <Grid className="payment" item lg={6} xs={12}>

              {/* total */}
              <Total cartItems={cartItems} />

              {/* payment method & terms */}
              <div className="payment-method">
                <Method control={control} />
                <Controller control={control} name="terms"
                  render={({ field }) => <FormControlLabel
                    {...field}
                    className="checkbox-btns"
                    value="end"
                    required
                    control={<Checkbox />}
                    label="I have read and accept the terms and conditions.*"
                  />}
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                color="success"
                className="order-btn"
                disabled={isSubmitting || !cartItems.length}
              >
                {
                  isSubmitting ? "Submiting ..." : "Place an order"
                }
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer />
    </>
  );
}
