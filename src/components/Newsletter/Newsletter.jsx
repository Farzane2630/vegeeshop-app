import { useForm } from "react-hook-form";
import { Grid, Input, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { ToastContainer, toast } from "react-toastify";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./_Newsletter.scss";


export default function Newsletter() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    toast.success("Your email is submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const onError = () => {
    if (errors.email) {
      toast.error(errors.email.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
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
            >
              {" "}
              Subscribe{" "}
            </Button>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
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
