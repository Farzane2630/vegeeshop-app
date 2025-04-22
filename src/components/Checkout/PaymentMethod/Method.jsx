import {FormControl, RadioGroup,FormControlLabel, FormLabel, Radio} from "@mui/material"
import { Controller } from "react-hook-form"

function Method({control}) {
  return (
        <FormControl>
           <FormLabel
              id="demo-radio-buttons-group-label"
              className="form-control-label"
           >
              <em>Payment Method</em>
           </FormLabel>
           <Controller control={control} name="method"
              render={({ field }) => (
                 <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="direct"
                    name="radio-buttons-group"
                    {...field}
                 >
                    <FormControlLabel
                       className="radio-btns"
                       value="direct"
                       control={<Radio />}
                       label="Direct Bank Transfer"
                    />
                    <FormControlLabel
                       className="radio-btns"
                       value="check"
                       control={<Radio />}
                       label="Check Payment"
                    />
                    <FormControlLabel
                       className="radio-btns"
                       value="paypal"
                       control={<Radio />}
                       label="Paypal"
                    />
                 </RadioGroup>
              )} />
        </FormControl>
  )
}

export default Method