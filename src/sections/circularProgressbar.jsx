import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DefaultCircularProgressBar = ({ percentage }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        rotation: 0,
        strokeLinecap: "butt",
        textSize: "16px",
        pathTransitionDuration: 0.5,
        pathColor: "#8750f7",
        textColor: "#8750f7",
        trailColor: "gray",
        backgroundColor: "#3e98c7",
      })}
    />
  );
};

export default DefaultCircularProgressBar;
