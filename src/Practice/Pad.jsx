import React from "react";

export default function Pad(props) {
  const opacity = props.on ? 1 : 0.1;

  return (
    <button
      key={props.id}
      style={{
        backgroundColor: props.color,
        width: "100px",
        height: "100px",
        opacity: opacity,
      }}
      onClick={() => props.handleClick(props.id)}
    ></button>
  );
}
