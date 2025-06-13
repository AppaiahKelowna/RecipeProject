import padsArray from "./PadsArray";
import { useState } from "react";
import Pad from "./Pad";

export default function PadApp() {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from pads.js
   * 2. Map over that state array and display each one
   *    as a <button> (CSS is already written for you)
   *    (Don't worry about using the "on" or "color"
   *    properties yet)
   */

  const [pads, setPads] = useState(padsArray);

  const buttons = pads.map((pad) => (
    <Pad id={pad.id} color={pad.color} on={pad.on} handleClick={handleClick} />
  ));

  function handleClick(id) {
    setPads((pad) =>
      pad.map((pad) => {
        return pad.id === id ? { ...pad, on: !pad.on } : pad;
      })
    );
  }

  return (
    <main>
      <div className="pad-container">{buttons}</div>
    </main>
  );
}
