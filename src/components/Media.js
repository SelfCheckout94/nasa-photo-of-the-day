import React from "react";
import ReactPlayer from "react-player";

export default function Media(props) {
  const { data } = props;

  return data.media_type === "video" ? (
    <ReactPlayer url={data.url} />
  ) : (
    <img alt="APOD" src={data.url} />
  );
}
