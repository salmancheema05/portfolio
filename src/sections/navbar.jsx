import React from "react";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#32334C",
        pl: 10,
        pr: 20,
        height: 60,
        lineHeight: 1,
      }}
    >
      <p style={{ color: "white", fontSize: 20, fontWeight: 600 }}>SAC</p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto", // Pushes menu items to the right
          width: "50%", // Adjust width as needed
          lineHeight: 2,
        }}
      >
        <p style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Home</p>
        <p style={{ color: "white", fontSize: 16, fontWeight: 600 }}>About</p>
        <p style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Skills</p>
        <p style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Project</p>
      </Box>
    </Box>
  );
};

export default Navbar;
