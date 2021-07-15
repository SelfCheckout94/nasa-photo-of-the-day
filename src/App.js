import "./App.css";

import React, { useEffect, useState } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=zdoVLMb0oOoFn7DNizUANf4wlPqtHuMEzkCVhChh`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header data={data} />
      <Content data={data} />
    </>
  );
}

export default App;
