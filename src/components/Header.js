import React from "react";

export default function Header(props) {
  const { data } = props;

  return (
    <header>
      <h1>{data.date}'s AMOD</h1>
      <h2>
        <em>Astronomy Media of the Day</em>
      </h2>
      <h3>A new awesome piece of media every day</h3>
      <p>Come back tomorrow to discover more awesome stuff!</p>
    </header>
  );
}
