import React from "react";
import { Box } from "@mui/material";
import useResponsive from "../hook/useResponsive";
const DefaultBox = ({ children }) => {
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Box
      sx={{
        pl: isExtraSmallScreen ? 2.5 : isSmallScreen ? 5 : 10,
        pr: isExtraSmallScreen ? 2.5 : isSmallScreen ? 5 : 10,
      }}
    >
      {children}
    </Box>
  );
};

export default DefaultBox;
