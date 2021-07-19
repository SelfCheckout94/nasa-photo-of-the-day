import "./App.css";

import React, { useEffect, useState } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import SelectDate from "./components/SelectDate";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [selectedDate]);

  return (
    <>
      <Header data={data} />
      <SelectDate data={data} setSelectedDate={setSelectedDate} />
      <Content data={data} />
    </>
  );
}

export default App;
