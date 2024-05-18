import React from "react";

const DefaultHeadings = ({ tag, children, textposition = "left", styles }) => {
  const Tag = tag;
  return (
    <Tag
      style={{
        background: "-webkit-linear-gradient(90deg, #8e59f8  ,#e5dafd )",
        webkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 700,
        marginTop: 5,
        fontSize: 50,
        textAlign: textposition,
        ...styles,
      }}
    >
      {children}
    </Tag>
  );
};

export default DefaultHeadings;
