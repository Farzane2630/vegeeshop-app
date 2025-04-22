import { Controller } from "react-hook-form";
import { TextField, Box } from "@mui/material";
// Styles
import "./_InfoTable.scss";

export default function InputAdornments({ control, errors }) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      className="form-container"
    >
      <div>
        <Controller control={control} name="name"
          rules={{
            required: "Name is Required!",
            min: { value: 4, message: "Name must contain at least 4 characters." }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="First name"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )} />

        <Controller
          control={control}
          name="lastName"
          rules={{
            required: "last name is Required!",
            minLength: { value: 4, message: "last name must contain at least 4 characters." }

          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Last name"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />)} />
      </div>
      <div>
        <Controller
          control={control}
          name="country"
          rules={{
            required: "Country is Required!",
            minLength: { value: 3, message: "Country must contain at least 3 characters." }
          }}
          render={({field}) => (
            <TextField
              {...field}
              className="full-width"
              label="Country / State"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          )} />
      </div>
      <div>
        <Controller
          control={control}
          name="street"
          rules={{
            required: "Street is Required!",
            minLength: { value: 4, message: "Street must contain at least 4 characters." }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Street Address"
              placeholder="House number and street"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.street}
              helperText={errors.street?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="appartment"
          rules={{
            minLength: { value: 4, message: "Appartment must contain atleast 4 characters." }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              placeholder="Appartment,unit(etc):optional"
              error={!!errors.appartment}
              helperText={errors.appartment?.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="city"
          rules={{
            required: "City is Required!",
            minLength: { value: 4, message: "Street must contain at least 4 characters." }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Town City"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.city}
              helperText={errors.city?.message}
            />)} />
        <Controller
          control={control}
          name="postcode"
          rules={{
            required: "Postcode is Required!",
            minLength: { value: 5, message: "Postcode must contain at least 5 characters." },
            pattern: {
              value: /^[0-9]+$/,
              message: "Invalid postcade"
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Postcode / ZIP *"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.postcode}
              helperText={errors.postcode?.message}
            />)} />
      </div>
      <div>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "email is Required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format."
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Email Address"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.email}
              helperText={errors.email?.message}
            />)} />
        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Phone is Required!",
            minLength: { value: 7, message: "Street must contain at least 7 digits." },
            maxLength: { value: 20, message: "Street must not contain more than 20 digits." },
            pattern: {
              value: /^\+?[\d\s\-()?.]{7,20}$/,
              message: "Invalid phone number format"
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className="half-width"
              label="Phone"
              id="outlined-start-adornment"
              sx={{ m: 1 }}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />)} />
      </div>
    </Box >
  );
}
