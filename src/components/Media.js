import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";
import axios from "axios";

export default function Media() {
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
      )
      .then((res) => {
        console.log(res.data);
        setMedia(res.data.url);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ReactPlayer url={media} />
      <div>{title}</div>
      <p>{explanation}</p>
    </>
  );
}
