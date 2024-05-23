import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import useResponsive from "../hook/useResponsive";
const Footer = () => {
  const { isExtraSmallScreen } = useResponsive();
  return (
    <Box bgcolor="#0f0716">
      <Box pt={3} pb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              variant="h5"
              color="white"
              textAlign="center"
              sx={{ fontSize: isExtraSmallScreen ? 18 : null }}
            >
              I am available to develop your website and mobile app.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
