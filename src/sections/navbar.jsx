import React, { useState } from "react";
import { Box } from "@mui/material";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedMenu(sectionId);
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: "linear-gradient(150deg, #110717 66%,#8750f7  )",
        position: "fixed",
        top: 0,
        width: "90%",
        pl: 5,
        pr: 20,
        height: 60,
        lineHeight: 1,
        pt: 3,
        justifyContent: "space-around",
        zIndex: 1,
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
          zIndex: 100,
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            height: 30,
            borderBottom: selectedMenu == "home" ? "1px solid white" : null,
          }}
          onClick={() => handleScroll("home")}
        >
          Home
        </p>
        <p
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            height: 30,
            borderBottom: selectedMenu == "services" ? "1px solid white" : null,
          }}
          onClick={() => handleScroll("services")}
        >
          Services
        </p>
        <p
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            height: 30,
            borderBottom: selectedMenu == "skills" ? "1px solid white" : null,
          }}
          onClick={() => handleScroll("skills")}
        >
          Skills
        </p>
        <p
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            height: 30,
            borderBottom: selectedMenu == "work" ? "1px solid white" : null,
          }}
          onClick={() => handleScroll("work")}
        >
          Work
        </p>
      </Box>
    </Box>
  );
};

export default Navbar;
