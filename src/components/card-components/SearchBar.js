import React, { useEffect, useState } from "react";

import axios from "axios";

export default function SearchBar(props) {
  const [date, setDate] = useState("");

  return (
    <>
      {useEffect(() => {
        axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
        );
      })}
      <input
        type="text"
        placeholder="search your date :)"
        onChange={() => setDate()}
      />
      <button type="submit">Submit</button>
    </>
  );
}
