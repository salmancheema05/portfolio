import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import MyPic from "../images/mypic.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import DefaultHeadings from "../components/headings";
import DefaultIcon from "../components/icon";
import DefaultParagraph from "../components/paragraph";
import DefaultBox from "../components/box";

const Header = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(125deg, #110717 50%,#8750f7 )",
      }}
    >
      <DefaultBox>
        <Box pt={10} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={5} xl={5}>
              <Box>
                <Typography variant="h5" color="white" fontWeight={700}>
                  I am Salman Akbar
                </Typography>
              </Box>
              <Box mt={3}>
                <DefaultHeadings tag="h1">React Developer +</DefaultHeadings>
                <DefaultHeadings tag="h1">React Native</DefaultHeadings>
              </Box>
              <Box mt={3}>
                <DefaultParagraph>
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </DefaultParagraph>
              </Box>
              <Box mt={5} display="flex">
                <Box>
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
                <Box
                  ml={2}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <DefaultIcon icon={<FaFacebookF fontSize={18} />} />
                  <DefaultIcon icon={<IoLogoGithub fontSize={18} />} />
                  <DefaultIcon icon={<FaLinkedinIn fontSize={18} />} />
                  <DefaultIcon icon={<FaTwitter fontSize={18} />} />
                </Box>
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
                width={300}
                height={400}
                border={2}
                borderRadius={5}
                mb={4.1}
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
      </DefaultBox>
    </Box>
  );
};

export default Header;