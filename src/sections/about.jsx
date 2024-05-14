import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MyPic from "../images/mypic.png";
const About = () => {
  return (
    <Box pl={10} pr={10} bgcolor="#222222">
      <Box pt={10} pb={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box height={300}>
              <img src={MyPic} width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
            <Box mt={2} ml={5} mr={5}>
              <Typography variant="h4" mb={5} color="white">
                About Me
              </Typography>
              <Typography variant="p" fontSize={20} color="white">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Typography>
            </Box>
            <Box mt={4} ml={5} mr={5}>
              <Typography variant="p" fontSize={20} color="white">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
