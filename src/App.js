import "./App.css";

import React, { useEffect } from "react";

import Header from "./components/Header";
import Media from "./components/Media";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/#apod`)
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       debugger;
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Media />
    </>
  );
}

export default App;
