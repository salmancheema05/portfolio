import React from "react";
import { Box } from "@mui/material";
const DefaultBox = ({ children }) => {
  return (
    <Box pl={10} pr={10}>
      {children}
    </Box>
  );
};

export default DefaultBox;
