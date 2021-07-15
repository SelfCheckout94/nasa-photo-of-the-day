import "./App.css";

import React, { useEffect, useState } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import SelectDate from "./components/SelectDate";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const currentDate = "2020-07-14";
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header data={data} />
      <SelectDate data={data} />
      <Content data={data} />
    </>
  );
}

export default App;
