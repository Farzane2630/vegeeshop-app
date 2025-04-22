import { useForm } from "react-hook-form";
import { Button, TextField, Box } from "@mui/material";
// Styles
import "./_InfoTable.scss";
import showSuccessToast from "../../Utils/Toast/successToast";

export default function InputAdornments() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const submitForm = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data);
    showSuccessToast("Your information is submitted!")
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        className="form-container"
      >
        <div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("name", {
                required: "Name is Required!",
                minLength: { value: 4, message: "Name must contain at least 4 characters." }
              })}
              className="half-width"
              label="First name"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.name && (<p className="form-error-txt">{errors.name.message}</p>)}
          </div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("lastName", {
                required: "last name is Required!",
                minLength: { value: 4, message: "last name must contain at least 4 characters." }
              })}
              className="half-width"
              label="Last name"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.lastName && (<p className="form-error-txt">{errors.lastName.message}</p>)}
          </div>
        </div>
        <div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("country", {
                required: "Country is Required!",
                minLength: { value: 3, message: "Country must contain at least 3 characters." }
              })}
              className="full-width"
              label="Country / State"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.country && (<p className="form-error-txt">{errors.country.message}</p>)}
          </div>
        </div>
        <div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("street", {
                required: "Street is Required!",
                minLength: { value: 4, message: "Street must contain at least 4 characters." }
              })}
              className="half-width"
              label="Street Address"
              placeholder="House number and street"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.street && (<p className="form-error-txt">{errors.street.message}</p>)}
          </div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("appartment",{
                minLength: {value: 4, message: "Appartment must contain atleast 4 characters."}
              })}
              className="half-width"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              placeholder="Appartment,unit(etc):optional"
              />
              {errors.appartment && (<p className="form-error-txt">{errors.appartment.message}</p>)}
          </div>
        </div>
        <div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("city", {
                required: "City is Required!",
                minLength: { value: 4, message: "Street must contain at least 4 characters." }
              })}
              className="half-width"
              label="Town City"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.city && (<p className="form-error-txt">{errors.city.message}</p>)}
          </div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("postcode", {
                required: "Postcode is Required!",
                minLength: { value: 5, message: "Postcode must contain at least 5 characters." },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid postcade"
                }
              })}
              className="half-width"
              label="Postcode / ZIP *"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.postcode && (<p className="form-error-txt">{errors.postcode.message}</p>)}
          </div>
        </div>
        <div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("phone", {
                required: "Phone is Required!",
                minLength: { value: 7, message: "Street must contain at least 7 digits." },
                maxLength: { value: 20, message: "Street must not contain more than 20 digits." },
                pattern: {
                  value: /^\+?[\d\s\-()?.]{7,20}$/,
                  message: "Invalid phone number format"
                }
              })}
              className="half-width"
              label="Phone"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.phone && (<p className="form-error-txt">{errors.phone.message}</p>)}
          </div>
          <div className="form-inputs-Wrapper">
            <TextField
              {...register("email", {
                required: "email is Required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format."
                }
              })}
              className="half-width"
              label="Email Address"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
            />
            {errors.email && (<p className="form-error-txt">{errors.email.message}</p>)}
          </div>
        </div>
      </Box>
      <Button className="link-btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ?
          "Submitting ..."
          : "Submit Form"}
      </Button>
    </form>
  );
}
