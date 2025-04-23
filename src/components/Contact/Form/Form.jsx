import { Grid, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"

// styles
import "./_Form.scss"
import showSuccessToast from "../../../Utils/Toast/successToast"

function Form() {
   const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
      defaultValues: {
         name: "",
         email: "",
         subject: "",
         message: ""
      }
   })

   const submitForm = async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 3000))

      showSuccessToast("Your message has been sent Successfully!")

      reset()

   }
   return (
      <Grid item xs={12} lg={6} className="contact-form-container">
         <form onSubmit={handleSubmit(submitForm)}>
            <TextField
               {...register("name", {
                  required: "This field is required!",
                  min: { value: 3, message: "Name must contain atleast 3 charachters." }
               })}
               label="Your Name"
               id="margin-normal"
               margin="normal"
               fullWidth
               error={!!errors.name}
               helperText={errors.name?.message}
            />
            <TextField
               {...register("email", {
                  required: "This field is required!",
                  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format!" }
               })}
               label="Your Email"
               id="margin-normal"
               margin="normal"
               fullWidth
               error={!!errors.email}
               helperText={errors.email?.message} />
            <TextField
               {...register("subject", {
                  required: false,
                  minLength: { value: 4, message: "Subject must contain atleast 4 charachters." }
               })}
               label="Subject"
               id="margin-normal"
               margin="normal"
               fullWidth
               error={!!errors.subject}
               helperText={errors.subject?.message} />

            <div className="form-inputs-wrapper">

               <textarea
                  {...register("message", {
                     required: "This field is required!",
                     minLength: { value: 15, message: "Message must contain atleast 15 charachters." }
                  })}
                  className="msg-txtaria"
                  minRows={3}
                  placeholder="Message"
               />
               {errors.message && <p>{errors.message.message}</p>}
            </div>
            <Button
               type="submit"
               variant="contained"
               className="order-btn send-btn link link-btn"
               disabled={isSubmitting}
            >
               {
                  isSubmitting ? "Submitting" : "Send Message"
               }
            </Button>
         </form>
      </Grid>
   )
}

export default Form