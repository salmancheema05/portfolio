import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import MyPic from "../images/mypic.png";
const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(125deg, #110717 50%,#8750f7 )",
      }}
    >
      <Box ml={10} mr={10}>
        <Box pt={10} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={5} xl={5}>
              <Typography variant="h5" color="white" fontWeight={700}>
                I am Salman Akbar
              </Typography>
              <h1
                style={{
                  background:
                    "-webkit-linear-gradient(90deg, #8e59f8  ,#e5dafd )",
                  webkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  marginTop: 5,
                  fontSize: 50,
                }}
              >
                React Developer +
              </h1>
              <h1
                style={{
                  background:
                    "-webkit-linear-gradient(90deg, #8e59f8  ,#e5dafd )",
                  webkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                  marginTop: 5,
                  fontSize: 50,
                }}
              >
                React Native
              </h1>
              <Typography
                variant="p"
                color="white"
                fontSize={20}
                fontWeight={500}
              >
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </Typography>
              <Box mt={5}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#8750f7",
                    color: "#8750f7",
                    height: 50,
                    width: 200,
                    borderRadius: 50,
                    "&:hover": {
                      bgcolor: "#8750f7",
                      color: "white",
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={7}
              xl={7}
              display="flex"
              justifyContent="center"
            >
              <Box
                width={250}
                height={300}
                border={2}
                borderRadius={5}
                sx={{
                  transform: "rotate(20deg)",
                  transition: "transform 0.3s",
                  borderColor: "#110717",
                  "&:hover": {
                    transform: "rotate(0deg)", // Rotate the Box by 45 degrees on hover
                    borderColor: "#8750f7",
                  },
                }}
              >
                <img src={MyPic} width="100%" height="100%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
