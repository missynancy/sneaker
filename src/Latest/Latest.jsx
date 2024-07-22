import React from "react";
import video1 from "../../assets/latest1 - Copy.mp4";

export const Latest = ({ latestPlay }) => {
  return (
    <video className="background" src={video1} type="video/mp4" controls autoPlay={latestPlay} />
  );
};
