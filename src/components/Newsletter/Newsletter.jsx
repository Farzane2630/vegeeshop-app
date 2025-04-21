import { useForm } from "react-hook-form";
import { Grid, Input, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Toast from "../../Utils/Toast/Toast";
import showSuccessToast from "../../Utils/Toast/successToast";
import showErrorToast from "../../Utils/Toast/errorToast";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./_Newsletter.scss";


export default function Newsletter() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = () => {
    try {
      showSuccessToast("Your email is submitted!");
      reset();
    } catch (error) {
      console.error("Toast error:", error);
    }
  };

  const onError = () => {
    if (errors.email) {
      showErrorToast(errors.email.message)
    }
  };


  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Grid container columnSpacing={8} className="newsletter-container">
        <Grid item xs={12} sm={6}>
          <div className="landing-section-subtitle">
            Subcribe to our Newsletter
          </div>
          <div className="landing-section-details">
            Get updates about our latest shops and special offers
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className="subscribe-container">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Input
              disableUnderline
              aria-label="Email address"
              placeholder="Enter your email address"
              className="subscribe-form"
              {...register("email",
                {
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  }
                }
              )}
            />
            <Button
              variant="contained"
              className="subscribe-btn"
              type="submit"
            >Subscribe</Button>
          </form>
          <Toast />
        </Grid>
      </Grid>
      <div className="swipe-up">
        <button onClick={goToTop}>
          <KeyboardDoubleArrowUpIcon className="icon" />
        </button>
      </div>
    </>
  );
}
