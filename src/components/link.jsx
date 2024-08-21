import React from "react";
import useResponsive from "../hook/useResponsive";
import { Typography, Box, Link } from "@mui/material";
const DefaultLink = ({ path }) => {
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Link
      href={path}
      underline="none"
      sx={{ color: "white", fontWeight: "bold", fontSize: 25 }}
    >
      {"Preview"}
    </Link>
  );
};

export { DefaultLink };
