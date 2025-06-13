import React from "react";
import avatar from "../assets/EmployeeCard.jpg";

export default function PracticeHeader(props) {
  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */

  return (
    <header>
      <img src={avatar} />
      <p>{props.userName}</p>
    </header>
  );
}
