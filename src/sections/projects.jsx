import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Web1 from "../images/web1.png";
import Web2 from "../images/web2.png";
import App1 from "../images/app1.jpeg";
import App2 from "../images/app2.jpeg";
import DefaultHeadings from "../components/headings";
import DefaultBox from "../components/box";
import DefaultParagraph, { SectionParagraph } from "../components/paragraph";
const Projects = () => {
  return (
    <Box bgcolor="#0f0716" pb={10} id="work">
      <DefaultBox>
        <Box pt={5} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <DefaultHeadings tag="h3" textposition="center">
                My Recent Works
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
          <Grid container spacing={5} mt={5}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box
                bgcolor="#140c1c"
                width="100%"
                borderRadius={5}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    "&  .overlay": {
                      bottom: 0,
                    },
                  },
                }}
              >
                <Box p={4} height={225}>
                  <img src={Web1} width="100%" height="100%" />
                </Box>
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    bottom: "-100%",
                    width: "88%",
                    height: "100%",
                    p: 2,
                    transition: "bottom 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      background:
                        "linear-gradient(125deg,#8750f7  50%,#110717 )",
                      width: "100%",
                      height: "20%",
                      borderRadius: 5,
                      p: 2,
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <DefaultParagraph>
                      Doctor Web App Light Mode
                    </DefaultParagraph>
                    <Box sx={{ cursor: "pointer" }}>
                      <DefaultParagraph>Preview</DefaultParagraph>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box
                bgcolor="#140c1c"
                width="100%"
                borderRadius={5}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    "&  .overlay": {
                      bottom: 0,
                    },
                  },
                }}
              >
                <Box p={4} height={225}>
                  <img src={Web2} width="100%" height="100%" />
                </Box>
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    bottom: "-100%",
                    width: "88%",
                    height: "100%",
                    p: 2,
                    transition: "bottom 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      background:
                        "linear-gradient(125deg,#8750f7  50%,#110717 )",
                      width: "100%",
                      height: "20%",
                      borderRadius: 5,
                      p: 2,
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <DefaultParagraph>
                      Doctor Web App Dark Mode
                    </DefaultParagraph>
                    <Box sx={{ cursor: "pointer" }}>
                      <DefaultParagraph>Preview</DefaultParagraph>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DefaultBox>
    </Box>
  );
};

export default Projects;
