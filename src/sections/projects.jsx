import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import App1 from "../images/app1.jpeg";
import App2 from "../images/app2.jpeg";
const Projects = () => {
  return (
    <Box pl={10} pr={10} bgcolor="#222222">
      <Box pt={10} pb={10}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={12} lg={12} xl={12} mb={5}>
            <Box>
              <Typography variant="h3" color="white">
                Projects
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <img src={Web1} width="100%" height="300" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <img src={Web2} width="100%" height="300" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <img src={App1} width="400" height="600" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <img src={App2} width="400" height="600" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
