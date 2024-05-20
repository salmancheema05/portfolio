import React from "react";
import useResponsive from "../hook/useResponsive";
import { Typography } from "@mui/material";
const DefaultParagraph = ({ children, ...rest }) => {
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Typography
      variant="p"
      color="white"
      fontSize={20}
      fontWeight={500}
      sx={{
        fontSize: isSmallScreen ? 14 : isExtraSmallScreen ? 12 : 20,
        ...rest,
      }}
    >
      {children}
    </Typography>
  );
};

export default DefaultParagraph;
