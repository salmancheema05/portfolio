import React from "react";

import { Typography } from "@mui/material";
const DefaultParagraph = ({ children, ...rest }) => {
  return (
    <Typography
      variant="p"
      color="white"
      fontSize={20}
      fontWeight={500}
      sx={{ ...rest }}
    >
      {children}
    </Typography>
  );
};

export default DefaultParagraph;
