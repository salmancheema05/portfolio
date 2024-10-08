import React from "react";
import useResponsive from "../hook/useResponsive";
import { Typography, Box } from "@mui/material";
const DefaultParagraph = ({ children, style, handler = null }) => {
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Typography
      variant="p"
      color="white"
      fontWeight={500}
      sx={{
        fontSize: isSmallScreen ? 14 : isExtraSmallScreen ? 12 : 20,
        cursor: handler ? "pointer" : null,
        ...style,
      }}
      onClick={handler}
    >
      {children}
    </Typography>
  );
};
export const SectionParagraph = ({ text1, text2, text3 }) => {
  const { isExtraSmallScreen } = useResponsive();
  return (
    <>
      <Box
        mt={3}
        textAlign="center"
        sx={{ display: isExtraSmallScreen ? "none" : null }}
      >
        <DefaultParagraph>{text1}</DefaultParagraph>
      </Box>
      <Box
        textAlign="center"
        mt={1}
        sx={{ display: isExtraSmallScreen ? "none" : null }}
      >
        <DefaultParagraph>{text2}</DefaultParagraph>
      </Box>
      <Box
        sx={{
          display: isExtraSmallScreen ? "block" : "none",
          mt: 3,
          textAlign: "center",
        }}
      >
        <DefaultParagraph>{text3}</DefaultParagraph>
      </Box>
    </>
  );
};
export default DefaultParagraph;
