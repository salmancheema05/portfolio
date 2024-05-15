import React from "react";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: "linear-gradient(150deg, #110717 66%,#8750f7  )",
        pl: 10,
        pr: 20,
        height: 60,
        lineHeight: 1,
        pt: 3,
      }}
    >
      <Box display="flex">
        <p style={{ color: "white", fontSize: 50, fontWeight: 600 }}>S</p>
        <p style={{ color: "white", marginLeft: 30, marginTop: 20 }}>
          salmanakbartnt12@gmail.com
        </p>
      </Box>

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
