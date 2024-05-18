import React from "react";
import { Box, Grid } from "@mui/material";
import DefaultHeadings from "../components/headings";
import DefaultBox from "../components/box";
import DefaultParagraph from "../components/paragraph";
const Services = () => {
  return (
    <Box bgcolor="#050709" pb={20} id="services">
      <DefaultBox>
        <Box pt={5} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <DefaultHeadings tag="h3" textposition="center">
                My Quality Services
              </DefaultHeadings>
              <Box mt={5} textAlign="center">
                <DefaultParagraph>
                  We put your ideas and thus your wishes in the form of a unique
                  web project that
                </DefaultParagraph>
              </Box>
              <Box textAlign="center" mt={1}>
                <DefaultParagraph>
                  inspires you and you customers.
                </DefaultParagraph>
              </Box>
            </Grid>
          </Grid>
          <Grid mt={10}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box
                display="flex"
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                    color: "red",
                    "& > *": {
                      color: "red", // Change DefaultParagraph text color to red on hover
                    },
                  },
                }}
              >
                <Box
                  width={"10%"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <DefaultParagraph color="#8750f7">01</DefaultParagraph>
                </Box>
                <Box width={"50%"} display="flex" alignItems="center">
                  <DefaultParagraph fontSize={35}>
                    Web Deveroper full Stack
                  </DefaultParagraph>
                </Box>
                <Box
                  width={"40%"}
                  fontWeight={300}
                  mb={2}
                  sx={{ boxSizing: "content-box" }}
                >
                  <DefaultParagraph fontWeight={500}>
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </DefaultParagraph>
                </Box>
              </Box>
              <Box
                display="flex"
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                    color: "red",
                  },
                }}
              >
                <Box
                  width={"10%"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <DefaultParagraph color="#8750f7">01</DefaultParagraph>
                </Box>
                <Box width={"50%"} display="flex" alignItems="center">
                  <DefaultParagraph fontSize={35}>
                    Web Deveroper full Stack
                  </DefaultParagraph>
                </Box>
                <Box
                  width={"40%"}
                  fontWeight={300}
                  mb={2}
                  sx={{ boxSizing: "content-box" }}
                >
                  <DefaultParagraph fontWeight={500}>
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </DefaultParagraph>
                </Box>
              </Box>
              <Box
                display="flex"
                borderBottom={1}
                borderColor="#8750f7"
                mb={3}
                sx={{
                  transition: "all 0.5s",
                  "&:hover": {
                    bgcolor: "#8750f7",
                    color: "red",
                  },
                }}
              >
                <Box
                  width={"10%"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <DefaultParagraph color="#8750f7">01</DefaultParagraph>
                </Box>
                <Box width={"50%"} display="flex" alignItems="center">
                  <DefaultParagraph fontSize={35}>
                    Web Deveroper full Stack
                  </DefaultParagraph>
                </Box>
                <Box
                  width={"40%"}
                  fontWeight={300}
                  mb={2}
                  sx={{ boxSizing: "content-box" }}
                >
                  <DefaultParagraph fontWeight={500}>
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
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
