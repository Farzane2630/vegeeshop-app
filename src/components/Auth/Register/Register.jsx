import "./_Register.scss"
import { Link } from 'react-router-dom'
import RegisterForm from "./RegisterForm"
import { Container, Box, Typography } from "@mui/material"

function Register() {
   return (
      <Container md={1} className='register_component'>
         <Box
            id="register_page_image"
            sx={{
               width: '50%',
               height: '100dvh',
               display: { xs: 'none', md: 'block' }, // Hide on small, show on md+
            }}
         >
            <img src="/images/category-1.jpg" alt="vegetable basket" className='register_banner' />
         </Box>
         <Box
            id="register-page-form_section"
            sx={{
               width: { xs: '100%', md: '50%' },
               height: '100dvh',
               padding: 4,
            }}
         >
            <Link to="/" className='logo' title="back to home" >
               <Typography variant="h4" className="logo" fontWeight="bold">
                  VEGEEFOOD
               </Typography>
            </Link>

            <RegisterForm />
         </Box>
      </Container>
   )
}

export default Register