// import React from "react";
// import { useState } from "react";

// export default function PracticePage() {
//   const [feelings, setFeelings] = useState(true);

//   function changeValue() {
//     setFeelings((previousVal) => !previousVal);
//   }

//   const [favoriteThings, setFavoriteThings] = React.useState(["💦🌹", "😺"]);

//   function addFavoriteThing() {
//     setFavoriteThings((previousVal) => [...previousVal, "Test"]);
//   }

//   return (
//     <div>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button onClick={changeValue}>{feelings ? "No" : "Yes"}</button>
//       <main>
//         <button onClick={addFavoriteThing}>Add item</button>
//         <ul>
//           <li>{favoriteThings}</li>
//         </ul>
//       </main>
//     </div>
//   );
// }

export default function FormInReact() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formEle = event.currentTarget;
  //   const formData = new FormData(formEle);
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   console.log(email);
  //   console.log(password);
  //   formEle.reset();
  // }

  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");
    let allData = {
      ...data,
      dietaryRestrictions,
    };
    console.log(allData);
  }
  return (
    <section>
      <h1>Signup Form</h1>
      {/* <form method="POST" onSubmit={handleSubmit}> */}
      <form action={signUp}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue="joe@gmail.com"
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue="Paseer"
        ></input>
        <br />
        <fieldset>
          <label>
            {" "}
            Full-time
            <input type="radio" name="employement" value="Full - time" />
          </label>
          <label>
            {" "}
            Part-time
            <input type="radio" name="employement" value="Part - time" />
          </label>
          <label>
            {" "}
            Unemployed
            <input type="radio" name="employement" value="Unemployed" />
          </label>
        </fieldset>

        <fieldset>
          <label>
            {" "}
            Kosher
            <input type="checkbox" name="dietaryRestrictions" value="Kosher" />
          </label>
          <label>
            {" "}
            Vegan
            <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
          </label>
          <label>
            {" "}
            Gluten-free
            <input
              type="checkbox"
              name="dietaryRestrictions"
              value="Gluten-free"
            />
          </label>
        </fieldset>
        <label htmlFor="selectOption">
          <select id="selectOption" name="selectOption">
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>orange</option>
            <option>pink</option>
          </select>
        </label>
        <button>submit</button>
      </form>
    </section>
  );
}
