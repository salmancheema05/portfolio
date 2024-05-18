import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Line, Circle } from "rc-progress";
import DefaultCircularProgressBar from "./circularProgressbar";
import DefaultBox from "../components/box";
import DefaultHeading from "../components/headings";
import DefaultParagraph from "../components/paragraph";

const Skills = () => {
  return (
    <Box bgcolor="#050709" pb={20}>
      <DefaultBox>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
            <DefaultHeading tag="h3" textposition="center">
              My Skills
            </DefaultHeading>
            <Box mt={3} textAlign="center">
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

        <Grid container spacing={5} mt={5}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box width="100%" height="400px" bgcolor="#140c1c" borderRadius={5}>
              <Box textAlign="center" pt={5}>
                <Typography variant="h4" mb={5} color="white">
                  React JS
                </Typography>
              </Box>
              <Box width={200} height={100} ml="25%">
                <DefaultCircularProgressBar percentage={95} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box width="100%" height="400px" bgcolor="#140c1c" borderRadius={5}>
              <Box textAlign="center" pt={5}>
                <Typography variant="h4" mb={5} color="white">
                  React Native
                </Typography>
              </Box>
              <Box width={200} height={100} ml="25%">
                <DefaultCircularProgressBar percentage={90} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box width="100%" height="400px" bgcolor="#140c1c" borderRadius={5}>
              <Box textAlign="center" pt={5}>
                <Typography variant="h4" mb={5} color="white">
                  TypeScript
                </Typography>
              </Box>
              <Box width={200} height={100} ml="25%">
                <DefaultCircularProgressBar percentage={95} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={8}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <Typography variant="h6" color="white">
                HTML 5
              </Typography>
              <Box display="flex" flexDirection="row" mt={2}>
                <Line
                  percent={95}
                  strokeWidth={1}
                  strokeColor="#8750f7"
                  trailColor="gray"
                  height={10}
                />
                <Typography variant="h6" color="white" mt={-1.5} ml={1}>
                  95%
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <Typography variant="h6" color="white">
                CSS 3
              </Typography>
              <Box display="flex" flexDirection="row" mt={2}>
                <Line
                  percent={90}
                  strokeWidth={1}
                  strokeColor="#8750f7"
                  trailColor="gray"
                  height={10}
                />
                <Typography variant="h6" color="white" mt={-1.5} ml={1}>
                  90%
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <Typography variant="h6" color="white">
                Reusable Component
              </Typography>
              <Box display="flex" flexDirection="row" mt={2}>
                <Line
                  percent={95}
                  strokeWidth={1}
                  strokeColor="#8750f7"
                  trailColor="gray"
                  height={10}
                />
                <Typography variant="h6" color="white" mt={-1.5} ml={1}>
                  95%
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box>
              <Typography variant="h6" color="white">
                MUI
              </Typography>
              <Box display="flex" flexDirection="row" mt={2}>
                <Line
                  percent={85}
                  strokeWidth={1}
                  strokeColor="#8750f7  "
                  trailColor="gray"
                  height={10}
                />
                <Typography variant="h6" color="white" mt={-1.5} ml={1}>
                  85%
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DefaultBox>
    </Box>
  );
};

export default Skills;
