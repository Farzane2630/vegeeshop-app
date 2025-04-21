import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./_InfoTable.scss";

export default function InputAdornments({ register }) {

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      className="form-container"
    >
      <div>
        <TextField
          {...register("firstName")}
          required
          className="half-width"
          label="First name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          required
          className="half-width"
          label="Last name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
        <TextField
          {...register("country")}
          required
          className="full-width"
          label="Country / State"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
        <TextField
          {...register("street")}
          required
          className="half-width"
          label="Street Address"
          placeholder="House number and street"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          {...register("appartment")}
          className="half-width"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          placeholder="Appartment,unit(etc):optional"
        />
      </div>
      <div>
        <TextField
          {...register("city")}
          required
          className="half-width"
          label="Town City"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          {...register("postcode")}
          required
          className="half-width"
          label="Postcode / ZIP *"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
      <div>
        <TextField
          {...register("phone")}
          required
          className="half-width"
          label="Phone"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
        <TextField
          {...register("email")}
          required
          className="half-width"
          label="Email Address"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
        />
      </div>
    </Box>
  );
}
