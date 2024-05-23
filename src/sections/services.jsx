import React from "react";
import { Box, Grid } from "@mui/material";
import DefaultHeadings from "../components/headings";
import DefaultBox from "../components/box";
import DefaultParagraph, { SectionParagraph } from "../components/paragraph";
import useResponsive from "../hook/useResponsive";
const Services = () => {
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Box bgcolor="#050709" pb={10} id="services">
      <DefaultBox>
        <Box pt={5} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <DefaultHeadings tag="h3" textposition="center">
                My Quality Services
              </DefaultHeadings>
              <SectionParagraph
                text1=" We put your ideas and thus your wishes in the form of a unique
                web project that"
                text2="inspires you and you customers."
                text3="We put your ideas and thus your wishes in the form of a unique
              web project that inspires you and you customers."
              />
            </Grid>
          </Grid>
          <Grid mt={10}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen
                    ? "column"
                    : isExtraSmallScreen
                    ? "column"
                    : "row",
                  p: isSmallScreen ? 2 : isExtraSmallScreen ? 2 : null,
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                  },
                }}
              >
                <Box
                  sx={{
                    display: isSmallScreen
                      ? "none"
                      : isExtraSmallScreen
                      ? "none"
                      : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10%",
                  }}
                >
                  <DefaultParagraph color="#8750f7">01</DefaultParagraph>
                </Box>
                <Box
                  sx={{
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "40%",
                  }}
                  display="flex"
                  alignItems="center"
                >
                  <DefaultParagraph
                    fontSize={35}
                    style={{
                      fontSize: isSmallScreen ? 35 : 25,
                    }}
                  >
                    Web Development (Mern Stack)
                  </DefaultParagraph>
                </Box>
                <Box
                  fontWeight={300}
                  mb={2}
                  sx={{
                    boxSizing: "content-box",
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "50%",
                    mt: isSmallScreen ? 3 : isExtraSmallScreen ? 3 : 0,
                  }}
                >
                  <DefaultParagraph fontWeight={500}>
                    I can create a website using MongoDB for data storage,
                    Express.js and Node.js for backend logic, and React.js for
                    building dynamic user interfaces.
                  </DefaultParagraph>
                </Box>
              </Box>
              <Box
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen
                    ? "column"
                    : isExtraSmallScreen
                    ? "column"
                    : "row",
                  p: isSmallScreen ? 2 : isExtraSmallScreen ? 2 : null,
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                  },
                }}
              >
                <Box
                  sx={{
                    display: isSmallScreen
                      ? "none"
                      : isExtraSmallScreen
                      ? "none"
                      : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10%",
                  }}
                >
                  <DefaultParagraph color="#8750f7">02</DefaultParagraph>
                </Box>
                <Box
                  sx={{
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "40%",
                  }}
                  display="flex"
                  alignItems="center"
                >
                  <DefaultParagraph
                    fontSize={35}
                    style={{
                      fontSize: isSmallScreen ? 35 : 25,
                    }}
                  >
                    Web Development (React Js)
                  </DefaultParagraph>
                </Box>
                <Box
                  fontWeight={300}
                  mb={2}
                  sx={{
                    boxSizing: "content-box",
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "50%",
                    mt: isSmallScreen ? 3 : isExtraSmallScreen ? 3 : 0,
                  }}
                >
                  <DefaultParagraph fontWeight={500}>
                    React.js simplifies UI development through its
                    component-based architecture, enhancing interactivity and
                    responsiveness in web applications.
                  </DefaultParagraph>
                </Box>
              </Box>
              <Box
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen
                    ? "column"
                    : isExtraSmallScreen
                    ? "column"
                    : "row",
                  p: isSmallScreen ? 2 : isExtraSmallScreen ? 2 : null,
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                  },
                }}
              >
                <Box
                  sx={{
                    display: isSmallScreen
                      ? "none"
                      : isExtraSmallScreen
                      ? "none"
                      : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10%",
                  }}
                >
                  <DefaultParagraph color="#8750f7">03</DefaultParagraph>
                </Box>
                <Box
                  sx={{
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "40%",
                  }}
                  display="flex"
                  alignItems="center"
                >
                  <DefaultParagraph
                    fontSize={35}
                    style={{
                      fontSize: isSmallScreen ? 35 : 25,
                    }}
                  >
                    Mobile APP Development (React Native)
                  </DefaultParagraph>
                </Box>
                <Box
                  fontWeight={300}
                  mb={2}
                  sx={{
                    boxSizing: "content-box",
                    width: isSmallScreen
                      ? "100%"
                      : isExtraSmallScreen
                      ? "100%"
                      : "50%",
                    mt: isSmallScreen ? 3 : isExtraSmallScreen ? 3 : 0,
                  }}
                >
                  <DefaultParagraph fontWeight={500}>
                    React Native enables cross-platform mobile app development
                    with JavaScript, facilitating code sharing and faster
                    development cycles across iOS and Android platforms.
                  </DefaultParagraph>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DefaultBox>
    </Box>
  );
};

export default Services;
