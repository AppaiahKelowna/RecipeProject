import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  //*****/

  function handleClick() {}
  //*****/

  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [receipeShown, setReceipeShown] = React.useState(false);

  function addIngredients(formData) {
    let newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  return (
    <main>
      {/* <form onSubmit={submit}> */}
      <form action={addIngredients}>
        <input placeholder="e.g. Oregano" name="ingredient" />
        <button onClick={handleClick}>
          <span>+ Add ingredient</span>
        </button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList
          ingredients={ingredients}
          handleRecipeShown={setReceipeShown}
        />
      ) : null}
      {receipeShown ? <ClaudeRecipe /> : null}
    </main>
  );
}
