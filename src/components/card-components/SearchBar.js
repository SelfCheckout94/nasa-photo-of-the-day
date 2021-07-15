import React from "react";
import SelectDate from "../SelectDate";

export default function SearchBar(props) {
  const { data } = props;

  return (
    <>
      <input type="text" placeholder="search your date :)" />
      <button type="submit">Submit</button>
    </>
  );
}
