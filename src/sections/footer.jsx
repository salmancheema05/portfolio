import React from "react";
import { Box, Typography, Grid } from "@mui/material";
const Footer = () => {
  return (
    <Box bgcolor="#0f0716">
      <Box pt={3} pb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
            <Typography variant="h5" color="white" textAlign="center">
              Salman Akbar Cheema developer is available for you
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;