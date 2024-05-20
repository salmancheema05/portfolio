import React, { useState } from "react";
import { Box } from "@mui/material";
import useResponsive from "../hook/useResponsive";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const [toggle, setToggle] = useState("none");
  const { isSmallScreen, isMediumScreen, isExtraSmallScreen } = useResponsive();
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedMenu(sectionId);
      setToggle("none");
    }
  };
  const handleToggle = () => {
    setToggle((prev) => (prev === "none" ? "flex" : "none")); // Toggle between "none" and "flex"
  };
  return (
    <Box
      sx={{
        display: isSmallScreen
          ? "block"
          : isExtraSmallScreen
          ? "block"
          : "flex",
        backgroundImage: "linear-gradient(150deg, #110717 66%,#8750f7  )",
        position: "fixed",
        top: 0,

        width: "100%",
        pl: isSmallScreen ? 0 : isExtraSmallScreen ? 0 : 10,
        pr: isSmallScreen ? 0 : isExtraSmallScreen ? 0 : 10,
        height: 60,
        lineHeight: 1,
        pt: 3,
        zIndex: 1,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            width: isSmallScreen ? "100%" : isExtraSmallScreen ? "100%" : "30%",
            justifyContent: isSmallScreen
              ? "center"
              : isExtraSmallScreen
              ? "center"
              : null,
          }}
        >
          <p style={{ color: "white", fontSize: 50, fontWeight: 600 }}>S</p>
          <p
            style={{
              color: "white",
              marginLeft: isExtraSmallScreen ? 10 : 30,
              marginTop: 20,
            }}
          >
            salmanakbartnt12@gmail.com
          </p>
        </Box>
        <Box>
          <MenuIcon
            sx={{
              color: "white",
              mt: 2,
              mr: 2,
              display: isSmallScreen
                ? "block"
                : isExtraSmallScreen
                ? "block"
                : "none",
            }}
            onClick={() => handleToggle()}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: isSmallScreen
            ? toggle
            : isExtraSmallScreen
            ? toggle
            : "flex",
          backgroundImage: isSmallScreen
            ? "linear-gradient(to right, #110717 50%,#8750f7  )"
            : isExtraSmallScreen
            ? "linear-gradient(to right, #110717 50%,#8750f7  )"
            : null,
          height: isSmallScreen ? 330 : isExtraSmallScreen ? 330 : null,
          mt: isSmallScreen ? 1 : isExtraSmallScreen ? 1 : null,
          ml: isSmallScreen ? 0 : isExtraSmallScreen ? 0 : 15,

          width: isSmallScreen ? "100%" : isExtraSmallScreen ? "100%" : "60%",

          alignItems: "center",
          flexDirection: isSmallScreen
            ? "column"
            : isExtraSmallScreen
            ? "column"
            : null,
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
            marginTop: isSmallScreen ? 20 : isExtraSmallScreen ? 20 : null,
            flexDirection: isSmallScreen
              ? "column"
              : isExtraSmallScreen
              ? "column"
              : null,
            gap: isSmallScreen
              ? 60
              : isExtraSmallScreen
              ? 60
              : isMediumScreen
              ? 50
              : 200,
          }}
        >
          <li
            style={{
              borderBottom: selectedMenu == "home" ? "1px solid white" : null,
            }}
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            style={{
              borderBottom:
                selectedMenu == "services" ? "1px solid white" : null,
            }}
            onClick={() => handleScroll("services")}
          >
            Services
          </li>
          <li
            style={{
              borderBottom: selectedMenu == "skills" ? "1px solid white" : null,
            }}
            onClick={() => handleScroll("skills")}
          >
            Skills
          </li>
          <li
            style={{
              borderBottom: selectedMenu == "work" ? "1px solid white" : null,
            }}
            onClick={() => handleScroll("work")}
          >
            Work
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
