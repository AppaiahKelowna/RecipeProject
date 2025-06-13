import React, { useState } from "react";

export default function JokesPage(props) {
  const [isShown, setIsShown] = useState(false);
  function toggle() {
    setIsShown((prev) => !prev);
  }

  return (
    <>
      {props.setUp && <h2>{props.setUp}</h2>}
      {isShown && <p>{props.punchLine}</p>}
      <button onClick={toggle}>{isShown ? "Hi " : "show "}PunchLine</button>
    </>
  );
}
