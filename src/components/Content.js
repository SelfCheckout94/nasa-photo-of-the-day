import Media from "./Media";
import React from "react";

export default function Content(props) {
  const { data } = props;

  return (
    <>
      <div>{data.title}</div>
      <div>
        <Media data={data} />
      </div>
      <p>{data.explanation}</p>
    </>
  );
}
