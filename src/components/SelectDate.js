import React, { useEffect, useState } from "react";

import SearchBar from "./card-components/SearchBar";

export default function SelectDate(props) {
  const { data } = props;
  const left = "<";
  const right = ">";

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <>
      <h4>Article by date</h4>
      <div>
        <SearchBar />
      </div>
      <div>
        <input type="date" value={data.date} max={data.date} min="1995-06-16" />
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
      </div>
      <button>Go To Date</button>
      <div>
        <button>{left}</button>
        <button>Random</button>
        <button>{right}</button>
      </div>
    </>
  );
}
