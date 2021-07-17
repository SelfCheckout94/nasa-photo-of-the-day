import React, { useEffect, useState } from "react";

import axios from "axios";

export default function SelectDate(props) {
  const { data } = props;
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
          onClick={(e) => setDate(document.getElementById("dateInput").value)}
        >
          Submit
        </button>
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
