import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import MyPic from "../images/mypic.png";
const Header = () => {
  return (
    <Box bgcolor="#32334C">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={7} lg={7} xl={7}>
          <Box
            sx={{
              pl: 10,
              pr: 20,
              height: "78.1vh",
              pt: 10,
            }}
          >
            <Box>
              <Typography variant="p" color="white" fontWeight="600">
                Salman Akbar Cheema
              </Typography>
            </Box>
            <Box fontSize={30}>
              <Typography variant="h3" mt={3} color="white" fontWeight="700">
                CREATIVE WEB & APP
              </Typography>
              <Typography variant="h3" mt={3} color="white" fontWeight="700">
                DEVELOPER BASED
              </Typography>
              <Typography variant="h3" mt={3} color="white" fontWeight="700">
                IN Pakistan
              </Typography>
            </Box>
            <Box mt={10} fontSize={30}>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  height: "50px",
                  "&:hover": {
                    borderColor: "white",
                    background: "white",
                    color: "#32334C",
                  },
                }}
              >
                See My Project
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  ml: 3,
                  borderColor: "white",
                  height: "50px",
                  "&:hover": {
                    borderColor: "white",
                    background: "white",
                    color: "#32334C",
                  },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
          <img src={MyPic} width="100%" height="570" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
