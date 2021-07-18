import React, { useEffect, useState } from "react";

import axios from "axios";

export default function SelectDate(props) {
  const [data, setData] = useState("");
  const [date, setDate] = useState("");
  const left = "<";
  const right = ">";

  return (
    <>
      <h4>Article by date</h4>
      <div>
        <input id="dateInput" type="text" placeholder="search your date :)" />
        <button
          type="submit"
          onClick={() => setDate(document.getElementById("dateInput").value)}
        >
          {console.log(date)}
          Submit
        </button>
      </div>
      <div>
        <input type="date" value={data.date} max={data.date} min="1995-06-16" />
      </div>
      <div>
        {useEffect(() => {
          axios
            .get(
              `https://api.nasa.gov/planetary/apod?date=${date}&api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
            )
            .then((res) => {
              setData(res.data);
            })
            .catch((err) => console.error(err));
        }, [date])}
        ;<p>{data.title}</p>
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
