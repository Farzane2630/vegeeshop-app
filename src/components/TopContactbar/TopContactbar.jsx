import React from "react";
import Box from "@mui/material/Box";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import Grid from '@mui/material/Grid';
// Styles
import "./_TopContactbar.scss";

export default function TopContactbar() {
  return (
    <Box className="topbar-contact-container">
      <Grid container>

        <Grid xs={12} md={4} className="topbar-contact-info">
          <span className="phone-icon">
            <PhoneEnabledIcon />
          </span>
          + 49 157 5599 1926
        </Grid>

        <Grid xs={12} md={4} className="topbar-contact-info">
          <span className="phone-icon">
            <MailIcon />
          </span>
          <a target="_blank" rel="noopener noreferrer" href="mailto:farzanekazemi8517@gmail.com" className="link">
            farzanekazemi8517@gmail.com
            </a>
        </Grid>
        <Grid xs={12} md={4} className="topbar-contact-info">
          3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
        </Grid>
      </Grid>
    </Box>
  );

}
