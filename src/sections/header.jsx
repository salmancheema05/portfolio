import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import MyPic from "../images/mypic.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import DefaultHeadings from "../components/headings";
import DefaultIcon from "../components/icon";
import DefaultParagraph from "../components/paragraph";
import DefaultBox from "../components/box";
import useResponsive from "../hook/useResponsive";
const Header = () => {
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  const downloadCv = () => {
    const pdfUrl = "https://portfolio-ng32.onrender.com/cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      sx={{
        background: "linear-gradient(125deg, #110717 50%,#8750f7 )",
        mt: 10,
      }}
      id="home"
    >
      <DefaultBox>
        <Box pt={10} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={5} xl={5}>
              <Box>
                <Typography variant="h5" color="white" fontWeight={700}>
                  I am Salman Akbar
                </Typography>
              </Box>
              <Box mt={3}>
                <DefaultHeadings
                  tag="h1"
                  styles={{
                    fontSize: isSmallScreen
                      ? 70
                      : isExtraSmallScreen
                      ? 35
                      : isMediumScreen
                      ? 40
                      : 50,
                  }}
                >
                  React Developer +
                </DefaultHeadings>
                <DefaultHeadings
                  tag="h1"
                  styles={{
                    fontSize: isSmallScreen
                      ? 70
                      : isExtraSmallScreen
                      ? 35
                      : isMediumScreen
                      ? 40
                      : 50,
                  }}
                >
                  React Native
                </DefaultHeadings>
              </Box>
              <Box mt={3}>
                <DefaultParagraph
                  style={{
                    fontSize: isExtraSmallScreen ? 16 : 20,
                  }}
                >
                  I develop customized web and mobile applications tailored to
                  your business needs, enhancing your digital presence and user
                  experience.
                </DefaultParagraph>
              </Box>
              <Box
                mt={5}
                sx={{
                  display: "flex",
                  flexDirection: isExtraSmallScreen ? "column" : "row",
                }}
              >
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
                    onClick={() => downloadCv()}
                  >
                    Download CV
                  </Button>
                </Box>
                <Box
                  width="100%"
                  display="flex"
                  sx={{
                    mt: isExtraSmallScreen ? 4 : 0,
                    ml: isExtraSmallScreen ? 0 : 4,
                    justifyContent: "space-between",
                  }}
                >
                  <DefaultIcon icon={<FaFacebookF fontSize={18} />} />
                  <DefaultIcon
                    icon={<IoLogoGithub fontSize={18} />}
                    link="https://github.com/salmancheema05"
                  />
                  <DefaultIcon
                    icon={<FaLinkedinIn fontSize={18} />}
                    link="https://www.linkedin.com/in/salman-akbar-8a983a27a/"
                  />
                  <DefaultIcon
                    icon={<FaInstagram fontSize={18} />}
                    link="https://www.instagram.com/salmanakbar3731/"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={5}
              lg={7}
              xl={7}
              display="flex"
              justifyContent="center"
            >
              <Box
                border={2}
                borderRadius={5}
                sx={{
                  width: isMediumScreen ? 250 : 300,
                  height: isMediumScreen ? 350 : 400,
                  display: isSmallScreen
                    ? "none"
                    : isExtraSmallScreen
                    ? "none"
                    : "block",
                  transform: "rotate(20deg)",
                  transition: "transform 0.3s",
                  borderColor: "#110717",
                  mb: 4,

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
