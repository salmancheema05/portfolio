import React from "react";
import useResponsive from "../hook/useResponsive";
const DefaultHeadings = ({ tag, children, textposition = "left", styles }) => {
  const Tag = tag;
  const { isSmallScreen, isExtraSmallScreen } = useResponsive();
  return (
    <Tag
      style={{
        background: "-webkit-linear-gradient(90deg, #8e59f8  ,#e5dafd )",
        webkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
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
