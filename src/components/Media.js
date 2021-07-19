import React from "react";
import ReactPlayer from "react-player";

export default function Media(props) {
  const { data } = props;
  console.log(data.url);
  return data.media_type === "video" ? (
    <ReactPlayer url={data.url} />
  ) : (
    <img alt="APOD" src={data.url} />
  );
}
