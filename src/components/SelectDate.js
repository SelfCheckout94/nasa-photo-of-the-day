import React, { useEffect, useState } from "react";

import axios from "axios";

export default function SelectDate(props) {
  const { data, setSelectedDate } = props;
  const [apiData, setApiData] = useState("");
  const [date, setDate] = useState("");
  const left = "<";
  const right = ">";

  return (
    <>
      <h4>Article by date</h4>
      <div>
        <input id="dateInput" type="text" placeholder="yyyy-mm-dd" />
        <button
          type="submit"
          onClick={() => setDate(document.getElementById("dateInput").value)}
        >
          Search
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
              setApiData(res.data);
            })
            .catch((err) => console.error(err));
        }, [date])}
        <p>{apiData.title}</p>
        <p>{apiData.date}</p>
        <p>{apiData.explanation}</p>
      </div>
      <button
        id="goToButton"
        onClick={() => {
          props.setSelectedDate(date);
          console.log(props.selectedDate);
        }}
      >
        Go To Date
      </button>
      {/* {console.log(document.getElementById("goToButton").value)} */}
      <div>
        <button>{left}</button>
        <button>Random</button>
        <button>{right}</button>
      </div>
    </>
  );
}
