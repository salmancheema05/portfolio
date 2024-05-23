import React from "react";
import useResponsive from "../hook/useResponsive";
const DefaultHeadings = ({ tag, children, textposition = "left", styles }) => {
  const Tag = tag;
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Tag
      style={{
        background: isSmallScreen
          ? null
          : isExtraSmallScreen
          ? null
          : "-webkit-linear-gradient(90deg, #8e59f8  ,#e5dafd )",
        webkitBackgroundClip: isSmallScreen
          ? null
          : isExtraSmallScreen
          ? null
          : "text",
        WebkitTextFillColor: isSmallScreen
          ? null
          : isExtraSmallScreen
          ? null
          : "transparent",
        color: isSmallScreen
          ? "#8750f7"
          : isExtraSmallScreen
          ? "#8750f7"
          : null,
        fontWeight: 700,
        marginTop: 5,
        fontSize: isSmallScreen ? 40 : isExtraSmallScreen ? 30 : 50,
        textAlign: textposition,
        ...styles,
      }}
    >
      {children}
    </Tag>
  );
};

export default DefaultHeadings;
