import React from "react";
// import avatar from "./assets/user.png";
import avatar from "./assets/EmployeeCard.jpg";
import starFilled from "./assets/starFilled.png";
import starEmpty from "../src/assets/star.png";

export default function EmployeePage() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact((prev) => {
      return {
        ...prev,
        isFavorite: !prev.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <Star isFilled={contact.isFavorite} Click={toggleFavorite} />
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

function Star(prop) {
  let starIcon = prop.isFilled ? starFilled : starEmpty;
  return (
    <button
      onClick={prop.Click}
      aria-pressed={false}
      className="favorite-button"
    >
      <img src={starIcon} alt="empty star icon" className="favorite" />
    </button>
  );
}
