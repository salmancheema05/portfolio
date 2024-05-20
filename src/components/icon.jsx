import React from "react";
import { Box } from "@mui/material";
const DefaultIcon = ({ icon }) => {
  return (
    <Box
      width={40}
      height={40}
      border={1}
      borderColor="#8750f7"
      borderRadius={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="#8750f7"
      sx={{
        cursor: "pointer",
        "&:hover": {
          bgcolor: "#8750f7",
          color: "white",
        },
      }}
    >
      {icon}
    </Box>
  );
};

export default DefaultIcon;
