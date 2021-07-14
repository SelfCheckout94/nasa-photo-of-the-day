import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Header() {
  const [date, setDate] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
      )
      .then((res) => {
        setDate(res.data.date);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <header>
      <h1>{date}'s AMOD</h1>
      <h2>
        <em>Astronomy Media of the Day</em>
      </h2>
      <h3>A new awesome piece of media every day</h3>
      <p>Come back tomorrow to discover more awesome stuff!</p>
    </header>
  );
}
